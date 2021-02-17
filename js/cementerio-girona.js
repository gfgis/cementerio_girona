function addCementerioCapa() {

    map.addSource("cementerio_source", {
        "type": "vector",
        "url": "mapbox://giuls0917.bd0ozjsl"  // Nuestor ID Tileset

    }); //fin map source

    map.addLayer({
        "id": "cementerio",
        "type": "fill-extrusion",
        "source": "cementerio_source",
        "source-layer": "cemgi_extrusion-cy1az7", // Nuestro nombre Tileset
        "maxzoom": 22,
        "minzoom": 17,
        // "filter": [">", "numberOfFl", 0],
        "paint": {
            "fill-extrusion-color": [
                "interpolate", ["linear"], ["number", ["get", "extrusion"]],
                0, "#FFFFFF",
                3, "#6fa591",
                4, "#8AC973",
                5, "#9AE6CA",
                6, "#9E80A6",


            ],
            "fill-extrusion-height": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 0,
                12.5, 0,
                17, ["*", 1, ["to-number", ["get", "extrusion"]]],
                20, ["*", 1.5, ["to-number", ["get", "extrusion"]]],
                22, ["*", 2, ["to-number", ["get", "extrusion"]]]
            ],
            "fill-extrusion-opacity": 0.8
        }
    }
        //,"road-label"
    );

} //fin funcion
function add3D() {

    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });

    map.setTerrain({
        'source': 'mapbox-dem',
        'exaggeration': 1.5
    });
}