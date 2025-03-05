

function curs_animation(){
let page_3 = document.querySelector(".page-3")
let curs = document.querySelector("#move")

page_3.addEventListener("mouseenter", function(){
    curs.style.opacity = 1

})
page_3.addEventListener("mouseleave", function(){
    curs.style.opacity = 0
})

page_3.addEventListener("mousemove", function(dets){
    gsap.to(curs,{
        left:dets.x-20,
        top:dets.y-50,
        
    })
})
}

function scrollTrigger(){
    gsap.from(".navbar ul li",{
        opacity:0,
        x:-25,
        duration:0.8,
        delay:0.1,
        stagger:0.16
        
    })
    
    gsap.from(".page-4-part-2-center",{
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:".page-4-part-2-center",
            scroller:"body",
            start:"top 90%",
        }
    })
}


function sideBar(){
   let openMenubar = document.querySelector(".ri-menu-3-line")
   let crossMenubar = document.querySelector(".ri-close-large-line")
     
   let tl = gsap.timeline()
     
   tl.to(".navbar-center",{
         right:0,
         duration:0.4,
   })
   
   tl.pause()
   
   openMenubar.addEventListener("click",function(){
     tl.play()
   })
   crossMenubar.addEventListener("click",function(){
     tl.reverse()
   })
}


curs_animation();
scrollTrigger();
sideBar();
  