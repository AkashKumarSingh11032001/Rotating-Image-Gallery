const imageContainerEle = document.querySelector(".image-container");
const prevBtnEle = document.getElementById("prev");
const nextBtnEle = document.getElementById("next");

let x = 0;
let timmer;

prevBtnEle.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timmer);
    updateGallery();
});

nextBtnEle.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timmer);
    updateGallery();
});

function updateGallery() {
    imageContainerEle.style.transform =`perspective(1000px) rotateY(${x}deg)`;
    timmer = setTimeout(()=>{
        x = x - 45;
        updateGallery();
    },3000);
}

updateGallery();
