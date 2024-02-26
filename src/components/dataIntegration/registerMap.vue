<template>
  <div style="height: 100%; width: 100%" id="Map" ref="map"></div>
</template>

<script>
import "ol/ol.css";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Tile as TileLayer, Heatmap as HeatmapLayer } from "ol/layer";
import Proj from "ol/proj/Projection";
import XYZ from "ol/source/XYZ";
import { Map, View, Feature, ol } from "ol";
import { Style, Stroke, Fill } from "ol/style";
import { Polygon, Point } from "ol/geom";
import { defaults as defaultControls } from "ol/control";
import { fromLonLat } from "ol/proj";
import areaGeo from "../../assets/province/510000.json";
import axios from "axios";
export default {
  data() {
    return {
      map: null,
      totalData: {},
      areaName: [],
      areaNumber: [],
    };
  },
  methods: {
    getData() {
      return axios
        .get(`${this.$store.getters.getIp}/students/register/location`)
        .then((response) => {
          this.totalData = response.data.data;
          // console.log(this.totalData);
          this.areaName = this.totalData.addresses;
          this.areaNumber = this.totalData.addressCounts;
          // console.log("注册地:", this.areaName);
          // console.log("注册人数:", this.areaNumber);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    // 初始化地图
    initMap() {
      this.map = new Map({
        target: "Map",
        controls: defaultControls({
          zoom: true,
        }).extend([]),
        layers: [
          new TileLayer({
            source: new XYZ({
              url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            }),
          }),
        ],
        view: new View({
          center: fromLonLat([104.065735, 35.959962]),
          zoom: 4.5,
          maxZoom: 8,
          minZoom: 4.5,
        }),
      });
    },
    // 设置区域
    addArea(geo = []) {
      if (geo.length == 0) {
        return false;
      }
      let features = [];
      geo.forEach((g) => {
        let lineData = g.features[0];
        let routeFeature = "";
        if (lineData.geometry.type == "MultiPolygon") {
          routeFeature = new Feature({
            geometry: new MultiPolygon(lineData.geometry.coordinates).transform(
              "EPSG:4326",
              "EPSG:3857"
            ),
          });
        } else if (lineData.geometry.type == "Polygon") {
          routeFeature = new Feature({
            geometry: new Polygon(lineData.geometry.coordinates).transform(
              "EPSG:4326",
              "EPSG:3857"
            ),
          });
        }
        routeFeature.setStyle(
          new Style({
            fill: new Fill({
              color: "#4e98f444",
            }),
            stroke: new Stroke({
              width: 3,
              color: [71, 137, 227, 1],
            }),
          })
        );
        features.push(routeFeature);
      });
      // 设置图层
      let routeLayer = new VectorLayer({
        source: new VectorSource({
          features: features,
        }),
      });
      // 添加图层
      this.map.addLayer(routeLayer);
    },
    // 添加热力图
    addHeatMap() {
      let colors = ["#2200FF", "#16D9CC", "#4DEE12", "#E8D225", "#EF1616"];
      let hatmapData = [];
      for (let i = 0; i < this.areaName.length; i++) {
        const name = this.areaName[i];
        const number = this.areaNumber[i];
        for (let j = 0; j < number; j++) {
          hatmapData.push({ name: name });
        }
      }
      console.log(hatmapData);
      let codeList = {
        四川省: { center: { lng: 104.061902, lat: 30.609503 } },
        云南省: { center: { lng: 101.592433, lat: 24.864212 } },
        广东省: { center: { lng: 113.26653, lat: 23.132191 } },
        北京市: { center: { lng: 116.407526, lat: 39.90403 } },
        浙江省: { center: { lng: 120.152792, lat: 30.267447 } },
        江苏省: { center: { lng: 118.796877, lat: 32.060255 } },
        重庆市: { center: { lng: 106.504959, lat: 29.533155 } },
        安徽省: { center: { lng: 117.329949, lat: 31.733806 } },
        福建省: { center: { lng: 119.295143, lat: 26.10078 } },
        甘肃省: { center: { lng: 103.823557, lat: 36.058039 } },
        广西壮族自治区: { center: { lng: 108.320004, lat: 22.82402 } },
        贵州省: { center: { lng: 106.713478, lat: 26.578343 } },
        海南省: { center: { lng: 110.349228, lat: 20.017377 } },
        河北省: { center: { lng: 114.530828, lat: 38.037057 } },
        黑龙江省: { center: { lng: 126.642464, lat: 45.756967 } },
        湖北省: { center: { lng: 114.298572, lat: 30.584355 } },
        湖南省: { center: { lng: 112.982279, lat: 28.19409 } },
        吉林省: { center: { lng: 125.3245, lat: 43.886841 } },
        江西省: { center: { lng: 115.816654, lat: 28.77829 } },
        辽宁省: { center: { lng: 123.429096, lat: 41.796767 } },
        内蒙古自治区: { center: { lng: 111.670801, lat: 40.818311 } },
        宁夏回族自治区: { center: { lng: 106.278179, lat: 38.46637 } },
        青海省: { center: { lng: 101.780268, lat: 36.620939 } },
        山东省: { center: { lng: 117.000923, lat: 36.675808 } },
        上海市: { center: { lng: 121.473701, lat: 31.230416 } },
        山西省: { center: { lng: 112.562678, lat: 37.873499 } },
        陕西省: { center: { lng: 108.948024, lat: 34.263161 } },
        天津市: { center: { lng: 117.200983, lat: 39.084158 } },
        新疆维吾尔自治区: { center: { lng: 87.617733, lat: 43.792818 } },
        西藏自治区: { center: { lng: 91.132212, lat: 29.660361 } },
        河南省: { center: { lng: 113.753394, lat: 34.765869 } },
        澳门特别行政区: { center: { lng: 113.54909, lat: 22.198951 } },
        香港特别行政区: { center: { lng: 114.173355, lat: 22.320048 } },
      };

      this.layer = new HeatmapLayer({
        source: new VectorSource(),
        blur: 30,
        radius: 15,
        gradient: colors,
      });
      this.map.addLayer(this.layer);
      this.AppendFeatures(hatmapData, colors, codeList, 50);
    },
    // 增加要素至热力图
    AppendFeatures(hatmapData, colors, points, max) {
      for (var i in hatmapData) {
        if (points[hatmapData[i].name]) {
          var coords = points[hatmapData[i].name];
          this.max = max;
          var f = new Feature({
            geometry: new Point(
              fromLonLat([coords.center.lng, coords.center.lat])
            ),
          });
          this.layer.getSource().addFeature(f);
        }
      }
    },
  },
  mounted() {
    this.getData().then(() => {
      this.initMap(); // 初始化地图
      this.addArea(Array.from(areaGeo)); // 添加四川省的边界描边和填充
      this.addHeatMap(); // 添加热力图数据
    });
  },
};
</script>