$(function() {
    $("#log-show").click(function(){
        $(".main-log").show(0, function(){
            $(".main-log").removeClass("hide");
        });

        $(".main-log > .box > .list").empty();
        let list = localStorage.getItem("log") || '[]';
        list = JSON.parse(list);

        list.forEach(v => {
        });
    })

    $("#log-close").click(function(){
        $(".main-log").hide();
        setTimeout(() => {
            $(".main-log").addclass("hide");
        }, 250)
    })

    // $(".main-log").click(function(){
    //     $("#log-close").trigger("click");
    // });

    $(".main-log > .box").click(function(e){
        e.stopProgetion();
    })
})
