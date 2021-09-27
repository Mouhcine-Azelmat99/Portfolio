$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayhoverpause:true,
    loop:true,
    nav:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        }
    }
    
})

// Scroll Animation 

let tl =gsap.timeline({
    scrollTrigger : {
    trigger : "body",
    ease: "power1.inOut",
    delay: 1
}
});
tl.from("#img_slid" , {x : 400 , opacity : 0 , duration : 1.5})
.from(".content" , {y:-200 , opacity:0,duration:1},"-=1")
// services 
.from("#services" , {y:-200 , opacity:0,duration:1})
// why us 
.from("#why_us h1" , {y:-200 , opacity:0,duration:1})
.from("#img" , {x : 400 , opacity : 0 , duration : 1},"-=0.5")
.from("#content" , {y:-200 , opacity:0,duration:1},"-=1")
// skills 
.from(".img" , {x : -400 , opacity : 0 , duration : 0.8})
.from("#skil_main" , {y:-200 , opacity:0,duration:1})
// pricing 
.from("#pricing h1" , {y:-200 , opacity:0,duration:.4})
.from("#item" , {x:-200 , opacity:0,duration:.5})
// Team 
.from("#team h1" , {y:-200 , opacity:0,duration:2})
.from("#team .card" , {y:-200 , opacity:0,duration:1.5},"-=1")
// About 
.from("#about h1" , {y:-200 , opacity:0,duration:1})
.from("#about-text" , {y:-200 , opacity:0,duration:1})
.from("#about_img" , {x : 400 , opacity : 0 , duration : 1.5},"-=1")
// Contact 
.from("#contact h1" , {y:-200 , opacity:0,duration:0.5})
.from("#form_left" , {y:-200 , opacity:0,duration:1})
.from("#form_right" , {x : 400 , opacity : 0 , duration : 1},"-=1")


// back to top 
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}