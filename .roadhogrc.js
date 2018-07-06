const target = 'https://by.warhot.cn:8443/';
export default {
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    }
  },
  "proxy": {
    "/audiorecord": {
      "target": target,
      "changeOrigin": true,
      "secure": false,
    },
    "/audio":  {
      "target": target,
      "changeOrigin": true,
      "secure": false,
    }
  }
}
