$(function() {
    $("#red-btn").click(function(){
        $("div").css('background', 'red')
    })

    $("#blue-btn").click(function(){
        $("div").css('background', 'blue')
    })

    $("#green-btn").click(function(){
        $("div").css('background', 'green')
    })

    $("#50px-btn").click(function(){
        $("div").animate({width: '50px', height: '50px'}, 300, 'swing')
    })

    $("#100px-btn").click(function(){
        $("div").animate({width: '100px', height: '100px'}, 300, 'swing')
    })

    $("#200px-btn").click(function(){
        $("div").animate({width: '200px', height: '200px'}, 300, 'swing')
    })

});