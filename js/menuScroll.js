$(function(){
    $('nav a').click(function() {
        var href = $('this').atrr('href');
        var offSetTop = $(href).offSet().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    })
})