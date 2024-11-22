document.addEventListener("DOMContentLoaded", function () {
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";
  document.body.appendChild(mainContainer);

  async function firstRequest() {
    try {
      let yanit = await fetch("https://restcountries.com/v3.1/all");
      let veri = await yanit.json();
      putCountries(veri);

    } catch (hata) {
      console.error("Hata oluştu:", hata);
    }
  }

  async function searchRequest(name) {
    try {
      let yanit = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      let veri = await yanit.json();
      putCountries(veri);

    } catch (hata) {
      console.error("Hata oluştu:", hata);
    }
  }

  const putCountries = (countries) => {
    let containerElement =document.getElementsByClassName("main-container")[0];
    containerElement.innerHTML = '';

    countries
        .forEach((e) => {
          const countryElement = `
          <div class="native link">
          <div class="country-image" style="background-image: url(${e.flags.png})" ></div>
            <a href="${e.maps.googleMaps} target="_blank">
              ${e.name.common}
            </a>
          </div>`;
          
          containerElement.innerHTML += countryElement;
        });
  }

  document.querySelector('.filter').addEventListener('input', function(event) {
    // Fonksiyon çağrısı veya işlemler burada yapılır
    searchRequest(event.target.value); // Örneğin, girilen değeri bir fonksiyona gönderme
});

  var styleElement = document.createElement("style");

  styleElement.innerHTML = `
      body{
          font-size: 24px;
      }
      .main-container {
        width: 1500px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1px;
      }
      .native {
        color: red;
        display: flex;
        flex-direction: column;
        width: 300px;
      }
      
      .not-native {
        color:blue;
        text-decoration: underline;
      }
      .country-image {
        display: inline-block;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 180px;
        border: 1px solid blue;
      }
      .link {
        display: block;
        cursor: pointer;
      }
  `;

  document.head.appendChild(styleElement);

  firstRequest();
  searchRequest("tur");
});
