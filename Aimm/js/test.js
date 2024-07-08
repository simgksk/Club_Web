$(function() {

    $(document).on("click", "#color-btn", function(){
        const color = $(this).attr('color');
        $("div").css('background', color);
    })

    $(document).on("click", "#size-btn", function(){
        const size = $(this).attr('size');
        $("div").animate({width: size, height: size}, 300, 'swing')
    })

});