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
      setTimeout(() => loader.style.display = "none", 400);
      body.classList.add("fade-in");
    }, 800);
  } else {
    body.classList.add("fade-in");
  }

  // Smooth navigation transitions
  document.querySelectorAll("a").forEach(link => {
    const target = link.getAttribute("href");

    // Skip anchors, JS links, and external sites
    if (!target || target.startsWith("#") || target.startsWith("javascript") || link.hostname !== window.location.hostname) {
      return;
    }

    link.addEventListener("click", e => {
      e.preventDefault();
      body.classList.remove("fade-in");
      body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 400);
    });
  });

  // =====================
  // Modal functionality
  // =====================
  const closeModals = () => {
    document.querySelectorAll(".modal").forEach(modal => {
      modal.style.display = "none";
    });
  };

  // Open modal
  document.querySelectorAll(".card[data-modal]").forEach(card => {
    card.addEventListener("click", () => {
      const modalId = card.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "flex";
    });
  });

  // Close modal (X button)
  document.querySelectorAll(".modal .close").forEach(btn => {
    btn.addEventListener("click", closeModals);
  });

  // Close modal on outside click or Escape key
  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) closeModals();
  });
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModals();
  });
});
