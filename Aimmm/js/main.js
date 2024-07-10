const AIM_AMOUNT = 2;

let currentCount = 0;
let startTime;

function gameStart() {
    startTime = new Date();
    currentCount = 0;

    changeScreen(2); // 화면 바꾸고
    setRandomAim();
}

function gameStop() {
    changeScreen(1);

    const avgTime = Math.floor((new Date() - startTime) / AIM_AMOUNT); // 평균 걸린 시간

    // 기록 저장
    let storage = localStorage.getItem("log") || '[]';
    storage = JSON.parse(storage);

    storage.push({
        time: avgTime,
        created: Number(new Date())
    });

    localStorage.setItem("log", JSON.stringify(storage));
    
    $(".end-time > span").text(avgTime);
}

function setRandomAim() {
    $("#aim-icon").remove();

    $('.aim-screen').append(`<img id="aim-icon" style="transform: translate(-50%, -50%) scale(0.5); opacity: 0;" src="./images/target.svg">`);

    setTimeout(() => {
        $("#aim-icon").attr("style", "");
        
        const randX = Math.random() * 100; // 0 ~ 100
        const randY = Math.random() * 100; // 0 ~ 100
        
        // 과녁 아이콘 위치 바꾸기
        $("#aim-icon").css({
            top: randY + '%',
            left: randX + '%'
        });
    }, 10);
}

function changeScreen(screen) {
    $(".start-screen").toggle(screen === 0);
    $(".end-screen").toggle(screen === 1);
    $(".aim-screen").toggle(screen === 2);
}

$(function() {
    $("#start-btn").click(gameStart);
    $("#retry-btn").click(gameStart);

    $(document).on("click", "#aim-icon", function() {
        currentCount++;
        if (currentCount >= AIM_AMOUNT) {
            gameStop();
            return;
        }

        setRandomAim();
    });
});