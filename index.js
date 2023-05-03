const $Arrow_left = document.querySelector('.arrow-left');
const $Arrow_right = document.querySelector('.arrow-right');


let Text_ =document.querySelector('.text');
let BackgroundChange = document.querySelector('#background');
let SoundChange = document.querySelector('#sound');

let BackgroundVideos = [
    './assets/video/y2meta.com-Cosmic and Dark Cosmic Lux _ Login Screen - League of Legends (Fanmake)-(1080p60).mp4',
    './assets/video/y2meta.com-(League of Legends) Blood Moon Yasuo _Animated_ Splash art-(1080p).mp4',
    './assets/video/y2meta.com-Desktop Wallpaper Coven Ahri-(1080p60).mp4',
];

let ReponsiveImages = [
    'https://image7.uhdpaper.com/wallpaper-hd/dark-cosmic-lux-and-cosmic-lux-lol-uhdpaper.com-hd-7.1533.jpg',
    'https://images5.alphacoders.com/680/680381.png',
    'https://cdna.artstation.com/p/assets/images/images/040/446/644/4k/huyy-nguyen-pepeno-2500x1250.jpg?1628867790'
];

let Messages = [
    `<h1>Lux</h1>
    <h2>❝the Lady of Luminosity❞</h2>
    <p>❝Luxanna—or Lux, as she prefers to be called—grew up in the Demacian city of High Silvermere, along with her older brother Garen. They were born to the prestigious Crownguard family, which had served for generations as protectors of the kings of Demacia. Their grandfather saved the king’s life at the Battle of Storm’s Fang, and their aunt Tianna was named commander of the elite Dauntless Vanguard regiment before Lux was born.❞ </p>`
        ,
    `<h1>Yasuo</h1>
    <h2>❝Death is like the wind - always by my side.❞</h2>
    <p>❝An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self-defense. In time, his master’s true killer was revealed, and his brother mysteriously returned from death, yet Yasuo still could not forgive himself for all he had done. Now, he wanders the world with only the wind to guide his blade.❞ </p>`
       ,
     `<h1>Ahri</h1>
     <h2>❝It's too late for mercy.❞</h2>
     <p>❝Innately connected to the magic of the spirit realm, Ahri Ahri is a mysterious fox-like vastaya in search
     of her place in the world. Having become a somewhat reluctant and empathetic predator since entering
     mortal society, she prefers to manipulate her prey's emotions before partaking of their life essence
     life essence—receiving flashes of memory and insight from each soul she consumes.❞ </p>`
                
];

let BackgroundMusics = [
    './assets/audio/y2meta.com - Interstellar Main Theme - Hans Zimmer (128 kbps).mp3',
    './assets/audio/y2meta.com - Most Epic Battle Music Ever_ _Deadwood_ — Really Slow Motion (320 kbps).mp3',
    './assets/audio/y2meta.com - Mystery – GoSoundtrack (No Copyright Music) (128 kbps).mp3'
];



let index = 0;

;$Arrow_left
.addEventListener
('click',()=>{
    if(index<= 0)index =3;
    index--;

    Text_.innerHTML = `${Messages[index]}`;
    BackgroundChange.src = `${BackgroundVideos[index]}`;
    SoundChange.src = `${BackgroundMusics[index]}`
    
    let $Arrow_left_image = document.querySelector('#arrow-left-image');
    $Arrow_left_image.style.transform='scale(70%)';

    let time = setTimeout(()=>{
        $Arrow_left_image.style.transform='scale(100%)';
    },100);

    console.log(innerWidth)

});

;$Arrow_right
.addEventListener
('click',()=>{
    index++;
    if(index>= 3)index =0;

    Text_.innerHTML = `${Messages[index]}`;
    BackgroundChange.src = `${BackgroundVideos[index]}`
    SoundChange.src = `${BackgroundMusics[index]}`

    let $Arrow_right_image = document.querySelector('#arrow-right-image');
    $Arrow_right_image.style.transform='scale(70%)';

    let time = setTimeout(()=>{
        $Arrow_right_image.style.transform='scale(100%)';
    },100);

    console.log('Este é o width ' , innerWidth)

});