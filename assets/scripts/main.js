//javascript onclick function
$(document).ready(function(){
    $(".learnmore").click(function(){
        $(".learnmorecontent").slideToggle(500);
    });
});

//javascript Show and animate as you scroll function

$(window).scroll(function() {
    
    $('.mission').each(function(){

        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        
        if (imagePos < topOfWindow+600) {
            $(this).addClass("fadeRight");
        }
    });

// WITH DELAY!
    
    $('.goal').each(function(){ 
    
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        
        if (imagePos < topOfWindow+600) {
            setTimeout($.proxy(function(){
                $(this).addClass("fadeLeft");
            },this),200);
        }
    }); 

});

//On Click Scroll plus responsiveness



//if(jQuery(window).width() < 568) {

//          $('.parallaxcover .button').click(function(e)
//               {
//                  e.preventDefault();
//                  $('html, body').animate({scrollTop: $('.gallery').offset().top-100}, 2500);
//               });
//}


//else {
$('.parallaxcover .button').click(function(e)
 {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('.contactus').offset().top-180}, 2500);
 });
//}


//scroll java with responsiveness
    
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
        $(".logo").addClass("shrinklogo img");
        
        $(".navigation").css({
            'background':'rgba(242, 242, 242, 0.4)',
            'transition': '2s',
            '-ms-transition': '2s',
            '-moz-transition': '2s',
            '-webkit-transition': '2s', 
        });
    
    } 

    else {
        $(".logo").removeClass("shrinklogo img");
        $(".navigation").css({
                'background': 'rgba(23, 74, 115, 0.0)',
                'transition': '.4s',
                '-ms-transition': '.4s',
                '-moz-transition': '.4s',
                '-webkit-transition': '.4s',
        });
        
    }
    
});


if(jQuery(window).width() < 1200) {


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $(".logo").addClass("shrinklogo img");
            $(".navigation h2").css({
                'color': '#28b8c5', 
                'transition': '1s',
                '-ms-transition': '1s',
                '-moz-transition': '1s',
                '-webkit-transition': '1s',

            });
        } 

        else {
            $(".logo").removeClass("shrinklogo img");
        }

    });
}
