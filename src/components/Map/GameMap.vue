<template>
  <div class="col-12" id="mapdiv" ref="chartdiv"></div>
</template>

<style scoped>
#mapdiv {
  width: 100vw;
  height: 100vh;
}
</style>


<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themesAnimated from "@amcharts/amcharts4/themes/animated";
import am4chartsGeodataWorld from "@amcharts/amcharts4-geodata/worldLow";
import { pointsToPath } from "@amcharts/amcharts4/.internal/core/rendering/Path";
import { lab } from "d3";

import { mapState, mapActions } from "vuex";
import mapService from "@/services/mapService";
import { connect } from "net";
import { privateDecrypt } from "crypto";
import { release } from "os";
import { constants } from "fs";
import config from "@/../config";
import mapConsts from "@/components/Map/MapConstants";

export default {
  name: "GameMap",

  data() {
    return {
      unlockedCountries: [],
      lockedCountries: [],
      lastSelectedCountry: null,
      allCategories: {},
      isInterfaceHidden: false
    };
  },
  async mounted() {
    // Download required info from server
    await this.getMapCountries();
    await this.getCountriesCategories();
    // Choose theme
    am4core.useTheme(am4themesAnimated);
    
    console.log(mapConsts);

    // Create map instance
    const map = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
    map.geodata = am4chartsGeodataWorld;
    map.projection = new am4maps.projections.Miller();
    map.maxPanOut = 0;

    // All countries background
    const worldSeries = map.series.push(new am4maps.MapPolygonSeries());
    worldSeries.useGeodata = true;
    worldSeries.mapPolygons.template.strokeOpacity = 0;

    // Locked countries
    const lockedCountriesSeries = map.series.push(
      new am4maps.MapPolygonSeries()
    );
    lockedCountriesSeries.useGeodata = true;
    lockedCountriesSeries.include = this.lockedCountries.map(c => c.ISO);
    lockedCountriesSeries.mapPolygons.template.fill =
      mapConsts.lockedCountryFillColor;
    lockedCountriesSeries.mapPolygons.template.events.on(
      "hit",
      this.countryPolygonClick,
      this
    );

    // locked country interface
    const lockedCountryInterfaceSeries = new am4maps.MapImageSeries();
    map.series.push(lockedCountryInterfaceSeries);
    lockedCountryInterfaceSeries.hidden = true; // initialy hidden (map zoomed out)
    const lockedCountryInterfaceTemplate =
      lockedCountryInterfaceSeries.mapImages.template;
    lockedCountryInterfaceTemplate.propertyFields.latitude = 'centerLatitude';
    lockedCountryInterfaceTemplate.propertyFields.longitude = 'centerLongitude';
    lockedCountryInterfaceTemplate.contextMenuDisabled = true;
    lockedCountryInterfaceTemplate.events.on("hit", this.lockIconClick, this);

    // add lock icon
    const lockImage = lockedCountryInterfaceTemplate.createChild(am4core.Image);
    lockImage.href = require('@/assets/icons/map_lock_icon.png');
    lockImage.width = mapConsts.lockIconSize;
    lockImage.verticalCenter = 'middle';
    lockImage.horizontalCenter = 'middle';
    lockImage.dy = -3;

    // add price label
    const priceLabel = lockedCountryInterfaceTemplate.createChild(
      am4core.Label
    );
    priceLabel.propertyFields.text = 'price';
    priceLabel.fontSize = 5;
    priceLabel.verticalCenter = 'middle';
    priceLabel.horizontalCenter = 'middle';
    priceLabel.dy = 3;
    priceLabel.dx = 1;

    // add data to locked countries interface
    this.lockedCountries.forEach(country => {
      country.price = country.price + "$";
      lockedCountryInterfaceSeries.addData(country);
    });

    // Unlocked countries
    const unlockedCountriesSeries = map.series.push(
      new am4maps.MapPolygonSeries()
    );
    unlockedCountriesSeries.useGeodata = true;
    unlockedCountriesSeries.include = this.unlockedCountries.map(c => c.ISO);
    unlockedCountriesSeries.mapPolygons.template.fill =
      mapConsts.unlockedCountryFillColor;
    unlockedCountriesSeries.mapPolygons.template.events.on(
      "hit",
      this.countryPolygonClick,
      this
    );

    // Unlocked coutry interface
    const unlockedCountryInterfaceSeries = new am4maps.MapImageSeries();
    // unlockedCountryInterfaceSeries.data = categories;
    unlockedCountryInterfaceSeries.dataFields.value = 'name';
    unlockedCountryInterfaceSeries.hidden = true; // initialy hidden (map zoomed out)
    map.series.push(unlockedCountryInterfaceSeries);
    // unlockedCountryInterfaceSeries.alwaysShowTooltip = true; // <---- why is this not working ?!

    const unlockedCountryInterfaceTemplate =
      unlockedCountryInterfaceSeries.mapImages.template;
    unlockedCountryInterfaceTemplate.propertyFields.latitude = 'latitude';
    unlockedCountryInterfaceTemplate.propertyFields.longitude = 'longitude';
    unlockedCountryInterfaceTemplate.nonScaling = false;
    unlockedCountryInterfaceTemplate.clickable = true;
    unlockedCountryInterfaceTemplate.contextMenuDisabled = true;

    // Enlarge category on hover
    unlockedCountryInterfaceTemplate.events.on("over", ev => {
      ev.target.scale = 1.2;
    });
    unlockedCountryInterfaceTemplate.events.on("out", ev => {
      ev.target.scale = 1.0;
    });

    unlockedCountryInterfaceTemplate.events.on("hit", ev => {
      // let category = ev.target.dataItem.dataContext;
    });

    // Draw categories interface
    this.unlockedCountries.forEach(c => {
      const countryCategories = c.categories;
      if (countryCategories !== null) {
        unlockedCountryInterfaceSeries.addData(countryCategories);

        const points = this.getCirclePoints(
          countryCategories.length,
          mapConsts.circleDistanceFromCenter,
          0,
          0
        );

        for (let i = 0; i < countryCategories.length; i += 1) {
          countryCategories[i].latitude = c.centerLatitude;
          countryCategories[i].longitude = c.centerLongitude;

          const categoryIcon = unlockedCountryInterfaceTemplate.createChild(
            am4core.Image
          );
          categoryIcon.href = `${config.apiUrl}/images/${countryCategories[i].category_icon}`;
          categoryIcon.dx = points[i][0];
          categoryIcon.dy = points[i][1];
          categoryIcon.width = mapConsts.circleRadius * 2;
          categoryIcon.verticalCenter = 'middle';
          categoryIcon.horizontalCenter = 'middle';

          const label = unlockedCountryInterfaceTemplate.createChild(
            am4core.Label
          );

          label.dx = categoryIcon.dx + mapConsts.labelDxOffset;
          label.dy = categoryIcon.dy + mapConsts.labelDyOffset;
          label.fontSize = mapConsts.labelFontSize;
          label.fontWeight = 'bold';
          label.fontFamily = 'Arial';
          label.horizontalCenter ='middle';
          label.verticalCenter = 'middle';
          label.text = countryCategories[i].category_name;
        }
      }
    });

    // map zoom events
    map.events.on('zoomlevelchanged', ev => {
      if (unlockedCountryInterfaceTemplate !== null) {
        if (
          map.zoomLevel > mapConsts.interfaceShowZoomLevel &&
          this.isInterfaceHidden
        ) {
          lockedCountryInterfaceSeries.show();
          unlockedCountryInterfaceSeries.show();
          this.isInterfaceHidden = false;
        } else if (
          map.zoomLevel <= mapConsts.interfaceShowZoomLevel &&
          !this.isInterfaceHidden
        ) {
          lockedCountryInterfaceSeries.hide();
          unlockedCountryInterfaceSeries.hide();
          this.isInterfaceHidden = true;
        }
      }
    });
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
    async getCountriesCategories() {
      for (let i = 0; i < this.unlockedCountries.length; i++) {
        this.unlockedCountries[i].categories = await mapService.getCountryCategories(
          this.user,
          this.unlockedCountries[i].ISO
        );
      }
    },
    countryPolygonClick(ev) {
      // Reset zoom if already zoomed to country
      if (this.lastSelected === ev.target) {
        ev.target.series.chart.goHome();
        this.lastSelected = null;
        return;
      }

      ev.target.series.chart.zoomToMapObject(ev.target);
      this.lastSelected = ev.target;

      // const countryId = ev.target.dataItem.dataContext.id;
    },
    async lockIconClick(ev) {
      const countryISO = ev.target.dataItem.dataContext.ISO;

      let result = await mapService.buyCountry(this.user, countryISO);
      if (result.status) {
        ev.target.baseSprite.openPopup('You bought ' + countryISO);
        ev.target.baseSprite.validateData();
      } else {
        ev.target.baseSprite.openPopup(
          'Unable to buy country.\n' + result.comment
        );
      }
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
    },
  },
};
</script>
