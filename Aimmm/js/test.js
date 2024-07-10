$(function() {
    // .. code

    $("#size-btn").click(function() {
        console.log("size-btn");
        // $("div").animate({
        //     width: '50px',
        //     height: '50px'
        // }, 300, 'swing');
    });

    $(document).on("click", "#color-btn", function() {
        const color = $(this).attr('color');
        $("div").css('background', color);
    });

    $(document).on("click", "#size-btn", function() {
        
    });
});