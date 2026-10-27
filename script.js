const top_btn=document.getElementById("top")

window.addEventListener('scroll', function () {
  top_btn.classList.toggle('show', window.scrollY > 300);
});

top_btn.addEventListener("click",()=>{
window.scrollTo({top:0, behavior:'smooth'})
})