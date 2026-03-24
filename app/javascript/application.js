import "@hotwired/turbo-rails"
import "controllers"
import "bootstrap"

import * as bootstrap from "bootstrap"

// tooltips
document.addEventListener("turbo:load", () => {
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(el => new bootstrap.Tooltip(el))
})

// 👇 IMPORT AL FINAL
import { startIntro } from "intro_tour";

// 👇 TODO dentro de turbo:load
document.addEventListener("turbo:load", () => {
  // exponer global
  window.startIntro = startIntro;

  // autostart
  if (!localStorage.getItem("intro_seen")) {
    startIntro();
    localStorage.setItem("intro_seen", "true");
  }
});