document.addEventListener("DOMContentLoaded", () => {
    const panels = Array.from(document.querySelectorAll(".toggle-container"));
    panels.forEach(panel => {
      const btn = panel.querySelector(".toggle-btn");
      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";

        panels.forEach(other => {
          if (other !== panel && other.classList.contains("expanded")) {
            const otherBtn = other.querySelector(".toggle-btn");
            otherBtn.setAttribute("aria-expanded", "false");
            otherBtn.textContent = "Mostrar Pasatiempos";
            other.classList.remove("expanded");
          }
        });

        btn.setAttribute("aria-expanded", String(!isOpen));
        btn.textContent = isOpen ? "Mostrar Pasatiempos" : "Ocultar Pasatiempos";
        panel.classList.toggle("expanded");
      });
    });
  
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });
  
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
      } else {
        e.preventDefault();
        alert("¡Mensaje enviado correctamente!");
        form.reset();
      }
    });
  });
  