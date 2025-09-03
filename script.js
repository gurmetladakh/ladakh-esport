// =====================
// Smooth fade transition + loader
// =====================
window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const loader = document.getElementById("loader");

  // Loader fade out
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 500);
      body.classList.add("fade-in");
    }, 1200);
  } else {
    body.classList.add("fade-in");
  }

  // Smooth navigation transitions
  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        const target = link.getAttribute("href");
        if (!target || target.startsWith("#")) return;

        e.preventDefault();
        body.classList.remove("fade-in");
        body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = target;
        }, 400);
      });
    }
  });

  // =====================
  // Modal functionality
  // =====================
  document.querySelectorAll(".card[data-modal]").forEach(card => {
    card.addEventListener("click", () => {
      const modalId = card.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "flex";
    });
  });

  document.querySelectorAll(".modal .close").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  // Close modal when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });

  // Close modal on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
      });
    }
  });
});
