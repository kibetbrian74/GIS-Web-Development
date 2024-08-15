const map = L.map('map').setView([-33.1382707510116, 23.036718256556785], 8);
//Sets default map center parameters and zoom level

const OpenStreetURL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
const OpenStreetAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const OpenStreetMap = L.tileLayer(OpenStreetURL,{OpenStreetAttribution}).addTo(map)

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