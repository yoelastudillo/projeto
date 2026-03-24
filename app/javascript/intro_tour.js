export function startIntro() {
  const intro = introJs.tour();
  const steps = [];

  
  const title = document.querySelector("h1");
  if (title) {
    steps.push({
      element: title,
      intro: "element 1"
    });
  }

  const btn = document.querySelector("#crear-btn");
  if (btn) {
    steps.push({
      element: btn,
      intro: "element 2"
    });
  }

  // 👇 test (opcional, para evitar vacío)
  if (steps.length === 0) {
    steps.push({
      intro: "Bienvenido 🚀"
    });
  }

  intro.setOptions({
    steps: steps,
    nextLabel: "Siguiente",
    prevLabel: "Atrás",
    doneLabel: "Finalizar",
    showProgress: true
  });

  intro.start();
}


////////////////////
document.addEventListener("turbo:load", () => {
  const controller = document.body.dataset.controllerName;
  const action = document.body.dataset.actionName;

  if (controller === "dashboard" && action === "index") {
    import("tours/dashboard_tour").then(m => m.dashboardTour());
  }

  if (controller === "products" && action === "index") {
    import("tours/product_tour").then(m => m.productTour());
  }
});