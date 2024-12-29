let apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
let table = document.querySelector("#weather");
let button = document.querySelector("#add");
let city = document.querySelector("#textCity");

function addWeather() {
    if (!city.value) return;
    table.removeAttribute("style");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric&lang=uk`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert(`Error:`);
                return;
            }

            const { name, main, weather, sys } = data;
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${name}</td>
                <td>Temperature: ${main.temp}</td>
                <td>${main.feels_like}°C</td>
                <td class="desc">
                    <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png">
                    ${weather[0].description}
                </td>
                <td>${main.humidity}%</td>
                <td>${new Date(sys.sunrise * 1000).toLocaleTimeString("uk-UA")}</td>`;

            table.append(tr);
        })
}

button.addEventListener("click", addWeather);
