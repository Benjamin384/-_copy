require(["esri/map","dojo/domReady!"], function (Map) {
            var map=new Map("mapDiv",{
             center:[120,32],
              zoom:5,
              basemap:"topo"
         });
        });