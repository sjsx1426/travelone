let destination = document.querySelector('.destination')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')


let arr = [
    './images/Destinations/azhimala.webp',
    './images/Destinations/kedarnath-temple.webp',
    './images/Destinations/marinaBeach.jpg',
    './images/Destinations/meghalaya.jpg',
    './images/Destinations/rameshwaram.jpeg'
]


let index = 0 

function addBgImg() {
    destination.style.backgroundImage= `url(${arr[index]})`
}

next.addEventListener('click',function () {
    index++;
    if(index == arr.length) {
        index = 0
    }
    addBgImg()

})

prev.addEventListener('click',function () {
    index++;
    if(index == arr.length) {
        index = 0
    }
    addBgImg()

})