<template>
  <div class="col-12">
    <div v-if="isLoading" class="col-12 p-2 d-flex justify-content-center">
      <cube-spin class="m-2"></cube-spin>
    </div>
    <div v-if="userStatus != null">
      <div id="mapdiv" :style="userStatus.status !== 'map'
      ? 'width: 0; height: 0;' : 'width: 100vw; height: 100vh;'" ref="chartdiv"></div>
      <div v-if="userStatus.status === 'test'" class="p-5">
        <TestCard :testCategoryId="userStatus.testCategoryId"
        :testPath="'/games/' + userStatus.testCategoryId"></TestCard>
      </div>
      <div v-if="userStatus.status === 'beginner'" class="p-5">
        <BeginnerLevel :categories="this.userStatus.beginnersCategories"></BeginnerLevel>
      </div>
    </div>
    <div v-else class="p-5">
      <h1 class="mb-5">Nie udało się wczytać statusu użytkownika</h1>
      <img class="m-5" :src="imagesGetter.getImgUrl('game_map/crying.png')" />
      <img class="m-5" :src="imagesGetter.getImgUrl('game_map/nothing_found.png')" />
      <img class="m-5" :src="imagesGetter.getImgUrl('game_map/crying.png')" />
    </div>
  </div>
</template>

<style scoped>
</style>


<script>
/* eslint-disable */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themesAnimated from "@amcharts/amcharts4/themes/animated";
import am4chartsGeodataWorld from "@amcharts/amcharts4-geodata/worldLow";

import { mapActions } from "vuex";
import mapService from "@/services/mapService";
import bootbox from "@/utilities/bootbox";
import toasts from "@/utilities/toasts";
import config from "@/../config";
import mapConsts from "@/components/Map/MapConstants.vue";
import imagesGetter from "@/utilities/imagesGetter";

import CubeSpin from "vue-loading-spinner/src/components/Circle8.vue";
import TestCard from "@/components/Map/TestCard.vue";
import BeginnerLevel from "@/components/Map/BeginnerLevel.vue";

export default {
  name: "GameMap",
  data() {
    return {
      userStatus: {
        status: "",
        testCategoryId: 1,
        beginnersCategories: []
      },
      imagesGetter,
      isLoading: false,
      unlockedCountries: [],
      lockedCountries: [],
      categories: [],
      lastSelectedCountry: null,
      isNormalInterfaceHidden: false,
      isBigInterfaceHidden: false,
      isHugeInterfaceHidden: false,
      map: {},
      lockedCountriesSeries: {},
      lockedCountriesInterfaces:
      {
        normalCountrySeries: {},
        bigCountrySeries: {},
        hugeCountrySeries: {}
      },
      unlockedCountriesSeries: {},
      unlockedCountriesInterfaces: 
      {
        normalCountrySeries: {},
        bigCountrySeries: {},
        hugeCountrySeries: {}
      }
    };
  },
  components: {
    CubeSpin,
    TestCard,
    BeginnerLevel
  },
  async mounted() {
    this.isLoading = true;
    await this.getUserStatus();
    await this.onUserStatusLoaded();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    ...mapActions("userProfile", ["getUserData"]),
    async getUserStatus() {
      this.userStatus = await mapService.getUserStatus();
    },
    async onUserStatusLoaded() {
      if(this.userStatus == null) {
        return;
      }
      if (this.userStatus.status === "map") {
        await this.prepareMap();
      } else if (this.userStatus.status === "testStarted") {
        this.$router.push(`/games/${this.userStatus.testCategoryId}`);
      }
      this.isLoading = false; 
    },
    async prepareMap() {
      // Download required info from server
      await this.getMapCountries();
      await this.getCategories();
      await this.mapLoaded();
    },
    async getMapCountries() {
      const allCountries = await mapService.getMapCountries();

      // PRZYPISAINE SKALI
      allCountries.forEach(c => {        
        if (c.scale === 3) {
          Object.assign(c, mapConsts.mapInterface.hugeCountry);
        }
        else if (c.scale === 2) {
          Object.assign(c, mapConsts.mapInterface.bigCountry);
        }
        else {
          c.scale = 1;
          Object.assign(c, mapConsts.mapInterface.normalCountry);
        }

        c.price_string = `${c.price}$`;
      });


      const allIds = allCountries.map(c => c._id);

      const unlockedCountries = await mapService.getUnlockedCountries();
      const unlockedIds = unlockedCountries.map(c => c.country_id);

      const lockedIds = allIds.filter(c => !unlockedIds.includes(c));

      this.unlockedCountries = allCountries.filter(c =>
        unlockedIds.includes(c._id)
      );
      this.lockedCountries = allCountries.filter(c =>
        lockedIds.includes(c._id)
      );
    },
    async getCategories() {
      this.categories = await mapService.getAllCategories(this.unlockedCountries);

      this.unlockedCountries.forEach(c => {
        const countryCategories = this.categories.filter(
          cat => cat.country_id === c._id
        );

        countryCategories.forEach(cat => cat.scale = c.scale);

        let iconSpacing = mapConsts.mapInterface.normalCountry.categoryIconsSpacing;
        if (c.scale == 2) {
          iconSpacing = mapConsts.mapInterface.bigCountry.categoryIconsSpacing;
        }
        else if (c.scale == 3) {
          iconSpacing = mapConsts.mapInterface.hugeCountry.categoryIconsSpacing;
        }
        const points = this.getCirclePoints(
          countryCategories.length,
          iconSpacing,
          0,
          0
        );

        for (let i = 0; i < countryCategories.length; i += 1) {
          countryCategories[i].longitude = c.centerLongitude + points[i][0];
          countryCategories[i].latitude = c.centerLatitude + points[i][1];
        }
      });

      this.categories.forEach(c => {
        c.category_icon = imagesGetter.getImageServerUrl(c.category_icon);
        if (c.status === "completed") {
          c.completition_icon = imagesGetter.getImgUrl(mapConsts.completitionIconPath);
        }
        else if (c.status === "started") {
          c.completition_icon = imagesGetter.getImgUrl(mapConsts.startedIconPath);
        }
      });
    },
    async mapLoaded() {
      // Choose theme
      am4core.useTheme(am4themesAnimated);

      // Create map instance
      this.map = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
      this.map.geodata = am4chartsGeodataWorld;
      this.map.projection = new am4maps.projections.Miller();
      this.map.maxPanOut = 0;

      // All countries background
      const worldSeries = this.map.series.push(new am4maps.MapPolygonSeries());
      worldSeries.useGeodata = true;
      worldSeries.mapPolygons.template.strokeOpacity = 0;

      this.drawLockedCountries();
      this.drawUnlockedCountries();

      // map zoom events
      this.map.events.on("zoomlevelchanged", () => {
        const zoomLevel = this.map.zoomLevel;

        if (this.lockedCountriesInterfaces.normalCountrySeries) {
          if (zoomLevel > mapConsts.mapInterface.normalCountry.interfaceShowZoomLevel
            && this.isNormalInterfaceHidden) {
              this.lockedCountriesInterfaces.normalCountrySeries.show();
              if (this.unlockedCountriesInterfaces.normalCountrySeries) {
                this.unlockedCountriesInterfaces.normalCountrySeries.show();
              }
              this.isNormalInterfaceHidden = false;
          }
          else if (zoomLevel < mapConsts.mapInterface.normalCountry.interfaceShowZoomLevel
            && !this.isNormalInterfaceHidden){
              this.lockedCountriesInterfaces.normalCountrySeries.hide();
              if (this.unlockedCountriesInterfaces.normalCountrySeries) {
                this.unlockedCountriesInterfaces.normalCountrySeries.hide();
              }
              this.isNormalInterfaceHidden = true;
          }
        }

        if (this.lockedCountriesInterfaces.bigCountrySeries) {
          if (zoomLevel > mapConsts.mapInterface.bigCountry.interfaceShowZoomLevel
            && this.isBigInterfaceHidden) {
              this.lockedCountriesInterfaces.bigCountrySeries.show();
              if (this.unlockedCountriesInterfaces.bigCountrySeries) {
                this.unlockedCountriesInterfaces.bigCountrySeries.show();
              }
              this.isBigInterfaceHidden = false;
          }
          else if (zoomLevel < mapConsts.mapInterface.bigCountry.interfaceShowZoomLevel
            && !this.isBigInterfaceHidden){
              this.lockedCountriesInterfaces.bigCountrySeries.hide();
              if (this.unlockedCountriesInterfaces.bigCountrySeries) {
                this.unlockedCountriesInterfaces.bigCountrySeries.hide();
              }
              this.isBigInterfaceHidden = true;
          }
        }

        if (this.lockedCountriesInterfaces.hugeCountrySeries) {
          if (zoomLevel > mapConsts.mapInterface.hugeCountry.interfaceShowZoomLevel
            && this.isHugeInterfaceHidden) {
              this.lockedCountriesInterfaces.hugeCountrySeries.show();
              this.isHugeInterfaceHidden = false;
          }
          else if (zoomLevel < mapConsts.mapInterface.hugeCountry.interfaceShowZoomLevel
            && !this.isHugeInterfaceHidden){
              this.lockedCountriesInterfaces.hugeCountrySeries.hide();
              this.isHugeInterfaceHidden = true;
          }
        }
      });
    },
    async redrawMap() {
      const unlockedCountriesSeriesIndex = this.map.series.indexOf(this.unlockedCountriesSeries);
      const unlockedCountriesInterfaceNormalIndex = this.map.series.indexOf(this.unlockedCountriesInterfaces.normalCountrySeries);
      const unlockedCountriesInterfaceBigIndex = this.map.series.indexOf(this.unlockedCountriesInterfaces.bigCountrySeries);
      const unlockedCountriesInterfaceHugeIndex = this.map.series.indexOf(this.unlockedCountriesInterfaces.hugeCountrySeries);

      const lockedCountriesSeriesIndex = this.map.series.indexOf(this.lockedCountriesSeries);
      const lockedCountriesInterfacenNormalIndex = this.map.series.indexOf(this.lockedCountriesInterfaces.normalCountrySeries);
      const lockedCountriesInterfacenBigIndex = this.map.series.indexOf(this.lockedCountriesInterfaces.bigCountrySeries);
      const lockedCountriesInterfacenHugeIndex = this.map.series.indexOf(this.lockedCountriesInterfaces.hugeCountrySeries);
      
      await this.getMapCountries();
      await this.getCategories();
      this.drawLockedCountries();
      this.drawUnlockedCountries();

      this.map.series
        .removeIndex(this.map.series.indexOf(unlockedCountriesSeriesIndex))
        .dispose();
      this.map.series
        .removeIndex(this.map.series.indexOf(unlockedCountriesInterfaceSeriesIndex))
        .dispose();

      this.map.series
        .removeIndex(this.map.series.indexOf(lockedCountriesSeriesIndex))
        .dispose();
      this.map.series
        .removeIndex(this.map.series.indexOf(lockedCountriesInterfacenNormalIndex))
        .dispose();
      this.map.series
        .removeIndex(this.map.series.indexOf(lockedCountriesInterfacenBigIndex))
        .dispose();
      this.map.series
        .removeIndex(this.map.series.indexOf(lockedCountriesInterfacenHugeIndex))
        .dispose();

      this.map.series
        .removeIndex(this.map.series.indexOf(unlockedCountriesInterfaceNormalIndex))
        .dispose();
      this.map.series
        .removeIndex(this.map.series.indexOf(unlockedCountriesInterfaceBigIndex))
        .dispose();
      this.map.series
        .removeIndex(this.map.series.indexOf(unlockedCountriesInterfaceHugeIndex))
        .dispose();

      this.map.invalidateData();
    },
    drawLockedCountries() {
      this.lockedCountriesSeries = new am4maps.MapPolygonSeries();
      this.lockedCountriesSeries.useGeodata = true;
      this.lockedCountriesSeries.include = this.lockedCountries.map(c => c.ISO);
      this.lockedCountriesSeries.mapPolygons.template.fill =
        mapConsts.lockedCountryFillColor;
      this.lockedCountriesSeries.mapPolygons.template.events.on(
        "hit",
        this.countryPolygonClick,
        this
      );

      // locked country interfaces
      // normal country
      this.lockedCountriesInterfaces.normalCountrySeries = new am4maps.MapImageSeries();
      if (this.map.zoomLevel < mapConsts.mapInterface.normalCountry.interfaceShowZoomLevel) {
        this.lockedCountriesInterfaces.normalCountrySeries.hidden = true;
      }

      // big country
      this.lockedCountriesInterfaces.bigCountrySeries = new am4maps.MapImageSeries();
      if (this.map.zoomLevel < mapConsts.mapInterface.bigCountry.interfaceShowZoomLevel) {
        this.lockedCountriesInterfaces.bigCountrySeries.hidden = true;
      }

      // huge country
      this.lockedCountriesInterfaces.hugeCountrySeries = new am4maps.MapImageSeries();
      if (this.map.zoomLevel < mapConsts.mapInterface.hugeCountry.interfaceShowZoomLevel) {
        this.lockedCountriesInterfaces.hugeCountrySeries.hidden = true;
      }

      for (var series in this.lockedCountriesInterfaces)
      {
        const lockedCountryInterfaceTemplate = this.lockedCountriesInterfaces[series].mapImages.template;
        lockedCountryInterfaceTemplate.propertyFields.latitude = "centerLatitude";
        lockedCountryInterfaceTemplate.propertyFields.longitude = "centerLongitude";
        lockedCountryInterfaceTemplate.contextMenuDisabled = true;
        lockedCountryInterfaceTemplate.events.on("hit", this.lockIconClick, this);
      
        // add lock icon
        const categoryIcon = lockedCountryInterfaceTemplate.createChild(am4core.Image);
        categoryIcon.href = imagesGetter.getImgUrl('game_map/map_lock_icon.png');
        categoryIcon.verticalCenter = 'middle';
        categoryIcon.horizontalCenter = 'middle';
      
        // add price label
        const priceLabel = lockedCountryInterfaceTemplate.createChild(
          am4core.Label
        );
        priceLabel.propertyFields.text = "price_string";
        priceLabel.verticalCenter = "middle";
        priceLabel.horizontalCenter = "middle";

        if (series === 'normalCountrySeries')
        {
          categoryIcon.width = mapConsts.mapInterface.normalCountry.lockIconSize;
          categoryIcon.height = mapConsts.mapInterface.normalCountry.lockIconSize;


          priceLabel.fontSize = mapConsts.mapInterface.normalCountry.lockLabelFontSize;
          priceLabel.dx = mapConsts.mapInterface.normalCountry.priceLabelDxOffset;
          priceLabel.dy = mapConsts.mapInterface.normalCountry.priceLabelDyOffset;
        }
        else if (series === 'bigCountrySeries')
        {
          categoryIcon.width = mapConsts.mapInterface.bigCountry.lockIconSize;
          categoryIcon.height = mapConsts.mapInterface.bigCountry.lockIconSize;

          priceLabel.fontSize = mapConsts.mapInterface.bigCountry.lockLabelFontSize;
          priceLabel.dx = mapConsts.mapInterface.bigCountry.priceLabelDxOffset;
          priceLabel.dy = mapConsts.mapInterface.bigCountry.priceLabelDyOffset;
        }
        else if (series === 'hugeCountrySeries')
        {
          categoryIcon.width = mapConsts.mapInterface.hugeCountry.lockIconSize;
          categoryIcon.height = mapConsts.mapInterface.hugeCountry.lockIconSize;

          priceLabel.fontSize = mapConsts.mapInterface.hugeCountry.lockLabelFontSize;
          priceLabel.dx = mapConsts.mapInterface.hugeCountry.priceLabelDxOffset;
          priceLabel.dy = mapConsts.mapInterface.hugeCountry.priceLabelDyOffset;
        }
      

      }

      this.lockedCountriesInterfaces.normalCountrySeries.addData(this.lockedCountries.filter(c => c.scale == null || c.scale === 1));
      this.lockedCountriesInterfaces.bigCountrySeries.addData(this.lockedCountries.filter(c => c.scale === 2));
      this.lockedCountriesInterfaces.hugeCountrySeries.addData(this.lockedCountries.filter(c => c.scale === 3));

      this.map.series.push(this.lockedCountriesSeries);
      this.map.series.push(this.lockedCountriesInterfaces.normalCountrySeries);
      this.map.series.push(this.lockedCountriesInterfaces.bigCountrySeries);
      this.map.series.push(this.lockedCountriesInterfaces.hugeCountrySeries);
    },
    drawUnlockedCountries() {
      this.unlockedCountriesSeries = new am4maps.MapPolygonSeries();
      this.unlockedCountriesSeries.useGeodata = true;
      this.unlockedCountriesSeries.include = this.unlockedCountries.map(
        c => c.ISO
      );
      this.unlockedCountriesSeries.mapPolygons.template.fill =
        mapConsts.unlockedCountryFillColor;
      this.unlockedCountriesSeries.mapPolygons.template.events.on(
        "hit",
        this.countryPolygonClick,
        this
      );

      // Interface
      this.unlockedCountriesInterfaces.normalCountrySeries = new am4maps.MapImageSeries();
      if (this.map.zoomLevel < mapConsts.mapInterface.normalCountry.interfaceShowZoomLevel) {
        this.unlockedCountriesInterfaces.normalCountrySeries.hidden = true;
      }
      this.unlockedCountriesInterfaces.normalCountrySeries.tooltip.dy = mapConsts.mapInterface.normalCountry.categoryTootltipDyOffset;

      this.unlockedCountriesInterfaces.bigCountrySeries = new am4maps.MapImageSeries();
      if (this.map.zoomLevel < mapConsts.mapInterface.bigCountry.interfaceShowZoomLevel) {
        this.unlockedCountriesInterfaces.bigCountrySeries.hidden = true;
      }
      this.unlockedCountriesInterfaces.bigCountrySeries.tooltip.dy = mapConsts.mapInterface.bigCountry.categoryTootltipDyOffset;

      this.unlockedCountriesInterfaces.hugeCountrySeries = new am4maps.MapImageSeries();
      if (this.map.zoomLevel < mapConsts.mapInterface.hugeCountry.interfaceShowZoomLevel) {
        this.unlockedCountriesInterfaces.hugeCountrySeries.hidden = true;
      }
      this.unlockedCountriesInterfaces.hugeCountrySeries.tooltip.dy = mapConsts.mapInterface.hugeCountry.categoryTootltipDyOffset;

      for (let series in this.unlockedCountriesInterfaces) {
        const unlockedCountryInterfaceTemplate = this.unlockedCountriesInterfaces[series].mapImages.template;
        unlockedCountryInterfaceTemplate.propertyFields.latitude = "latitude";
        unlockedCountryInterfaceTemplate.propertyFields.longitude = "longitude";
        unlockedCountryInterfaceTemplate.contextMenuDisabled = true;
        unlockedCountryInterfaceTemplate.propertyFields.tooltipText = "category_name";

        // category icon mouse events
        unlockedCountryInterfaceTemplate.events.on("over", ev => {
          ev.target.scale = 1.2;
        });
        unlockedCountryInterfaceTemplate.events.on("out", ev => {
          ev.target.scale = 1.0;
        });
        
        unlockedCountryInterfaceTemplate.events.on('hit', (ev) => {
          this.$router.push('games/' + ev.target.dataItem.dataContext._id);
        });

        const categoryIcon = unlockedCountryInterfaceTemplate.createChild(am4core.Image);
        categoryIcon.propertyFields.href = 'category_icon';
        categoryIcon.verticalCenter = 'middle';
        categoryIcon.horizontalCenter = 'middle';

        const completedCategoryIcon = unlockedCountryInterfaceTemplate.createChild(am4core.Image);
        completedCategoryIcon.propertyFields.href = 'completition_icon';
        completedCategoryIcon.verticalCenter = 'middle';
        completedCategoryIcon.horizontalCenter = 'middle';

        // add category name label
        const categoryLabel = unlockedCountryInterfaceTemplate.createChild(am4core.Label);
        categoryLabel.propertyFields.text = "category_name";
        categoryLabel.verticalCenter = "middle";
        categoryLabel.horizontalCenter = "middle";

        if(series === 'normalCountrySeries')
        {
          categoryIcon.width = mapConsts.mapInterface.normalCountry.categoryIconSize;
          categoryIcon.height = mapConsts.mapInterface.normalCountry.categoryIconSize;
          
          completedCategoryIcon.width = mapConsts.mapInterface.normalCountry.completitionIconSize;
          completedCategoryIcon.height = mapConsts.mapInterface.normalCountry.completitionIconSize;
          completedCategoryIcon.dx = mapConsts.mapInterface.normalCountry.completitionIconDxOffset;
          completedCategoryIcon.dy = mapConsts.mapInterface.normalCountry.completitionIconDxOffset;

          categoryLabel.fontSize = mapConsts.mapInterface.normalCountry.categoryLabelFontSize;
          categoryLabel.dx = mapConsts.mapInterface.normalCountry.categoryLabelDxOffset;
          categoryLabel.dy = mapConsts.mapInterface.normalCountry.categoryLabelDyOffset;
        }
        else if(series == 'bigCountrySeries')
        {
          categoryIcon.width = mapConsts.mapInterface.bigCountry.categoryIconSize;
          categoryIcon.height = mapConsts.mapInterface.bigCountry.categoryIconSize;
          
          completedCategoryIcon.width = mapConsts.mapInterface.bigCountry.completitionIconSize;
          completedCategoryIcon.height = mapConsts.mapInterface.bigCountry.completitionIconSize;
          completedCategoryIcon.dx = mapConsts.mapInterface.bigCountry.completitionIconDxOffset;
          completedCategoryIcon.dy = mapConsts.mapInterface.bigCountry.completitionIconDxOffset;

          categoryLabel.fontSize = mapConsts.mapInterface.bigCountry.categoryLabelFontSize;
          categoryLabel.dx = mapConsts.mapInterface.bigCountry.categoryLabelDxOffset;
          categoryLabel.dy = mapConsts.mapInterface.bigCountry.categoryLabelDyOffset;
        }
        else if(series == 'hugeCountrySeries')
        {
          categoryIcon.width = mapConsts.mapInterface.hugeCountry.categoryIconSize;
          categoryIcon.height = mapConsts.mapInterface.hugeCountry.categoryIconSize;
          
          completedCategoryIcon.width = mapConsts.mapInterface.hugeCountry.completitionIconSize;
          completedCategoryIcon.height = mapConsts.mapInterface.hugeCountry.completitionIconSize;
          completedCategoryIcon.dx = mapConsts.mapInterface.hugeCountry.completitionIconDxOffset;
          completedCategoryIcon.dy = mapConsts.mapInterface.hugeCountry.completitionIconDxOffset;

          categoryLabel.fontSize = mapConsts.mapInterface.hugeCountry.categoryLabelFontSize;
          categoryLabel.dx = mapConsts.mapInterface.hugeCountry.categoryLabelDxOffset;
          categoryLabel.dy = mapConsts.mapInterface.hugeCountry.categoryLabelDyOffset;
        }
        

      }
      
      this.unlockedCountriesInterfaces.normalCountrySeries.addData(this.categories.filter(c => c.scale == 1));
      this.unlockedCountriesInterfaces.bigCountrySeries.addData(this.categories.filter(c => c.scale == 2));
      this.unlockedCountriesInterfaces.hugeCountrySeries.addData(this.categories.filter(c => c.scale == 3));

      
      this.map.series.push(this.unlockedCountriesSeries);
      this.map.series.push(this.unlockedCountriesInterfaces.normalCountrySeries);
      this.map.series.push(this.unlockedCountriesInterfaces.bigCountrySeries);
      this.map.series.push(this.unlockedCountriesInterfaces.hugeCountrySeries);
    },
    countryPolygonClick(ev) {
      // Reset zoom if already zoomed to country
      if (this.lastSelected === ev.target) {
        ev.target.series.chart.goHome();
        this.lastSelected = null;
        return;
      }

      const countryISO = ev.target.dataItem.dataContext.id;

      if (countryISO === "RU") {
        this.map.zoomToRectangle(
          this.map.north,
          this.map.east,
          45,
          28,
          this.interfaceShowZoomLevel,
          true
        );
      } else if (countryISO === "US") {
        this.map.zoomToRectangle(
          49,
          -66,
          25,
          -124,
          this.interfaceShowZoomLevel,
          true
        );
      } else {
        ev.target.series.chart.zoomToMapObject(ev.target);
      }

      this.lastSelected = ev.target;
    },
    async lockIconClick(ev) {
      const country = ev.target.dataItem.dataContext;
      const coinsUrl = imagesGetter.getImgUrl("game_map/coins.png");
      bootbox.confirmationDialog(
        `Czy na pewno chcesz kupić kraj
                  <span class="font-weight-bold">${country.country_name}</span>
                  za <span class="font-weight-bold">${country.price}</span> 
                  <img width="25" src="${coinsUrl}"> ?`,
        async bought => {
          if (bought) {
            const result = await mapService.buyCountry(country._id);

            if (result.status) {
              toasts.successToast(`Kupiono kraj ${country.country_name}`);
              this.getUserData();
              this.redrawMap();
            } else {
              toasts.errorToast(
                `Nie udało się kupić kraju.\n${result.comment}`
              );
            }
          }
        }
      );
    },
    getCirclePoints(numPoints, radius, x, y) {
      if (numPoints <= 1) return [[x, y]];

      const points = [];
      const dAngle = (2 * Math.PI) / numPoints;
      let angle = 0;

      for (let i = 0; i < numPoints; i += 1) {
        const p = [x + radius * Math.cos(angle), y + radius * Math.sin(angle)];
        angle += dAngle;
        points.push(p);
      }

      return points;
    }
  }
};
/* eslint-enable */
</script>
