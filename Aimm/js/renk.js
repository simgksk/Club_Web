$(function() {
    $("#log-show").click(function(){
        $(".main-log").show(0, function(){
            $(".main-log").removeClass("hide");
        });
    })

    $("#log-close").click(function(){
        $(".main-log").hide();
        setTimeout(() => {
            $(".main-log").addclass("hide");
        }, 250)
    })

    $(".main-log").click(function(){
        $("#log-close").trigger("click");
    });

    $(".main-log > .box").click(function(e){
        e.stopProgetion();
    })
})