let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");

function celciusToFahrenheit() {
  let result = (parseFloat(celcius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(result.toFixed(2));
  console.log(result);
}

function fahrenheitToCelcius() {
  let result = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celcius.value = parseFloat(result.toFixed(2));
  console.log(result);
}
