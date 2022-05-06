// Test to see if the JS is working
//$('.jstest').html('JavaScript is working');


// Contact form JS, used in cinjunction with 'Formspree' to recieve contact requests

$(document).ready(function () {
  $('.submitButton').click(function (event) {
    console.log('Clicked')

    var name = $('.name').val()
    var surname = $('.surname').val()
    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if (email.length > 5 && email.inlcudes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }
  })
})


// 'Touch' functionality for mobile and touch screens

document.querySelector('img').addEventListener("touchend", e => {
  console.log(e)
})

let img1 = document.querySelector('.sanctuaryImage img');
let img2 = document.querySelector('.cryptsImage img');
let img3 = document.querySelector('.westmarchImage img')
let img4 = document.querySelector('.sescheronImage img')
let img5 = document.querySelector('.kurastImage img')
let img6 = document.querySelector('.citadelImage img')
let delayInMilliseconds = 9750;

document.querySelector('#sanctuaryImg').addEventListener("touchstart", e => {
  console.log(e)
  img1.src = 'Media/SanctuaryGif/SanctuaryGif.gif'
})


document.querySelector('#sanctuaryImg').addEventListener("touchend", e => {
  setTimeout(function () {
    console.log(e)
    img1.src = 'Media/SanctuaryGif/SanctuaryMain.jpg'
  }, delayInMilliseconds);
})

document.querySelector('#cryptsImg').addEventListener("touchstart", e => {
  console.log(e)
  img2.src = 'Media/CryptsGif/CryptsGif.gif'
})


document.querySelector('#cryptsImg').addEventListener("touchend", e => {
  setTimeout(function () {
    console.log(e)
    img2.src = 'Media/CryptsGif/CryptsMain.jpg'
  }, delayInMilliseconds);
})

document.querySelector('#westmarchImg').addEventListener("touchstart", e => {
  console.log(e)
  img3.src = 'Media/WestmarchGif/Westmarch.gif'
})


document.querySelector('#westmarchImg').addEventListener("touchend", e => {
  setTimeout(function () {
    console.log(e)
    img3.src = 'Media/WestmarchGif/WestmarchMain.jpg'
  }, delayInMilliseconds);
})

document.querySelector('#sescheronImg').addEventListener("touchstart", e => {
  console.log(e)
  img4.src = 'Media/FrozenForestGif/FrozenForest.gif'
})


document.querySelector('#sescheronImg').addEventListener("touchend", e => {
  setTimeout(function () {
    console.log(e)
    img4.src = 'Media/FrozenForestGif/FrozenRavineMain.JPG'
  }, delayInMilliseconds);
})

document.querySelector('#kurastImg').addEventListener("touchstart", e => {
  console.log(e)
  img5.src = 'Media/KurastGif/Kurast.gif'
})


document.querySelector('#kurastImg').addEventListener("touchend", e => {
  setTimeout(function () {
    console.log(e)
    img5.src = 'Media/KurastGif/KurastMain.jpg'
  }, delayInMilliseconds);
})

document.querySelector('#citadelImg').addEventListener("touchstart", e => {
  console.log(e)
  img6.src = 'Media/CitadelGif/Citadel.gif'
})


document.querySelector('#citadelImg').addEventListener("touchend", e => {
  setTimeout(function () {
    console.log(e)
    img6.src = 'Media/CitadelGif/CitadelMain.jpg'
  }, delayInMilliseconds);
})
