/* MOBILE MENU */
function toggleMenu(){
 document.querySelector(".nav-menu").classList.toggle("active");
}

/* DROPDOWN TAP SUPPORT */
document.querySelectorAll(".dropdown > a").forEach(el=>{
 el.addEventListener("click",function(e){

   if(window.innerWidth < 900){
     e.preventDefault();
     this.parentElement.classList.toggle("open");
   }

 });
});

/* AUTO CLOSE MENU AFTER CLICK */
document.querySelectorAll(".nav-menu a").forEach(link=>{
 link.addEventListener("click",()=>{
   document.querySelector(".nav-menu").classList.remove("active");
 });
});
