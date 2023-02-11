const image = document.querySelector(".image")
const title = document.querySelector(".title")
const select = document.querySelector(".select")
const player1Title = document.querySelector(".player-one")
const player2Title = document.querySelector(".player-two")
const player1Btn = document.querySelector(".player-one-btn")
const player2Btn = document.querySelector(".player-two-btn")
const resetBtn = document.querySelector(".reset-btn")
const wrap = document.querySelector('.wrap')
const imgs = document.querySelector('.img')



let oneshot1 = 0
let oneshot2 = 0
let finish = select.value
let gameover = false
let audio
let img = document.createElement('img')




function test () {
    finish = select.value
    console.log(finish);
}
function time () {
    setTimeout(function() {
        wrap.style.display = 'none'
        imgs.classList.add('none')
    }, 3500);
}

function randomFunc(){
    let random = Math.trunc(Math.random()*5+1)
    image.src = `images/ping-pong-${random}.jpg`
}
randomFunc()

player1Btn.addEventListener('click' , ()=> {
    if (!gameover) {
        oneshot1++ 
        player1Title.textContent = oneshot1 
        if (finish == oneshot1) {
            title.textContent = `Player 1 win🏆`
            player1Title.style.color = "green"
            player2Title.style.color = "red"
            audio = new Audio("sounds/win2.mp3")
            audio.play()
            wrap.style.display = 'block'
            imgs.style.display = 'block'
            time()
            gameover = true
        }
    }
})

player2Btn.addEventListener('click' , ()=> {
    if (!gameover) {
        oneshot2++ 
        player2Title.textContent = oneshot2 

        if (finish == oneshot2) {
            title.textContent = `Player 2 win🏆`
            player2Title.style.color = "green"
            player1Title.style.color = "red"
            audio = new Audio("sounds/win2.mp3")
            audio.play()
            wrap.style.display = 'block'
            imgs.style.display = 'block'
            time()
            gameover = true
        }
    }
})

resetBtn.addEventListener("click" , ()=>{
    title.textContent = `Stol Tennis`
    player2Title.style.color = "#123456"
    player1Title.style.color = "#123456"

    oneshot1 = 0
    oneshot2 = 0
    gameover = false
    player2Title.textContent = 0 
    player1Title.textContent = 0 
    randomFunc()
    audio.pause()


})
