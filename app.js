const panels = document.querySelectorAll(".box");

let currentActive = panels[0];

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    currentActive.classList.remove("active");
    panel.classList.add("active");
    currentActive = panel;
  });
});
