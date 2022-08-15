const imageContainerEle = document.querySelectorAll(".image-container");
const prevBtnEle = document.getElementById("prev");
const nextBtnEle = document.getElementById("next");

let x = 0;

prevBtnEle.addEventListener("click", () => {
    x = x + 45;
    updateGallery();
});

function updateGallery() {
    imageContainerEle.style.transform =`perspective(1000px) rotateY(${x}deg)`;
}
