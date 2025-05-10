onload=()=>+new URLSearchParams(location.search).get("l")==1&&(location.href="https://youtu.be/dQw4w9WgXcQ")
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
});

document.querySelectorAll(".revealUp").forEach((el)=>{
  observer.observe(el);  
  
});