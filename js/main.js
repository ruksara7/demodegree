/* ================= ELEMENTS ================= */
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const submenuParents = document.querySelectorAll(".has-sub > a");

/* ================= MENU TOGGLE ================= */
if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
}

/* ================= CLOSE WHEN CLICK OUTSIDE ================= */
document.addEventListener("click", (e) => {
  if (!mobileMenu.classList.contains("active")) return;
  if (mobileMenu.contains(e.target) || hamburger.contains(e.target)) return;
  closeMenu();
});

function closeMenu(){
  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
  closeAllSubmenus();
}

/* ================= SUBMENU ACCORDION ================= */
function closeAllSubmenus(){
  document.querySelectorAll(".submenu.active")
    .forEach(menu => menu.classList.remove("active"));
}

submenuParents.forEach(link=>{
  link.addEventListener("click",function(e){
    if(window.innerWidth<=768){
      const submenu=this.nextElementSibling;
      if(!submenu) return;
      e.preventDefault();
      e.stopPropagation();
      const opened=submenu.classList.contains("active");
      closeAllSubmenus();
      if(!opened) submenu.classList.add("active");
    }
  });

  /* keyboard accessibility */
  link.addEventListener("keydown",function(e){
    if(e.key==="Enter" && window.innerWidth<=768){
      e.preventDefault();
      this.click();
    }
  });
});

/* ================= CLOSE AFTER REAL NAVIGATION ================= */
document.querySelectorAll(".mobile-menu a").forEach(link=>{
  link.addEventListener("click",function(){
    if(this.parentElement.classList.contains("has-sub")) return;
    closeMenu();
  });
});

/* ================= RESET ON RESIZE ================= */
window.addEventListener("resize",()=>{
  if(window.innerWidth>768) closeMenu();
});

/* ================= FIX BACK BUTTON ================= */
window.addEventListener("pageshow",()=>{
  closeMenu();
});

/* ================= COUNTER (SAFE) ================= */
const counters=document.querySelectorAll(".counter h2");

function runCounter(counter){
 if(counter.dataset.started) return;
 counter.dataset.started="true";

 let target=parseInt(counter.textContent.replace(/,/g,''),10)||0;
 let count=0;

 const update=()=>{
   count+=Math.ceil(target/80);
   if(count>=target){
     counter.textContent=target.toLocaleString();
     return;
   }
   counter.textContent=count.toLocaleString();
   requestAnimationFrame(update);
 };

 update();
}

if("IntersectionObserver" in window){
 const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
     if(entry.isIntersecting) runCounter(entry.target);
   });
 });
 counters.forEach(c=>observer.observe(c));
}else{
 counters.forEach(runCounter);
}
