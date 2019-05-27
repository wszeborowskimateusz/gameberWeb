<template>
    <div class="mapdiv" ref="chartdiv"></div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import am4chartsGeodataWorld from '@amcharts/amcharts4-geodata/worldLow';

am4core.useTheme(am4themesAnimated);

export default {
  name: 'GameMap',
  mounted() {
    // Choose theme
    am4core.useTheme(am4themesAnimated);

    // Create map instance
    const map = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
    // Set map definition
    map.geodata = am4chartsGeodataWorld;
    // Set map projection
    map.projection = new am4maps.projections.Miller();


    // World map series
    const worldSeries = map.series.push(new am4maps.MapPolygonSeries());
    worldSeries.useGeodata = true;

    // Default country polygon template
    const polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.applyOnClones = true;
    polygonTemplate.togglable = true;
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeOpacity = 0;

    const availableCountries = [
      'IN', 'AU', 'CA', 'BR',
    ];

    // Available countries series
    const availableCountriesSeries = map.series.push(new am4maps.MapPolygonSeries());
    availableCountriesSeries.useGeodata = true;
    availableCountriesSeries.include = availableCountries;

    // Available country polygon template
    const availablePolygonTemplate = availableCountriesSeries.mapPolygons.template;
    availablePolygonTemplate.applyOnClones = true;
    availablePolygonTemplate.togglable = true;
    availablePolygonTemplate.tooltipText = '{name}';
    availablePolygonTemplate.nonScalingStroke = true;
    availablePolygonTemplate.strokeOpacity = 0.5;
    availablePolygonTemplate.fill = am4core.color('black');

    // Selected state
    const ss = availablePolygonTemplate.states.create('active');
    ss.properties.stroke = am4core.color('red');
    ss.properties.strokeWidth = 2;
    ss.properties.strokeOpacity = 0;

    // Hover state
    const hs = availablePolygonTemplate.states.create('hover');
    hs.properties.stroke = am4core.color('red');
    hs.properties.strokeWidth = 2;
    ss.properties.strokeOpacity = 0;


    // Country color codes
    const countryColor = {
      US: 'red',
      PL: 'green',
      FR: 'blue',
      GB: 'yellow',
      RU: 'pink',
    };

    Object.keys(countryColor).forEach((e) => {
      const countrySeries = map.series.push(new am4maps.MapPolygonSeries());
      countrySeries.useGeodata = true;
      countrySeries.include = [e];

      const countryPolygonTemplate = countrySeries.mapPolygons.template;
      countryPolygonTemplate.applyOnClones = true;
      countryPolygonTemplate.togglable = true;
      countryPolygonTemplate.tooltipText = '{name}';
      countryPolygonTemplate.nonScalingStroke = true;
      countryPolygonTemplate.strokeOpacity = 0.5;
      countryPolygonTemplate.fill = am4core.color(countryColor[e]);
    });

    // Convert colors to am4core class

    // // Visited countries series
    // let visitedCountriesSeries = map.series.push(new am4maps.MapPolygonSeries());
    // visitedCountriesSeries.useGeodata = true;
    // visitedCountriesSeries.include = ['US', 'PL', 'FR', 'GB', 'RU'];

    // // Visited country polygon template
    // let visitedPolygonTemplate = visitedCountriesSeries.mapPolygons.template;
    // visitedPolygonTemplate.applyOnClones = true;
    // visitedPolygonTemplate.togglable = true;
    // visitedPolygonTemplate.tooltipText = '{name}';
    // visitedPolygonTemplate.nonScalingStroke = true;
    // visitedPolygonTemplate.strokeOpacity = 0.5;
    // visitedPolygonTemplate.fill = am4core.color('green');

    // // Selected state
    // let ss = visitedPolygonTemplate.states.create('active');
    // ss.properties.stroke = am4core.color('red');
    // ss.properties.strokeWidth = 2;
    // ss.properties.strokeOpacity = 0;

    // // Hover state
    // let hs = visitedPolygonTemplate.states.create('hover');
    // hs.properties.stroke = am4core.color('red');
    // hs.properties.strokeWidth = 2;
    // ss.properties.strokeOpacity = 0;


    // // Small map
    // map.smallMap = new am4maps.SmallMap();
    // map.smallMap.align = 'right';
    // map.smallMap.valign = 'top';
    // map.smallMap.series.push(worldSeries);

    // Zoom control
    map.zoomControl = new am4maps.ZoomControl();

    // // Reset view button
    // let resetViewButton = new am4core.Button();
    // resetViewButton.events.on('hit', function(){
    //     map.goHome();
    // });
    // resetViewButton.icon = new am4core.Sprite();
    // resetViewButton.padding(7,5,7,5);
    // resetViewButton.width = 30;
    // resetViewButton.icon.path = 'M16,8 L14,8 L14,16 L10,16
    //  L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
    // resetViewButton.marginBottom = 10;
    // resetViewButton.parent = map.zoomControl;
    // resetViewButton.insertBefore(map.zoomControl.plusButton);


    // set div height
  },


  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  },
};


</script>

<style scoped>
    .mapdiv {
        width: 100%;
        height: 630px;
    }
</style>
