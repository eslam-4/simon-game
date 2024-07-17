
var colors = ["red", "blue", "green", "yellow"]
var computerChoice = []
var playerChoice = []
var i = ""
var aud = ""
var level = 0
var started = false


$(document).keydown ( function(){
    if (started) { 
    }else{
        started=true
        game()
        
        
    }
})



$(".btn").click (function (event) {
    var get = event.target.id
    pressAnimate(get)
    playerChoice.push(get)
    playSound(get)
    check(playerChoice.length-1)
    
   console.log(computerChoice)
   
   console.log(playerChoice)
   console.log(level)
})




function playSound(color){
    switch (color) {
        case `blue`:
            aud = new Audio("./sounds/blue.mp3")
            aud.play()
            break;
        case `green`:
            aud = new Audio("./sounds/green.mp3")
            aud.play()
            break;
        case `red`:
            aud = new Audio("./sounds/red.mp3")
            aud.play()
            break;
        case `yellow`:
            aud = new Audio("./sounds/yellow.mp3")
            aud.play()
            break; 
        case `wrong`:
            aud = new Audio("./sounds/wrong.mp3")
            aud.play()
            break;    
    
        default:
            break;
    }
}














function pressAnimate(target){
    $("#"+target).addClass("pressed")
    setTimeout(function(){
    $("#"+target).removeClass("pressed")
    },100)
}


function rand(){
    

}


function game(){
    playerChoice = []
        i = Math.floor(Math.random()*3)
        i= colors[i]
    $("#"+i).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    computerChoice.push(i)
    playSound(i)
    level++
    $("#level-title").text(`Level ${level}`)
    
    
}

function error(){
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
        },100)
       let sound = new Audio("./sounds/wrong.mp3")
       sound.play(`wrong`)
       restart()
}
function check(current){
    if (computerChoice[current] === playerChoice[current]) {
        if (computerChoice.length === playerChoice.length) {
            setTimeout(function () {
                game();
                }, 1000);
        }
        }else{
            error()
        }
    
}

function restart(){

    computerChoice = []
    playerChoice = []
    level = 0
    started = false
    $("#level-title").text(`Press any key to restart`)
}