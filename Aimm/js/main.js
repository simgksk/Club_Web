const Aim_Amount = 10;

let currentCount = 0;
let startTime;

function gameStart(){
    startTime = new Date();
    currentCount = 0;
    
    changeScreen(2);
    setRandomAim();
}

function gameStop(){
    changeScreen(1);

    const avgTime = Math.floor((new Date() - startTime) / Aim_Amount);

    let storage = localStorage.getItem("log") || '[]';
    storage = JSON.parse(storage);

    storage.push({
        time: avgTime,
        create: Number(new Data())
    });

    localStorage.setItem("log", JSON.stringify(storage));

    $(".end-time > span").text(avgTime)
}

function setRandomAim(){
    $("#aim-icon").remove();

    $(".aim-screen").appand(`<img id="aim-icon" 
    style="transform: translate(-50, -50) scale(0.5) opercity=0" 
    src="./images/target.svg">`)
    
    setTimeout(()=> {
        $("#aim-icon").attr("style", "");
        
        const randX = Math.random()*100;
        const randY = Math.random()*100;
    
        $("#aim-icon").css({
            top: randY + '%',
            left: randX + '%'
        });
    }, 10)

}

function changeScreen(screen){
    $(".start-screen").toggle(screen === 0);
    $(".end-screen").toggle(screen === 1);
    $(".aim-screen").toggle(screen === 2);
}

$(function() {
    $("#start-btn").click(gameStart);
    $("#retry-btn").click(gameStart);

    if(currentCount >= Aim_Amount){
        gameStop();
        return;
    }
    currentCount++;

});