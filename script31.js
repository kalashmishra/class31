
var tl=gsap.timeline();
gsap.set(".a",{opacity:0,y:10,})
gsap.set("img",{opacity:0,y:10,scale:.9})
tl.from("#left",{
    width:0,
    duration:2,
    ease:Expo.easeInOut
})
.from("#right",{
    width:0,
    duration:2,
    ease:Expo.easeInOut,
    delay:-1
})
.to(".a",{
    opacity:1,
    y:0,
    stagger:.08,
    ease:Expo.easeInOut,
    duration:1
})
.to("img",{
    opacity:1,
    y:0,
    stagger:.08,

    scale:1,
    duration:0.8,  
    ease:Expo.easeInOut

})