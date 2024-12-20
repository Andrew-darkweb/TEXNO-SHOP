const video = document.getElementById('myVideo')
const ButtonPlay = document.getElementById('play')
const ButtonMute = document.getElementById("mute")
const Playlist = ["Video1","Video2","Video3","Video4"]
const VideoText = ["Оружие","Фраер","Передумала","Beat It"]
const DescribeText = ["Группа PIZZA","Михаил Круг","Enrasta","Michael Jackson"]
const ButtonNext = document.getElementById('next')
const ButtonLast = document.getElementById("last")
let number = 0
const PlayText = document.querySelector('.video__title')
const PlayDescribe = document.querySelector('.video__text')

function videoPlay() {
    if (video.paused) {
        video.play()
        ButtonPlay.innerText = '⏸'
    }
    else {
     video.pause() 
     ButtonPlay.innerText = '▶' 
    } 
}
function videoMute() {
    if (video.muted) {
        video.muted=false
        ButtonMute.innerText = '🔈'
    }
    else {
        video.muted=true
     ButtonMute.innerText = '🔊' 
    } 
}
function videoNext() {
    if (number<Playlist.length-1) {
        number++
    }
    else {
        number = 0
    }
    video.src = `/Video/${Playlist[number]}.mp4`
    PlayText.innerHTML = VideoText[number]
    PlayDescribe.innerHTML = DescribeText[number]
}
function videoLast() {
    if (number!=0) {
        number--
    }
    else {
        number = Playlist.length-1
    }
    video.src = `/Video/${Playlist[number]}.mp4`
    PlayText.innerHTML = VideoText[number]
    PlayDescribe.innerHTML = DescribeText[number]
}
