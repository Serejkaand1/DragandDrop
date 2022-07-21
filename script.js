const firstSlider = document.querySelector(".first");
const secondSlider = document.querySelector(".second");
const threeSlider = document.querySelector(".three");
const fourSlider = document.querySelector(".four");
const scrollActive = document.querySelector(".scroll__active");


function previewSlider() {
    let firstOrder = getComputedStyle(firstSlider);
    firstSlider.style.order = +firstOrder.order + 1;
    if (firstOrder.order > 3) {
        firstSlider.style.order = 0;
    }

    let secondOrder = getComputedStyle(secondSlider);
    secondSlider.style.order = +secondOrder.order + 1;
    if (secondOrder.order > 3) {
        secondSlider.style.order = 0;
    }

    let threeOrder = getComputedStyle(threeSlider);
    threeSlider.style.order = +threeOrder.order + 1;
    if (threeOrder.order > 3) {
        threeSlider.style.order = 0;
    }

    let fourOrder = getComputedStyle(fourSlider);
    fourSlider.style.order = +fourOrder.order + 1;
    if (fourOrder.order > 3) {
        fourSlider.style.order = 0;
    }


    let firstScroll = getComputedStyle(scrollActive);
    scrollActive.style.order = +firstScroll.order - 1;
    if (firstScroll.order < 0) {
        scrollActive.style.order = 4;
    }

};



function nextSlider() {
    let firstOrder = getComputedStyle(firstSlider);
    firstSlider.style.order = +firstOrder.order - 1;
    if (firstOrder.order < 0) {
        firstSlider.style.order = 3;
    }

    let secondOrder = getComputedStyle(secondSlider);
    secondSlider.style.order = +secondOrder.order - 1;
    if (secondOrder.order < 0) {
        secondSlider.style.order = 3;
    }

    let threeOrder = getComputedStyle(threeSlider);
    threeSlider.style.order = +threeOrder.order - 1;
    if (threeOrder.order < 0) {
        threeSlider.style.order = 3;
    }

    let fourOrder = getComputedStyle(fourSlider);
    fourSlider.style.order = +fourOrder.order - 1;
    if (fourOrder.order < 0) {
        fourSlider.style.order = 3;
    }



    let firstScroll = getComputedStyle(scrollActive);
    scrollActive.style.order = +firstScroll.order + 1;
    if (firstScroll.order > 4) {
        scrollActive.style.order = 0;
    }

};

setInterval(nextSlider, 4000);


const draganddrop = () => {
    const firstCard = document.querySelector('.first__drag');
    const secondCard = document.querySelector('.second__drag');
    const threeCard = document.querySelector('.three__drag');
    const fourCard = document.querySelector('.four__drag');
    const cells = document.querySelectorAll('.main__slider');



    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hidden');
        }, 0)
    };


    const dragEnd = function () {
        this.classList.remove('hidden');
    };

    const dragOver = function (evt) {
        evt.preventDefault();
    }

    const dragEnter = function () {
        this.classList.add('hovered');
    }

    const dragLeave = function () {
        this.classList.remove('hovered');
    }

    const dragDrop = function () {
        let dragOrder = getComputedStyle(this);
        this.style.order = +dragOrder.order - 4;
    }


    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver)
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave', dragLeave)
        cell.addEventListener('drop', dragDrop)

    })



    firstCard.addEventListener('dragstart', dragStart);
    firstCard.addEventListener('dragend', dragEnd);

    secondCard.addEventListener('dragstart', dragStart);
    secondCard.addEventListener('dragend', dragEnd);

    threeCard.addEventListener('dragstart', dragStart);
    threeCard.addEventListener('dragend', dragEnd);

    fourCard.addEventListener('dragstart', dragStart);
    fourCard.addEventListener('dragend', dragEnd);




}


draganddrop()






























