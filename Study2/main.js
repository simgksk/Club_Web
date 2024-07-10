$(function(){
    $(".main-btn").mouseenter(function(){
        $(".point").stop().fadeIn(300);
    }).mouseleave(function(){
        $(".point").stop().fadeOut(300);
    }).mousemove(function(e){
        const x = e.offsetX;
        const y = e.offsetY;

        $(".point").css({
            top: y, 
            left: x
        });
    });
});