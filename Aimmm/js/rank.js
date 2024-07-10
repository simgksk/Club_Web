$(function() {
    $("#log-show").click(function() {
        $('.main-log').show(0, function() {
            $('.main-log').removeClass('hide');
        });

        $(".main-log > .box > .list").empty();
        
        let list = localStorage.getItem("log") || '[]';
        list = JSON.parse(list);

        const date = new Date(v.created);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        list.forEach(v => {
            $(".main-log > .box > .list").append(`<div class="box">
            <div class="time">${v.time}<span>ms</span></div>
            <span class="date">${year}-${month}-${day}</span>
        </div>`) 
        });
    });

    $("#log-close").click(function() {
        $('.main-log').addClass('hide');
        setTimeout(() => {
            $('.main-log').hide();
        }, 250);
    });

    $(".main-log").click(function() {
        $("#log-close").trigger("click");
    });

    $(".main-log > .box").click(function(e) {
        e.stopPropagation(); // 이벤트 전파 중단
    });
});