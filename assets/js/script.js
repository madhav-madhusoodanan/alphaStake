
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 10;
    sectionId = current.getAttribute("id");
    
   
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".nav_l a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav_l a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}