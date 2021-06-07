$(function(){
    var amt;
    var curIndex;
    var delay = 5000;
    
    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.sobre-autor').length;
        var SizeContainer = 100 * amt;
        var SizeBoxSigle = 100/ amt;

        $('.sobre-autor').css('width', SizeBoxSigle+'%')
        $('.scroll-wraper').css('width', SizeContainer+'%')

        for(var i = 0; i < amt; i++) {
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
            else
                $('.slider-bullets').append('<span></span>'); 
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if (curIndex == amt)
                curIndex = 0;
                goToSlider(curIndex);
        },delay)
    }

    function goToSlider(curIndex) {
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0});
    })
    


})