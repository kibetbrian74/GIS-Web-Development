// Maps have base layers and overlays, base layers can only be displayed one at a time, 
// several overlays can be displayed at once

//Adding base layers
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<a href = "https://www.openstreetmap.org/#map=6/0.172/37.904"><span>© OpenStreetMap</span></a>'});
var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

// Creating overlays (Cities in Kenya), they will use the default place markers
var Nairobi = L.marker([-1.2694692527947553, 36.81543191159011]).bindPopup('Nairobi').openPopup(),
    Nakuru = L.marker([-0.290380171348218, 36.07265580549653]).bindPopup('Nakuru').openPopup(),
    Eldoret = L.marker([0.5173140507525549, 35.26908796512853]).bindPopup('Eldoret').openPopup(),
    Kisumu = L.marker([-0.09527776082946149, 34.76327864499911]).bindPopup('Kisumu').openPopup(),
    Mombasa = L.marker([-4.053793137558236, 39.66665459984013]).bindPopup('Mombasa').openPopup();

// Instead of adding them individually, you can add as a layer group (cities)
var cities = L.layerGroup([Nairobi, Nakuru, Eldoret, Kisumu, Mombasa]);

//Sets default map center parameters and zoom level
var map = L.map('map', {
    center: [0.47848757692157173, 37.532745416165376],
    zoom: 6,
    layers: [osm, osmHOT, cities]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap Hot": osmHOT
};
var overlayMaps = {
    "Cities": cities
};

// Now that we have set base layers and overlays, we have to add them to the map
var layerControls = L.control.layers(baseMaps, overlayMaps).addTo(map);

// you can add isolated base layers and overlays by;
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});
layerControls.addBaseLayer(openTopoMap, "OpenTopoMap")

// Adding a circle to the map
const circleLayer = L.circle([-33.1382707510116, 23.036718256556785],
    {radius: 20000, color: 'grey', fillColor:'none'}).addTo(map)

//Adding a rectangle to the map
var bounds = [[-33.79812286866196,21.608495600306785], //Don't forget the commas
        [-33.79812286866196,22.915868647181785],
        [-33.276153839092494,22.915868647181785],
        [-33.276153839092494,21.608495600306785],
        [-33.79812286866196,21.608495600306785]]
const rectL = L.rectangle(bounds, {color:'#000000', fillColor:'grey', opacity:1.0}).addTo(map)

//Adding a polygon layer to the map
const ployBounds = [[-33.25778197962092,21.388769037806785],
        [-33.2853383194105,21.136083490931785],
        [-33.9987396853461,22.179784662806785],
        [-33.6061853106597,23.783788569056785],
        [-32.686695216372385,23.564404314261125],
        [-33.25778197962092,21.388769037806785]]
const polygL = L.polygon(ployBounds,
    {color:'red', fillColor:'green', opacity:0.7, stroke:false}).addTo(map)
    //the attribute called stroke sets the visibility of the polygon boundary

//Adding polylines to the map
const linelatlon = [[-33.33149906042967,22.1526824741364],
        [-32.99121014582517,22.1416961460114],
        [-33.07410461480728,22.6690398960114],
        [-33.184509175083,23.1194793491364]]
const polylinL = L.polyline(linelatlon, {color:'red', opacity: 0.6}).addTo(map)

// Adding a marker with a defaul icon to the map
const marker1 = L.marker([-33.9753682676208, 22.48586430216176])
marker1.bindPopup("<h3>Name: George City</h3><h3>Country: South Africa</h3>")
marker1.addTo(map)

//Adding a marker with custom icon, google search 'location marker icons transparent background'
        //then click an icon and right click to opne image in new tab. The copy it link
const icon1 = L.icon({
    iconUrl:'https://png.pngtree.com/png-vector/20211103/ourmid/pngtree-pin-map-location-icon-png-png-image_4020850.png',
    iconSize: [20,30]
})
const marker2 = L.marker([-34.180367742764275, 22.095218266555595], {
        icon: icon1})
marker2.bindPopup("<h3>Location: Mossel Bay</h3><h3>Country: South Africa</h3>")
        .openPopup();
marker2.addTo(map)

//Adding a message popup when the cursor hovers over the marker
marker1.bindTooltip("<h4>Click me</h4>")
