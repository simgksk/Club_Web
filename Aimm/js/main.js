const Aim_Amount = 10;

let currentCount = 0;
let startTime;

function gameStart(){
    changeScreen(2);
    setRandomAim();
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
    $(".start-screen").togle(screen === 0);
    $(".end-screen").togle(screen === 1);
    $(".aim-screen").togle(screen === 2);
}

$(function(){
    $(".start-btn").click(gameStart);
});