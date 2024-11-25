// array of images
const images = [
    'img/a.png',    // index 0 --> images[0]
    'img/b.png',    // index 1 --> images[1]
    'img/c.png',    // index 2 --> images[2]
    'img/d.png',    // index 3 --> images[3]
    'img/e.png',    // index 4 --> images[4]
    'img/f.png'     // index 5 --> images[5]
];
const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{

        // get image tag
        const imageTag = document.getElementById('image');
        currentImage++; // 1
        if(currentImage >= lastImage){
            currentImage = 5;
        }
        imageTag.src = images[currentImage];
        document.getElementById('info').innerHTML = (currentImage +1) + '/6';

});
// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click', ()=>{

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage--; // 1
    if(currentImage <= firstImage){
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage +1) + '/6';

});