<template>
  <div class="col-12">
    <div v-if="isLoading" class="col-12 p-2 d-flex justify-content-center">
      <cube-spin class="m-2"></cube-spin>
    </div>
    <div v-else-if="userStatus != null">
      <div v-if="userStatus.status === 'map'" id="mapdiv" ref="chartdiv"></div>
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
#mapdiv {
  width: 100vw;
  height: 100vh;
}
</style>


<script>
/* eslint-disable */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themesAnimated from "@amcharts/amcharts4/themes/animated";
import am4chartsGeodataWorld from "@amcharts/amcharts4-geodata/worldLow";

import { mapState, mapActions } from "vuex";
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
      isInterfaceHidden: false,
      map: {},
      lockedCountriesSeries: {},
      lockedCountriesInterfaceSeries: {},
      unlockedCountriesSeries: {},
      unlockedCountriesInterfaceSeries: {}
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
  computed: {
    ...mapState("users", ["user"])
  },
  methods: {
    ...mapActions("userProfile", ["getUserData"]),
    async getUserStatus() {
      this.userStatus = await mapService.getUserStatus(this.user);
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
      this.isLoading = false;
      await this.getCategories();
      await this.mapLoaded();
    },
    async getMapCountries() {
      const allCountries = await mapService.getMapCountries(this.user);

      const allIds = allCountries.map(c => c._id);

      const unlockedCountries = await mapService.getUnlockedCountries(
        this.user
      );
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
      this.categories = await mapService.getAllCategories(
        this.user,
        this.unlockedCountries
      );

      this.unlockedCountries.forEach(c => {
        const countryCategories = this.categories.filter(
          cat => cat.country_id === c._id
        );

        const points = this.getCirclePoints(
          countryCategories.length,
          mapConsts.categoryIconsSpacing,
          0,
          0
        );

        for (let i = 0; i < countryCategories.length; i += 1) {
          countryCategories[i].longitude = c.centerLongitude + points[i][0];
          countryCategories[i].latitude = c.centerLatitude + points[i][1];
        }
      });
      this.categories.forEach(c => {
        c.category_icon = `${config.apiUrl}/images/${c.category_icon}`;
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
        if (
          this.lockedCountriesInterfaceSeries &&
          this.unlockedCountriesInterfaceSeries
        ) {
          if (
            this.map.zoomLevel > mapConsts.interfaceShowZoomLevel &&
            this.isInterfaceHidden
          ) {
            this.lockedCountriesInterfaceSeries.show();
            this.unlockedCountriesInterfaceSeries.show();
            this.isInterfaceHidden = false;
          } else if (
            this.map.zoomLevel <= mapConsts.interfaceShowZoomLevel &&
            !this.isInterfaceHidden
          ) {
            this.lockedCountriesInterfaceSeries.hide();
            this.unlockedCountriesInterfaceSeries.hide();
            this.isInterfaceHidden = true;
          }
        }
      });
    },
    async redrawMap() {
      this.map.series
        .removeIndex(this.map.series.indexOf(this.unlockedCountriesSeries))
        .dispose();
      this.map.series
        .removeIndex(this.map.series.indexOf(this.lockedCountriesSeries))
        .dispose();
      await this.getMapCountries();
      await this.getCategories();
      this.drawLockedCountries();
      this.drawUnlockedCountries();
      this.map.invalidateData();

      this.map.goHome();
    },
    drawLockedCountries() {
      this.lockedCountriesSeries = this.map.series.push(
        new am4maps.MapPolygonSeries()
      );
      this.lockedCountriesSeries.useGeodata = true;
      this.lockedCountriesSeries.include = this.lockedCountries.map(c => c.ISO);
      this.lockedCountriesSeries.mapPolygons.template.fill =
        mapConsts.lockedCountryFillColor;
      this.lockedCountriesSeries.mapPolygons.template.events.on(
        "hit",
        this.countryPolygonClick,
        this
      );

      // locked country interface
      this.lockedCountriesInterfaceSeries = this.map.series.push(
        new am4maps.MapImageSeries()
      );
      this.lockedCountriesInterfaceSeries.hidden = true; // initialy hidden (map zoomed out)

      const lockedCountryInterfaceTemplate = this.lockedCountriesInterfaceSeries
        .mapImages.template;
      lockedCountryInterfaceTemplate.propertyFields.latitude = "centerLatitude";
      lockedCountryInterfaceTemplate.propertyFields.longitude =
        "centerLongitude";
      lockedCountryInterfaceTemplate.contextMenuDisabled = true;
      lockedCountryInterfaceTemplate.events.on("hit", this.lockIconClick, this);

      // add lock icon
      const categoryImage = lockedCountryInterfaceTemplate.createChild(
        am4core.Image
      );
      categoryImage.href = imagesGetter.getImgUrl("game_map/map_lock_icon.png");
      categoryImage.width = mapConsts.lockIconSize;
      categoryImage.verticalCenter = "middle";
      categoryImage.horizontalCenter = "middle";
      categoryImage.dy = -3;

      // add price label
      const priceLabel = lockedCountryInterfaceTemplate.createChild(
        am4core.Label
      );
      priceLabel.propertyFields.text = "price_string";
      priceLabel.fontSize = mapConsts.labelFontSize;
      priceLabel.verticalCenter = "middle";
      priceLabel.horizontalCenter = "middle";
      priceLabel.dx = mapConsts.priceLabelDxOffset;
      priceLabel.dy = mapConsts.priceLabelDyOffset;

      // // add price label coins icon
      // const coinsImage = lockedCountryInterfaceTemplate.createChild(am4core.Image);
      // coinsImage.href = require('https://img.icons8.com/color/48/000000/coins.png');
      // coinsImage.width = 25;
      // coinsImage.verticalCenter = 'middle';
      // coinsImage.horizontalCenter = 'middle';
      // coinsImage.dy = 3;
      // coinsImage.dx = 3;

      // add data to locked countries interface
      this.lockedCountries.forEach(country => {
        country.price_string = `${country.price}$`;
        // this.lockedCountriesInterfaceSeries.addData(country);
      });
      this.lockedCountriesInterfaceSeries.addData(this.lockedCountries);
    },
    drawUnlockedCountries() {
      this.unlockedCountriesSeries = this.map.series.push(
        new am4maps.MapPolygonSeries()
      );
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

      // unlocked country interface
      this.unlockedCountriesInterfaceSeries = this.map.series.push(
        new am4maps.MapImageSeries()
      );
      this.unlockedCountriesInterfaceSeries.hidden = true; // initialy hidden (map zoomed out)

      const unlockedCountryInterfaceTemplate = this
        .unlockedCountriesInterfaceSeries.mapImages.template;
      unlockedCountryInterfaceTemplate.propertyFields.latitude = "latitude";
      unlockedCountryInterfaceTemplate.propertyFields.longitude = "longitude";
      unlockedCountryInterfaceTemplate.contextMenuDisabled = true;
      unlockedCountryInterfaceTemplate.propertyFields.tooltipText =
        "category_name";

      // category icon mouse events
      unlockedCountryInterfaceTemplate.events.on("over", ev => {
        ev.target.scale = 1.2;
      });
      unlockedCountryInterfaceTemplate.events.on("out", ev => {
        ev.target.scale = 1.0;
      });
      unlockedCountryInterfaceTemplate.events.on("hit", () => {
        // let category = ev.target.dataItem.dataContext;
        this.$router.push("games/1");
      });

      const categoryImage = unlockedCountryInterfaceTemplate.createChild(
        am4core.Image
      );
      categoryImage.propertyFields.href = "category_icon";
      categoryImage.width = mapConsts.categoryIconSize;
      categoryImage.verticalCenter = "middle";
      categoryImage.horizontalCenter = "middle";

      this.unlockedCountriesInterfaceSeries.addData(this.categories);
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
        const map = ev.target.series.chart;
        this.map.zoomToRectangle(
          this.map.north,
          this.map.east,
          45,
          28,
          this.interfaceShowZoomLevel,
          true
        );
      } else if (countryISO === "US") {
        const map = ev.target.series.chart;
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
            const result = await mapService.buyCountry(this.user, country._id);

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
