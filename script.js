var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  gsap.from(".page1 h1",{
    y: -200,
    opacity: 0,
    duration: 1
  })
  gsap.from(".page1 nav",{
    y: -200,
    opacity: 0,
    duration: 1
  })
  gsap.from(".page1 h5",{
    opacity: 0,
    duration: 2
  })
  gsap.from(".chocolate",{
    opacity: 0,
    duration: 1,
    delay: 1,
    duration: 2
})

const page1btn = document.querySelector("#page1-button");
const wrapper = document.querySelector("#wrapper");
// const bar = document.querySelector("#bar");
var value = 0;
page1btn.addEventListener("mouseover", ()=>{
  if(value === 0){
    wrapper.style.marginLeft = "-95vmax";
    value = 1
  }
  else{
    wrapper.style.marginLeft = "-47vmax";
    value = 0
  }
})