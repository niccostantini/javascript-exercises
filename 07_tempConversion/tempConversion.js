const convertToCelsius = function(temperatureFahrenheit) {
    let temperatureCelsius = (temperatureFahrenheit - 32) * (5/9);
    if (temperatureCelsius % 1 != 0) return parseFloat(temperatureCelsius.toFixed(1))
    else return parseInt(temperatureCelsius)
  };

const convertToFahrenheit = function(temperatureCelsius) {
  let temperatureFahrenheit = (temperatureCelsius * (9/5) + 32);
  if (temperatureFahrenheit % 1 != 0) return parseFloat(temperatureFahrenheit.toFixed(1))
  else return parseInt(temperatureFahrenheit)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
