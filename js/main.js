/* ========= ELEMENTS ========= */
const toggle   = document.getElementById("menuToggle");
const nav      = document.getElementById("mainNav");
const overlay  = document.getElementById("menuOverlay");
const closeBtn = document.getElementById("menuClose");

/* ========= OPEN MENU ========= */
if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // lock background scroll
  });
}

/* ========= CLOSE MENU ========= */
function closeMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

if (overlay) overlay.addEventListener("click", closeMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);

/* ========= MOBILE DROPDOWN ========= */
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    }
  });
});

/* ========= AUTO CLOSE ON DESKTOP ========= */
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});
