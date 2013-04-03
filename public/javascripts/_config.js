seajs.config({
  plugins:["shim", "text"],
  alias:{
    "jquery": {
        src: "thirdparty/jquery-1.9.1.min.js", 
        exports: "$"
    },
    "underscore":{
        src: "thirdparty/underscore-min.js",
        exports: "_"
    },
    "backbone":{
        src: "thirdparty/backbone.js",
        deps: ["underscore"]
    },
    "highcharts":{
      src: "thirdparty/highcharts.js",
      deps: ["jquery"]
    }
  }
});
