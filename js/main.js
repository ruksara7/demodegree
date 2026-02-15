const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav"); 

if(toggle){
  toggle.onclick = () => nav.classList.toggle("active");
}

/* mobile dropdown tap */
document.querySelectorAll(".dropdown > a").forEach(link=>{
  link.addEventListener("click",function(e){
    if(window.innerWidth <= 900){
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    }
  });
});
