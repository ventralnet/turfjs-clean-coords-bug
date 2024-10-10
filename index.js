const cleanCoords = require('@turf/clean-coords').cleanCoords;
const union = require('@turf/union').union;
const helpers = require('@turf/helpers');

const latlngs = [
    [-180, -18.15942123021],
    [-142.3828125, -17.807876978977],
    [-153.468530967904, -9.370851446924],
    [-69.9609375, -9.370851446924],
    [-69.9609375, 36.681445464573],
    [-180, 36.681445464573],
    [-180, 20.186244484817],
    [-180, 30.353685439917],
    [-180, -18.15942123021],
]

const turfPolygon = helpers.polygon([latlngs]);

console.log(turfPolygon.geometry.coordinates);

let cleanCoordsResult = cleanCoords(turfPolygon);

console.log(cleanCoordsResult.geometry.coordinates);

const featureCollection = helpers.featureCollection([turfPolygon, turfPolygon]);

let unionResult = union(featureCollection);

console.log(unionResult.geometry.coordinates);