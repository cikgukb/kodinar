// Nombor WhatsApp rasmi koperasi (format antarabangsa, tanpa "+"). Kemas kini sebelum dilancarkan.
const WHATSAPP = "60000000000";

const nav = document.getElementById("nav");
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu");

addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 8), { passive: true });

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  menu.classList.toggle("is-open", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); menu.classList.remove("is-open"); }
});

// Reveal on scroll
const els = document.querySelectorAll(".head, .split > *, .card, .values li, .steps li, .facts");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  els.forEach((el, i) => { el.classList.add("reveal"); el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });
}

// Contact form -> WhatsApp
const form = document.getElementById("contact");
const note = form.querySelector(".form__note");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll("[required]").forEach((f) => {
    const bad = !f.value.trim();
    f.setAttribute("aria-invalid", bad);
    if (bad) ok = false;
  });
  if (!ok) { note.textContent = "Sila lengkapkan semua ruangan."; return; }
  note.textContent = "";
  const d = new FormData(form);
  const text = `Salam Koperasi Kodinar,\n\nNama: ${d.get("nama")}\nTelefon: ${d.get("telefon")}\nPortfolio: ${d.get("portfolio")}\n\n${d.get("mesej")}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

document.getElementById("yr").textContent = new Date().getFullYear();
