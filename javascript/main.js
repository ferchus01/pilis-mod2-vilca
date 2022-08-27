function onClick(event) {
  event.preventDefault();

  const mensaje = {
    person: document.getElementById("person").value,
    commerce: document.getElementById("commerce").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    cuil: document.getElementById("cuil").value,
  };
  console.log(mensaje);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      Swal.fire(
        "Enviado",
        "Gracias por registrarse. Nos contactaremos a la brevedad",
        "success"
      );
      cleanForm();
    })
    .catch((err) => console.log(err));
}

async function getWeather() {
  try {
    let res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=-24.18&lon=-65.33&appid=ba4c68d373d02260006f025bc6762166"
    );
    let weather = await res.json();
    return weather;
  } catch (error) {
    console.log(err);
  }
}

async function setWeather() {
  let weather = await getWeather();
  console.log(weather);
  document.querySelector(".num").innerText = parseInt(weather.main.temp - 273);
  let weatherDesc =
    weather.weather[0].description === "clear sky" ? "Despejado" : "Nublado";
  document.querySelector("#weather").innerText = weatherDesc;
  document.querySelector("#city").innerText = weather.name;
}

setWeather();

function cleanForm() {
  let formulario = document.getElementById("formulario");
  formulario.reset();
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);
