let lastScrollTop=0;
header = document.getElementById("header");
window.addEventListener("scroll", function() {
  let scrollTop = window.PageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    header.classList.add("show");
  }else{
    header.classList.remove("show");
  }
  lastScrollTop = scrollTop;
})
//Flip Book
// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}
function closeBook(isAtBeginning) {
  if(isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }
  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}
function goNextPage() {
  if(currentLocation < maxLocation) {
    switch(currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        closeBook(false);
        break;
      default:
        throw new Error("Unknown state");
    }
    currentLocation++;
  }
}
function goPrevPage() {
  if(currentLocation > 1) {
    switch(currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 4;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 3;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 2;
        break;
      case 5:
        openBook();
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 1;
        break;
      default:
        throw new Error("Unknown state");
    }
    currentLocation--;
  }
}
//SlideShow
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//Blog
let dataNama = [
  "Surya Muhidin",
  "Bagus Pradipta",
  "Sintya Agustina"
];
let dataKomen = [
  "Jogja Tuh Asik Banget, Masih Kental Budaya dan Adatnya. Nyaman Banget Di Jogja.",
  "Jauh - jauh dari Malang ke Jogja worth it parah sih. Udah bagus viewnya makanan juga banyak.",
  "Rencana ke Jogja cuman kuliah, eh dapet jodoh juga disini, sampai punya anak 5 wkwkwkw"
];
function showKomen(){
  let listKomen = document.getElementById("list-komen");
  // clear list barang
  listKomen.innerHTML = "";
  // cetak semua barang
  for(let i = 0; i < dataNama.length; i++){
    listKomen.innerHTML += "<div id='kotak'>" +"<div id='n'>"+"<b>" +dataNama[i]+ ": </b>" + "<br><hr>"+
      "</div>" + "<div id='k'>"+dataKomen[i]+"</div>" +"</div>";
  }
}
function addNama() {
  let inputN = document.querySelector("input[id=nama]");
  dataNama.push(inputN.value);
  showKomen()
}
function addKomen(){
  let inputK = document.querySelector("textarea[id=komen]");
  dataKomen.push(inputK.value);
  showKomen()
}
showKomen();
