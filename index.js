const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

//Headers
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJrIjoiNUdFaEVmSjQ2UVFFRDhTVTZXdVdKYWVHRWNRYkw5clMiLCJuIjoiYWRtaW4iLCJpZCI6Mn0=",
  },
};

//Generates png from dashboard
app.post("/save", async (request, response) => {
  console.log(request.body);
  const { url, os, equipment, init, end } = request.body;

  //Dashboard updates
  dashInfo = await axios
    .get("https://demo.huxx.io/api/dashboards/uid/h9SVG1p7k")
    .catch((error) => {
      console.log(error);
    });

  version = dashInfo.data.meta.version;

  data = {
    dashboard: {
      annotations: {
        list: [
          {
            builtIn: 1,
            datasource: "-- Grafana --",
            enable: true,
            hide: true,
            iconColor: "rgba(0, 211, 255, 1)",
            name: "Annotations & Alerts",
            type: "dashboard",
          },
        ],
      },
      editable: true,
      gnetId: null,
      graphTooltip: 0,
      id: 3,
      links: [],
      panels: [
        {
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
            },
            overrides: [],
          },
          gridPos: {
            h: 6,
            w: 6,
            x: 0,
            y: 0,
          },
          id: 7,
          options: {
            content:
              '<img src="https://s3.sa-east-1.amazonaws.com/huxx.io/huxx-light.png" width="480" height="190"/>',
            mode: "html",
          },
          pluginVersion: "7.1.0",
          targets: [
            {
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              orderByTime: "ASC",
              policy: "default",
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [],
            },
          ],
          timeFrom: null,
          timeShift: null,
          title: "",
          transparent: true,
          type: "text",
        },
        {
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
            },
            overrides: [],
          },
          gridPos: {
            h: 6,
            w: 6,
            x: 6,
            y: 0,
          },
          id: 9,
          options: {
            content: `<h1>Relatório Técnico</h1>\n<ul>\n    <li>OS: ${os} </li>\n    <li>Equipamento: ${equipment}</li>\n    </ul>\n\n<p>\nRelatório feito por Huxx - Advanced Monitoring System\n</p>\nConheça mais em:\n<a>www.huxx.io</a>`,
            mode: "html",
          },
          pluginVersion: "7.1.0",
          targets: [
            {
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              orderByTime: "ASC",
              policy: "default",
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [],
            },
          ],
          timeFrom: null,
          timeShift: null,
          title: "",
          transparent: true,
          type: "text",
        },
        {
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
            },
            overrides: [],
          },
          gridPos: {
            h: 6,
            w: 12,
            x: 12,
            y: 0,
          },
          id: 12,
          options: {
            content: "",
            mode: "html",
          },
          pluginVersion: "7.1.0",
          targets: [
            {
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              orderByTime: "ASC",
              policy: "default",
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [],
            },
          ],
          timeFrom: null,
          timeShift: null,
          title: "",
          transparent: true,
          type: "text",
        },
        {
          aliasColors: {},
          bars: false,
          dashLength: 10,
          dashes: false,
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
              unit: "amp",
            },
            overrides: [],
          },
          fill: 1,
          fillGradient: 0,
          gridPos: {
            h: 12,
            w: 24,
            x: 0,
            y: 6,
          },
          hiddenSeries: false,
          id: 2,
          legend: {
            avg: false,
            current: false,
            max: false,
            min: false,
            show: true,
            total: false,
            values: false,
          },
          lines: true,
          linewidth: 2,
          nullPointMode: "connected",
          options: {
            alertThreshold: true,
          },
          percentage: false,
          pluginVersion: "7.2.0-pre",
          pointradius: 2,
          points: false,
          renderer: "flot",
          seriesOverrides: [],
          spaceLength: 10,
          stack: false,
          steppedLine: false,
          targets: [
            {
              alias: "Fase (U)",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "current",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "current")\r\n  |> filter(fn: (r) => r["_field"] == "fase_u")\r\n  |> filter(fn: (r) => r["equipment"] == "ac_motor")\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")',
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "ac_motor",
                },
                {
                  condition: "AND",
                  key: "type",
                  operator: "=",
                  value: "u phase",
                },
              ],
            },
            {
              alias: "Fase (V)",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "current",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "current")\r\n  |> filter(fn: (r) => r["_field"] == "fase_v")\r\n  |> filter(fn: (r) => r["equipment"] == "ac_motor")\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")',
              refId: "B",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "ac_motor",
                },
                {
                  condition: "AND",
                  key: "type",
                  operator: "=",
                  value: "v phase",
                },
              ],
            },
            {
              alias: "Fase (W)",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "current",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "current")\r\n  |> filter(fn: (r) => r["_field"] == "fase_w")\r\n  |> filter(fn: (r) => r["equipment"] == "ac_motor")\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")',
              refId: "C",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "ac_motor",
                },
                {
                  condition: "AND",
                  key: "type",
                  operator: "=",
                  value: "w phase",
                },
              ],
            },
          ],
          thresholds: [],
          timeFrom: null,
          timeRegions: [],
          timeShift: null,
          title: "Corrente Motor AC",
          tooltip: {
            shared: true,
            sort: 0,
            value_type: "individual",
          },
          type: "graph",
          xaxis: {
            buckets: null,
            mode: "time",
            name: null,
            show: true,
            values: [],
          },
          yaxes: [
            {
              $$hashKey: "object:74",
              format: "amp",
              label: null,
              logBase: 1,
              max: "110",
              min: "30",
              show: true,
            },
            {
              $$hashKey: "object:75",
              format: "short",
              label: null,
              logBase: 1,
              max: null,
              min: null,
              show: false,
            },
          ],
          yaxis: {
            align: false,
            alignLevel: null,
          },
        },
        {
          aliasColors: {},
          bars: false,
          dashLength: 10,
          dashes: false,
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
              unit: "volt",
            },
            overrides: [],
          },
          fill: 1,
          fillGradient: 0,
          gridPos: {
            h: 12,
            w: 24,
            x: 0,
            y: 18,
          },
          hiddenSeries: false,
          id: 4,
          legend: {
            avg: false,
            current: false,
            max: false,
            min: false,
            show: true,
            total: false,
            values: false,
          },
          lines: true,
          linewidth: 1,
          nullPointMode: "connected",
          options: {
            alertThreshold: true,
          },
          percentage: false,
          pluginVersion: "7.2.0-pre",
          pointradius: 2,
          points: false,
          renderer: "flot",
          seriesOverrides: [],
          spaceLength: 10,
          stack: false,
          steppedLine: false,
          targets: [
            {
              alias: "Tensão no barramento",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "voltage",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "voltage")\r\n  |> filter(fn: (r) => r["_field"] == "voltage")\r\n  |> filter(fn: (r) => r["equipment"] == "drive_test")\r\n  |> filter(fn: (r) => r["location"] == "laboratory")\r\n  |> map(fn: (r) => ({ r with _value: (r._value - 2354.0) * 0.675 }))\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")\r\n\r\n',
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "last",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "drive_test",
                },
              ],
            },
          ],
          thresholds: [],
          timeFrom: null,
          timeRegions: [],
          timeShift: null,
          title: "Tensão no Barramento",
          tooltip: {
            shared: true,
            sort: 0,
            value_type: "individual",
          },
          type: "graph",
          xaxis: {
            buckets: null,
            mode: "time",
            name: null,
            show: true,
            values: [],
          },
          yaxes: [
            {
              $$hashKey: "object:186",
              format: "volt",
              label: null,
              logBase: 1,
              max: "750",
              min: "250",
              show: true,
            },
            {
              $$hashKey: "object:187",
              format: "short",
              label: null,
              logBase: 1,
              max: null,
              min: null,
              show: true,
            },
          ],
          yaxis: {
            align: false,
            alignLevel: null,
          },
        },
        {
          aliasColors: {},
          bars: false,
          dashLength: 10,
          dashes: false,
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
              unit: "none",
            },
            overrides: [
              {
                matcher: {
                  id: "byName",
                  options:
                    'air_temperature {equipment="drive_test", location="laboratory"}',
                },
                properties: [
                  {
                    id: "displayName",
                    value: "Temperatura do Ar",
                  },
                  {
                    id: "unit",
                    value: "celsius",
                  },
                ],
              },
              {
                matcher: {
                  id: "byName",
                  options:
                    'air_speed {equipment="drive_test", location="laboratory"}',
                },
                properties: [
                  {
                    id: "displayName",
                    value: "Velocidade do Ar",
                  },
                  {
                    id: "unit",
                    value: "velocityms",
                  },
                ],
              },
            ],
          },
          fill: 1,
          fillGradient: 0,
          gridPos: {
            h: 12,
            w: 24,
            x: 0,
            y: 30,
          },
          hiddenSeries: false,
          id: 5,
          legend: {
            alignAsTable: false,
            avg: false,
            current: false,
            hideEmpty: false,
            hideZero: false,
            max: false,
            min: false,
            rightSide: false,
            show: true,
            total: false,
            values: false,
          },
          lines: true,
          linewidth: 2,
          nullPointMode: "connected",
          options: {
            alertThreshold: true,
          },
          percentage: false,
          pluginVersion: "7.2.0-pre",
          pointradius: 2,
          points: false,
          renderer: "flot",
          seriesOverrides: [
            {
              $$hashKey: "object:177",
              alias:
                'temperature air_temperature {equipment="drive_test", location="laboratory"}',
              yaxis: 2,
            },
            {
              $$hashKey: "object:178",
              alias: "Velocidade do Ar",
              yaxis: 2,
            },
          ],
          spaceLength: 10,
          stack: false,
          steppedLine: false,
          targets: [
            {
              alias: "Temperatura do Ar de Resfriamento",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "temperature",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "temperature")\r\n  |> filter(fn: (r) => r["_field"] == "air_temperature")\r\n  |> filter(fn: (r) => r["equipment"] == "drive_test")\r\n  |> filter(fn: (r) => r["location"] == "laboratory")\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> yield(name: "mean")',
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "last",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "drive_test",
                },
              ],
            },
          ],
          thresholds: [],
          timeFrom: null,
          timeRegions: [],
          timeShift: null,
          title: "Temperatura do Ar de Resfriamento",
          tooltip: {
            shared: true,
            sort: 0,
            value_type: "individual",
          },
          type: "graph",
          xaxis: {
            buckets: null,
            mode: "time",
            name: null,
            show: true,
            values: [],
          },
          yaxes: [
            {
              $$hashKey: "object:335",
              format: "none",
              label: null,
              logBase: 1,
              max: "100",
              min: "20",
              show: true,
            },
            {
              $$hashKey: "object:336",
              format: "velocityms",
              label: null,
              logBase: 1,
              max: null,
              min: null,
              show: true,
            },
          ],
          yaxis: {
            align: true,
            alignLevel: null,
          },
        },
        {
          aliasColors: {},
          bars: false,
          dashLength: 10,
          dashes: false,
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
              unit: "none",
            },
            overrides: [
              {
                matcher: {
                  id: "byName",
                  options:
                    'air_speed {equipment="drive_test", location="laboratory"}',
                },
                properties: [
                  {
                    id: "displayName",
                    value: "Velocidade do ar",
                  },
                ],
              },
            ],
          },
          fill: 1,
          fillGradient: 0,
          gridPos: {
            h: 12,
            w: 24,
            x: 0,
            y: 42,
          },
          hiddenSeries: false,
          id: 10,
          legend: {
            alignAsTable: false,
            avg: false,
            current: false,
            hideEmpty: false,
            hideZero: false,
            max: false,
            min: false,
            rightSide: false,
            show: true,
            total: false,
            values: false,
          },
          lines: true,
          linewidth: 1,
          nullPointMode: "connected",
          options: {
            alertThreshold: true,
          },
          percentage: false,
          pluginVersion: "7.2.0-pre",
          pointradius: 2,
          points: false,
          renderer: "flot",
          seriesOverrides: [],
          spaceLength: 10,
          stack: false,
          steppedLine: false,
          targets: [
            {
              alias: "Velocidade do Ar de Resfriamento",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "speed",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "speed")\r\n  |> filter(fn: (r) => r["_field"] == "air_speed")\r\n  |> filter(fn: (r) => r["equipment"] == "drive_test")\r\n  |> filter(fn: (r) => r["location"] == "laboratory")\r\n  |> map(fn: (r) => ({ r with _value: r._value * 1.66 }))\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")',
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "last",
                  },
                ],
              ],
              tags: [
                {
                  key: "type",
                  operator: "=",
                  value: "air",
                },
              ],
            },
          ],
          thresholds: [],
          timeFrom: null,
          timeRegions: [],
          timeShift: null,
          title: "Velocidade do Ar de Resfriamento",
          tooltip: {
            shared: true,
            sort: 0,
            value_type: "individual",
          },
          type: "graph",
          xaxis: {
            buckets: null,
            mode: "time",
            name: null,
            show: true,
            values: [],
          },
          yaxes: [
            {
              $$hashKey: "object:335",
              format: "none",
              label: "",
              logBase: 1,
              max: "25",
              min: "0",
              show: true,
            },
            {
              $$hashKey: "object:336",
              format: "velocityms",
              label: null,
              logBase: 1,
              max: null,
              min: null,
              show: false,
            },
          ],
          yaxis: {
            align: true,
            alignLevel: null,
          },
        },
      ],
      refresh: "5s",
      schemaVersion: 26,
      style: "dark",
      tags: [],
      templating: {
        list: [],
      },
      time: {
        from: "now-5m",
        to: "now",
      },
      timepicker: {
        refresh_intervals: [
          "5s",
          "10s",
          "30s",
          "1m",
          "5m",
          "15m",
          "30m",
          "1h",
          "2h",
          "1d",
        ],
      },
      timezone: "",
      title: "Relatório",
      uid: "h9SVG1p7k",
      version: version,
    },
  };

  dataG5u = {
    dashboard: {
      annotations: {
        list: [
          {
            builtIn: 1,
            datasource: "-- Grafana --",
            enable: true,
            hide: true,
            iconColor: "rgba(0, 211, 255, 1)",
            name: "Annotations & Alerts",
            type: "dashboard",
          },
        ],
      },
      editable: true,
      gnetId: null,
      graphTooltip: 0,
      id: 3,
      links: [],
      panels: [
        {
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
            },
            overrides: [],
          },
          gridPos: {
            h: 6,
            w: 6,
            x: 0,
            y: 0,
          },
          id: 7,
          options: {
            content:
              '<img src="https://s3.sa-east-1.amazonaws.com/huxx.io/huxx-light.png" width="480" height="190"/>',
            mode: "html",
          },
          pluginVersion: "7.1.0",
          targets: [
            {
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              orderByTime: "ASC",
              policy: "default",
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [],
            },
          ],
          timeFrom: null,
          timeShift: null,
          title: "",
          transparent: true,
          type: "text",
        },
        {
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
            },
            overrides: [],
          },
          gridPos: {
            h: 6,
            w: 6,
            x: 6,
            y: 0,
          },
          id: 9,
          options: {
            content: `<h1>Relatório Técnico</h1>\n<ul>\n    <li>OS: ${os} </li>\n    <li>Equipamento: ${equipment}</li>\n    </ul>\n\n<p>\nRelatório feito por Huxx - Advanced Monitoring System\n</p>\nConheça mais em:\n<a>www.huxx.io</a>`,
            mode: "html",
          },
          pluginVersion: "7.1.0",
          targets: [
            {
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              orderByTime: "ASC",
              policy: "default",
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [],
            },
          ],
          timeFrom: null,
          timeShift: null,
          title: "",
          transparent: true,
          type: "text",
        },
        {
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
            },
            overrides: [],
          },
          gridPos: {
            h: 6,
            w: 12,
            x: 12,
            y: 0,
          },
          id: 12,
          options: {
            content: "",
            mode: "html",
          },
          pluginVersion: "7.1.0",
          targets: [
            {
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              orderByTime: "ASC",
              policy: "default",
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [],
            },
          ],
          timeFrom: null,
          timeShift: null,
          title: "",
          transparent: true,
          type: "text",
        },
        {
          alert: {
            alertRuleTags: {},
            conditions: [
              {
                evaluator: {
                  params: [96],
                  type: "gt",
                },
                operator: {
                  type: "and",
                },
                query: {
                  params: ["A", "5m", "now"],
                },
                reducer: {
                  params: [],
                  type: "max",
                },
                type: "query",
              },
            ],
            executionErrorState: "keep_state",
            for: "5m",
            frequency: "10s",
            handler: 1,
            name: "Corrente Motor AC alert",
            noDataState: "no_data",
            notifications: [],
          },
          aliasColors: {},
          bars: false,
          dashLength: 10,
          dashes: false,
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
              unit: "amp",
            },
            overrides: [],
          },
          fill: 1,
          fillGradient: 0,
          gridPos: {
            h: 12,
            w: 24,
            x: 0,
            y: 6,
          },
          hiddenSeries: false,
          id: 2,
          legend: {
            avg: false,
            current: false,
            max: false,
            min: false,
            show: true,
            total: false,
            values: false,
          },
          lines: true,
          linewidth: 2,
          nullPointMode: "connected",
          options: {
            alertThreshold: true,
          },
          percentage: false,
          pluginVersion: "7.2.0-pre",
          pointradius: 2,
          points: false,
          renderer: "flot",
          seriesOverrides: [],
          spaceLength: 10,
          stack: false,
          steppedLine: false,
          targets: [
            {
              alias: "Fase (U)",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "current",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "current")\r\n  |> filter(fn: (r) => r["_field"] == "fase_u")\r\n  |> filter(fn: (r) => r["equipment"] == "ac_motor")\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")',
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "ac_motor",
                },
                {
                  condition: "AND",
                  key: "type",
                  operator: "=",
                  value: "u phase",
                },
              ],
            },
            {
              alias: "Fase (V)",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "current",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "current")\r\n  |> filter(fn: (r) => r["_field"] == "fase_v")\r\n  |> filter(fn: (r) => r["equipment"] == "ac_motor")\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")',
              refId: "B",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "ac_motor",
                },
                {
                  condition: "AND",
                  key: "type",
                  operator: "=",
                  value: "v phase",
                },
              ],
            },
            {
              alias: "Fase (W)",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "current",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "current")\r\n  |> filter(fn: (r) => r["_field"] == "fase_w")\r\n  |> filter(fn: (r) => r["equipment"] == "ac_motor")\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")',
              refId: "C",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "mean",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "ac_motor",
                },
                {
                  condition: "AND",
                  key: "type",
                  operator: "=",
                  value: "w phase",
                },
              ],
            },
          ],
          thresholds: [
            {
              colorMode: "critical",
              fill: true,
              line: true,
              op: "gt",
              value: 96,
            },
          ],
          timeFrom: null,
          timeRegions: [],
          timeShift: null,
          title: "Corrente Motor AC",
          tooltip: {
            shared: true,
            sort: 0,
            value_type: "individual",
          },
          type: "graph",
          xaxis: {
            buckets: null,
            mode: "time",
            name: null,
            show: true,
            values: [],
          },
          yaxes: [
            {
              $$hashKey: "object:74",
              format: "amp",
              label: null,
              logBase: 1,
              max: "110",
              min: "30",
              show: true,
            },
            {
              $$hashKey: "object:75",
              format: "short",
              label: null,
              logBase: 1,
              max: null,
              min: null,
              show: false,
            },
          ],
          yaxis: {
            align: false,
            alignLevel: null,
          },
        },
        {
          alert: {
            alertRuleTags: {},
            conditions: [
              {
                evaluator: {
                  params: [250, 450],
                  type: "outside_range",
                },
                operator: {
                  type: "and",
                },
                query: {
                  params: ["A", "10s", "now"],
                },
                reducer: {
                  params: [],
                  type: "max",
                },
                type: "query",
              },
            ],
            executionErrorState: "keep_state",
            for: "5m",
            frequency: "1m",
            handler: 1,
            name: "Tensão no Barramento alert",
            noDataState: "alerting",
            notifications: [
              {
                uid: "BW8Vptank",
              },
            ],
          },
          aliasColors: {},
          bars: false,
          dashLength: 10,
          dashes: false,
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
              unit: "volt",
            },
            overrides: [],
          },
          fill: 1,
          fillGradient: 0,
          gridPos: {
            h: 12,
            w: 24,
            x: 0,
            y: 18,
          },
          hiddenSeries: false,
          id: 4,
          legend: {
            avg: false,
            current: false,
            max: false,
            min: false,
            show: true,
            total: false,
            values: false,
          },
          lines: true,
          linewidth: 1,
          nullPointMode: "connected",
          options: {
            alertThreshold: true,
          },
          percentage: false,
          pluginVersion: "7.2.0-pre",
          pointradius: 2,
          points: false,
          renderer: "flot",
          seriesOverrides: [],
          spaceLength: 10,
          stack: false,
          steppedLine: false,
          targets: [
            {
              alias: "Tensão no barramento",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "voltage",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "voltage")\r\n  |> filter(fn: (r) => r["_field"] == "voltage")\r\n  |> filter(fn: (r) => r["equipment"] == "drive_test")\r\n  |> filter(fn: (r) => r["location"] == "laboratory")\r\n  |> map(fn: (r) => ({ r with _value: (r._value - 2354.0) * 0.675 }))\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")\r\n\r\n',
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "last",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "drive_test",
                },
              ],
            },
          ],
          thresholds: [
            {
              colorMode: "critical",
              fill: true,
              line: true,
              op: "lt",
              value: 250,
            },
            {
              colorMode: "critical",
              fill: true,
              line: true,
              op: "gt",
              value: 450,
            },
          ],
          timeFrom: null,
          timeRegions: [],
          timeShift: null,
          title: "Tensão no Barramento",
          tooltip: {
            shared: true,
            sort: 0,
            value_type: "individual",
          },
          type: "graph",
          xaxis: {
            buckets: null,
            mode: "time",
            name: null,
            show: true,
            values: [],
          },
          yaxes: [
            {
              $$hashKey: "object:186",
              format: "volt",
              label: null,
              logBase: 1,
              max: "750",
              min: "250",
              show: true,
            },
            {
              $$hashKey: "object:187",
              format: "short",
              label: null,
              logBase: 1,
              max: null,
              min: null,
              show: true,
            },
          ],
          yaxis: {
            align: false,
            alignLevel: null,
          },
        },
        {
          alert: {
            alertRuleTags: {},
            conditions: [
              {
                evaluator: {
                  params: [65],
                  type: "gt",
                },
                operator: {
                  type: "and",
                },
                query: {
                  params: ["A", "5m", "now"],
                },
                reducer: {
                  params: [],
                  type: "max",
                },
                type: "query",
              },
            ],
            executionErrorState: "keep_state",
            for: "5m",
            frequency: "10s",
            handler: 1,
            name: "Temperatura de Refriamento alert",
            noDataState: "no_data",
            notifications: [],
          },
          aliasColors: {},
          bars: false,
          dashLength: 10,
          dashes: false,
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
              unit: "none",
            },
            overrides: [
              {
                matcher: {
                  id: "byName",
                  options:
                    'air_temperature {equipment="drive_test", location="laboratory"}',
                },
                properties: [
                  {
                    id: "displayName",
                    value: "Temperatura do Ar",
                  },
                  {
                    id: "unit",
                    value: "celsius",
                  },
                ],
              },
              {
                matcher: {
                  id: "byName",
                  options:
                    'air_speed {equipment="drive_test", location="laboratory"}',
                },
                properties: [
                  {
                    id: "displayName",
                    value: "Velocidade do Ar",
                  },
                  {
                    id: "unit",
                    value: "velocityms",
                  },
                ],
              },
            ],
          },
          fill: 1,
          fillGradient: 0,
          gridPos: {
            h: 12,
            w: 24,
            x: 0,
            y: 30,
          },
          hiddenSeries: false,
          id: 5,
          legend: {
            alignAsTable: false,
            avg: false,
            current: false,
            hideEmpty: false,
            hideZero: false,
            max: false,
            min: false,
            rightSide: false,
            show: true,
            total: false,
            values: false,
          },
          lines: true,
          linewidth: 2,
          nullPointMode: "connected",
          options: {
            alertThreshold: true,
          },
          percentage: false,
          pluginVersion: "7.2.0-pre",
          pointradius: 2,
          points: false,
          renderer: "flot",
          seriesOverrides: [
            {
              $$hashKey: "object:177",
              alias:
                'temperature air_temperature {equipment="drive_test", location="laboratory"}',
              yaxis: 2,
            },
            {
              $$hashKey: "object:178",
              alias: "Velocidade do Ar",
              yaxis: 2,
            },
          ],
          spaceLength: 10,
          stack: false,
          steppedLine: false,
          targets: [
            {
              alias: "Temperatura do Ar de Resfriamento",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "temperature",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "temperature")\r\n  |> filter(fn: (r) => r["_field"] == "air_temperature")\r\n  |> filter(fn: (r) => r["equipment"] == "drive_test")\r\n  |> filter(fn: (r) => r["location"] == "laboratory")\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> yield(name: "mean")',
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "last",
                  },
                ],
              ],
              tags: [
                {
                  key: "equipment",
                  operator: "=",
                  value: "drive_test",
                },
              ],
            },
          ],
          thresholds: [
            {
              colorMode: "critical",
              fill: true,
              line: true,
              op: "gt",
              value: 65,
            },
          ],
          timeFrom: null,
          timeRegions: [],
          timeShift: null,
          title: "Temperatura do Ar de Resfriamento",
          tooltip: {
            shared: true,
            sort: 0,
            value_type: "individual",
          },
          type: "graph",
          xaxis: {
            buckets: null,
            mode: "time",
            name: null,
            show: true,
            values: [],
          },
          yaxes: [
            {
              $$hashKey: "object:335",
              format: "none",
              label: null,
              logBase: 1,
              max: "100",
              min: "20",
              show: true,
            },
            {
              $$hashKey: "object:336",
              format: "velocityms",
              label: null,
              logBase: 1,
              max: null,
              min: null,
              show: true,
            },
          ],
          yaxis: {
            align: true,
            alignLevel: null,
          },
        },
        {
          alert: {
            alertRuleTags: {},
            conditions: [
              {
                evaluator: {
                  params: [4, 6],
                  type: "outside_range",
                },
                operator: {
                  type: "and",
                },
                query: {
                  params: ["A", "5m", "now"],
                },
                reducer: {
                  params: [],
                  type: "avg",
                },
                type: "query",
              },
            ],
            executionErrorState: "alerting",
            for: "5m",
            frequency: "10s",
            handler: 1,
            name: "Velocidade do Ar alert",
            noDataState: "no_data",
            notifications: [],
          },
          aliasColors: {},
          bars: false,
          dashLength: 10,
          dashes: false,
          datasource: null,
          fieldConfig: {
            defaults: {
              custom: {},
              unit: "none",
            },
            overrides: [
              {
                matcher: {
                  id: "byName",
                  options:
                    'air_speed {equipment="drive_test", location="laboratory"}',
                },
                properties: [
                  {
                    id: "displayName",
                    value: "Velocidade do ar",
                  },
                ],
              },
            ],
          },
          fill: 1,
          fillGradient: 0,
          gridPos: {
            h: 12,
            w: 24,
            x: 0,
            y: 42,
          },
          hiddenSeries: false,
          id: 10,
          legend: {
            alignAsTable: false,
            avg: false,
            current: false,
            hideEmpty: false,
            hideZero: false,
            max: false,
            min: false,
            rightSide: false,
            show: true,
            total: false,
            values: false,
          },
          lines: true,
          linewidth: 1,
          nullPointMode: "connected",
          options: {
            alertThreshold: true,
          },
          percentage: false,
          pluginVersion: "7.2.0-pre",
          pointradius: 2,
          points: false,
          renderer: "flot",
          seriesOverrides: [],
          spaceLength: 10,
          stack: false,
          steppedLine: false,
          targets: [
            {
              alias: "Velocidade do Ar de Resfriamento",
              groupBy: [
                {
                  params: ["$__interval"],
                  type: "time",
                },
                {
                  params: ["null"],
                  type: "fill",
                },
              ],
              measurement: "speed",
              orderByTime: "ASC",
              policy: "default",
              query:
                'from(bucket: "huxx")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn: (r) => r["_measurement"] == "speed")\r\n  |> filter(fn: (r) => r["_field"] == "air_speed")\r\n  |> filter(fn: (r) => r["equipment"] == "drive_test")\r\n  |> filter(fn: (r) => r["location"] == "laboratory")\r\n  |> map(fn: (r) => ({ r with _value: r._value * 1.66 }))\r\n  |> aggregateWindow(every: v.windowPeriod, fn: last, createEmpty: false)\r\n  |> yield(name: "last")',
              refId: "A",
              resultFormat: "time_series",
              select: [
                [
                  {
                    params: ["value"],
                    type: "field",
                  },
                  {
                    params: [],
                    type: "last",
                  },
                ],
              ],
              tags: [
                {
                  key: "type",
                  operator: "=",
                  value: "air",
                },
              ],
            },
          ],
          thresholds: [
            {
              colorMode: "critical",
              fill: true,
              line: true,
              op: "lt",
              value: 4,
            },
            {
              colorMode: "critical",
              fill: true,
              line: true,
              op: "gt",
              value: 6,
            },
          ],
          timeFrom: null,
          timeRegions: [],
          timeShift: null,
          title: "Velocidade do Ar de Resfriamento",
          tooltip: {
            shared: true,
            sort: 0,
            value_type: "individual",
          },
          type: "graph",
          xaxis: {
            buckets: null,
            mode: "time",
            name: null,
            show: true,
            values: [],
          },
          yaxes: [
            {
              $$hashKey: "object:335",
              format: "none",
              label: "",
              logBase: 1,
              max: "25",
              min: "0",
              show: true,
            },
            {
              $$hashKey: "object:336",
              format: "velocityms",
              label: null,
              logBase: 1,
              max: null,
              min: null,
              show: false,
            },
          ],
          yaxis: {
            align: true,
            alignLevel: null,
          },
        },
      ],
      refresh: "5s",
      schemaVersion: 26,
      style: "dark",
      tags: [],
      templating: {
        list: [],
      },
      time: {
        from: "now-5m",
        to: "now",
      },
      timepicker: {
        refresh_intervals: [
          "5s",
          "10s",
          "30s",
          "1m",
          "5m",
          "15m",
          "30m",
          "1h",
          "2h",
          "1d",
        ],
      },
      timezone: "",
      title: "Relatório",
      uid: "h9SVG1p7k",
      version: version,
    },
  };

  var dashData = {};

  if (equipment == "G5U2022") {
    dashData = dataG5u;
  } else {
    dashData = data;
  }

  tags = {
    dashboardId: 3,
    panelId: 2,
    time: init,
    timeEnd: end,
    tags: [`${os}`, `${equipment}`],
    text: " ",
  };

  await axios
    .post("https://demo.huxx.io/api/dashboards/db", dashData, config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  await axios
    .post("https://demo.huxx.io/api/annotations", tags, config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  //Screenshot
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
    headless: true,
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  await page.setViewport({
    width: 1920,
    height: 2100,
  });

  await page.evaluate(() => {
    document.querySelector(".grafana-app").style.height = `${
      document.querySelector(".dashboard-container .layout").clientHeight +
      16 * 2
    }px`;
  });

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  await page.screenshot({
    omitBackground: true,
    path: `///mnt/local/Qualidade/Huxx/${os}.png`,
    fullPage: true,
  });

  console.log("image saved!");

  browser.close();

  return response.status(201).send();
});

app.listen(3000);
console.log("🚀 Server running!");
