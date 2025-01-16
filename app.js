var cities = [
  "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan",
  "Hyderabad", "Gujranwala", "Peshawar", "Quetta",
  "Islamabad", "Sialkot", "Bahawalpur", "Sukkur",
  "Larkana", "Mingora", "Sahiwal", "Dera Ghazi Khan",
  "Mirpur Khas", "Chiniot", "Okara"
];

for (var i = 0; i <= cities.length; i++) {
  if (cities[i] === "Islamabad") {
    alert("Islamabad is the cleanest city of Pakistan!");
    break;
  }
}

