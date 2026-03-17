// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"
import "@popperjs/core"

import * as bootstrap from "bootstrap"

document.addEventListener("turbo:load", () => {
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(el => new bootstrap.Tooltip(el))
})




// document.addEventListener("turbo:load", () => {
//   const hasSteps = document.querySelector("[data-intro]");

//   if (hasSteps && !localStorage.getItem("intro-seen")) {
//     setTimeout(() => {
//       introJs().start();
//       localStorage.setItem("intro-seen", true);
//     }, 500); // espera a que cargue todo
//   }
// });

// localStorage.removeItem("intro-seen");


document.addEventListener("turbo:load", () => {
  const btn = document.querySelector("#start-tour-btn");

  if (btn) {
    btn.addEventListener("click", () => {
      const name = document.querySelector(".nombre_form");
      const body = document.querySelector(".body_form");
      const status = document.querySelector(".select_form");

      console.log("CLICK detectado");
      console.log(name, body, status);

      if (name && body && status) {
        introJs().setOptions({
          steps: [
            {
              element: name,
              intro: "Primero escribe el nombre"
            },
            {
              element: body,
              intro: "Ahora la descripción"
            },
            {
              element: status,
              intro: "Selecciona el estado"
            }
          ]
        }).start();
      } else {
        console.log("Elementos no encontrados");
      }
    });
  }
});