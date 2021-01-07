
function show(){
    alert ("Thank you for submitting. Your message has been recieved and a reply would be sent shortly.");
    }

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
  
},appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
  // console.log(slider)
})




const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
// setting the index for the slides
let slideIndex = 0;

const showSlides = () => {
    slides.forEach(slide => {
        slide.style.display = "none";
    })
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    } 
    dots.forEach(dot => {
        dot.className = dot.className.replace("active", "");
    })

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active"; 
    setTimeout(showSlides, 3000);
}
showSlides()