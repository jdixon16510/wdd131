// Footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Static values
const temperature = 9; // °C
const windSpeed = 10;    // km/h

function calculateWindChill(t, v) {
   return Math.round(
      13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)
   );
}

function updateWindChill() {
   const elements = document.querySelectorAll(".windchill");

   const validTemp = temperature <= 10;
   const validWind = windSpeed > 4.8;

   const result = (validTemp && validWind)
      ? `${calculateWindChill(temperature, windSpeed)}°C`
      : "N/A";

   elements.forEach(el => {
      el.textContent = result;
   });
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateWindChill);


