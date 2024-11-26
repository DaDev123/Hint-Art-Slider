// array of images
const images = [
    'img/a.png',    // index 0 --> images[0]
    'img/b.png',    // index 1 --> images[1]
    'img/c.png',    // index 2 --> images[2]
    'img/d.png',    // index 3 --> images[3]
    'img/e.png',    // index 4 --> images[4]
    'img/f.png',    // index 5 --> images[5]
    'img/g.png',    // index 6 --> images[6]
    'img/h.png',    // index 7 --> images[7]
    'img/i.png',    // index 8 --> images[8]
    'img/j.png',    // index 9 --> images[9]
    'img/k.png',    // index 10 --> images[10]
    'img/l.png',    // index 11 --> images[11]
    'img/m.png',    // index 12 --> images[12]
    'img/n.png',    // index 13 --> images[13]
    'img/o.png',    // index 14 --> images[14]
    'img/p.png',    // index 15 --> images[15]
    'img/q.png',    // index 16 --> images[16]
    'img/r.png'     // index 17 --> images[17]

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
            currentImage = 17;
        }
        imageTag.src = images[currentImage];
        document.getElementById('info').innerHTML = (currentImage +1) + '/18';

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
    document.getElementById('info').innerHTML = (currentImage +1) + '/18';

});