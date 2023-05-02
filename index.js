const $Arrow_left = document.querySelector('.arrow-left');
const $Arrow_right = document.querySelector('.arrow-right');


let BackgroundChange = document.querySelector('#background');
let SoundChange = document.querySelector('#sound');

let BackgroundVideos = [
    './assets/video/y2meta.com-Desktop Wallpaper Coven Ahri-(1080p60).mp4',
    './assets/video/y2meta.com-Desktop Wallpaper Coven Ahri-(1080p60).mp4',
    './assets/video/y2meta.com-Desktop Wallpaper Coven Ahri-(1080p60).mp4'
]

let BackgroundMusics = [
    './assets/audio/y2meta.com - Mystery – GoSoundtrack (No Copyright Music) (128 kbps).mp3',
    './assets/audio/y2meta.com - Mystery – GoSoundtrack (No Copyright Music) (128 kbps).mp3',
    './assets/audio/y2meta.com - Mystery – GoSoundtrack (No Copyright Music) (128 kbps).mp3'
]

let index =0;

;$Arrow_left
.addEventListener
('click',()=>{

});

;$Arrow_right
.addEventListener
('click',()=>{
    index++;
    if(index=== 3)index =0;
    BackgroundChange.src = `${BackgroundVideos[index]}`
});