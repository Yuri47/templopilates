

console.log('ini2t')

$(".menu").ready(function() {


  var d = new Date();
  var n = d.getFullYear();
  $('#footerTP').text(`Templo Pilates - ${n}`)




  console.log('init')
  
    jQuery(window).scroll(function() {
       var windowScrollPosTop = jQuery(window).scrollTop();

       if(windowScrollPosTop >=  ($(window).height() - 56)) {

           
         jQuery("nav").css({"background-color": "rgba(201,143,149)",});
         jQuery('.nav-link').css({"color":"#ffe9e3"})
        
       }
       else{
         jQuery("nav").css({"background-color": "rgba(0,0,0,.0)",});
         jQuery('.nav-link').css({"color":"#292929"})
           
         
       }
    })

})