var userInput = prompt("Enter a city name:");

var cities = [
  "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan",
  "Hyderabad", "Gujranwala", "Peshawar", "Quetta",
  "Islamabad", "Sialkot", "Bahawalpur", "Sukkur",
  "Larkana", "Mingora", "Sahiwal", "Dera Ghazi Khan",
  "Mirpur Khas", "Chiniot", "Okara"];

if (userInput) {
  if (userInput === "Islamabad") {
    alert("Islamabad is the cleanest city of Pakistan! : \n NOTE : First Letter of the city must be capitalized.");
  } else if (cities.indexOf(userInput) !== -1) {
    alert(userInput + " is a city in Pakistan.");
  } else {
    alert(userInput + " is not in the list of cities.");
  }
} else {
  for (var i = 0; i < cities.length; i++) {
    if (cities[i] === "Islamabad") {
      alert("Islamabad is the cleanest city of Pakistan!");
    } else {
      alert(cities[i] + " is also a city in Pakistan.");
    }
  }
}
