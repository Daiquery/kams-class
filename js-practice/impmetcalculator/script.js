var measurements = document.getElementById("measurements");
var measurement = document.getElementById("measurement");
var types = document.getElementById("types");
var imperialTypes = ["inches", "feet", "miles", "yards"];

function convertToMetric() {
  var imperialValue = parseInt(measurement.value);
  whichType = types.value;
  console.log(whichType);

  if (whichType === imperialTypes[0]) {
    // inches
    meters = imperialValue / 39370;
    centimeters = imperialValue * 2.54;
    kilometers = imperialValue / 1094;
    measurements.textContent = `Meters: ${meters}m, Centimeters: ${centimeters}cm, Kilometers: ${kilometers}km.`
  } else if (whichType === imperialTypes[1]) {
    // feet
    meters = imperialValue / 3.281;
    centimeters = imperialValue * 30.48;
    kilometers = imperialValue / 3281;
    measurements.textContent = `Meters: ${meters}m, Centimeters: ${centimeters}cm, Kilometers: ${kilometers}km.`

  } else if (whichType === imperialTypes[2]) {
    // miles
    meters = imperialValue * 1609;
    centimeters = imperialValue * 160934;
    kilometers = imperialValue * 1.609;
    measurements.textContent = `Meters: ${meters}m, Centimeters: ${centimeters}cm, Kilometers: ${kilometers}km.`

  } else if (whichType === imperialTypes[3]) {
    // yards
    meters = imperialValue / 1.094;
    centimeters = imperialValue * 91.44;
    kilometers = imperialValue / 1094;
    measurements.textContent = `Meters: ${meters}m, Centimeters: ${centimeters}cm, Kilometers: ${kilometers}km.`

  }
}
