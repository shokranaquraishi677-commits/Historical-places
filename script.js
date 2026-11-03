// 1. Create Places Array
const places = [
{
    id: 1,
    name: "مسجد نصیرالملک",
    description: "مسجد نصیرالملک یکی از زیباترین مساجد شیراز است که قدمت آن به دوره قاجاریه بازمی‌گردد. این مسجد به دلیل شیشه‌های رنگارنگ خود به مسجد صورتی نیز شهرت دارد.",
    src: "images/nasirolmolk.jpg"
},

{
    id: 2,
    name: "باغ ارم",
    description: "باغ ارم یکی از زیباترین باغ‌های تاریخی شیراز است که با درختان سرسبز، سروهای بلند و عمارت زیبای خود گردشگران زیادی را جذب می‌کند.",
    src: "images/eram.jpg"
},

{
    id: 3,
    name: "خانه منطقی نژاد",
    description: "خانه منطقی نژاد از بناهای تاریخی دوره قاجار در شیراز است. این خانه دارای معماری زیبا و بخش‌های تاریخی مختلفی است.",
    src: "images/manteghinejad.jpg"
},

{
    id: 4,
    name: "عمارت شاپوری",
    description: "عمارت شاپوری یکی از زیباترین باغ‌عمارت‌های شیراز است که به دوره پهلوی اول تعلق دارد و ترکیبی از معماری ایرانی و اروپایی را نشان می‌دهد.",
    src: "images/emaratShapoori.jpg"
},

{
    id: 5,
    name: "باغ نارنجستان قوام",
    description: "باغ نارنجستان قوام یکی از آثار زیبای دوره قاجار در شیراز است که به دلیل درختان نارنج و معماری چشم‌نواز خود شهرت دارد.",
    src: "images/naranjeshtaneGhavam.jpg"
}
];
// 2. Select HTML Elements
const smallImages = document.querySelectorAll(".all-imgs img");
const currentImage = document.querySelector(".current-img");
const imageTitle = document.querySelector(".image-title");
const imageDesc = document.querySelector(".image-desc");
// 3. Function to Change Place
function changePlace(index) {
// Get Selected Place
const selectedPlace = places[index];

// Change Main Image
currentImage.src = selectedPlace.src;

// Change Title
imageTitle.textContent = selectedPlace.name;

// Change Description
imageDesc.textContent = selectedPlace.description;

// Add Animation
currentImage.classList.remove("animate-imgs");

// Restart Animation
void currentImage.offsetWidth;

currentImage.classList.add("animate-imgs");
}
// 4. Add Click Event to Small Images
smallImages.forEach(function(image, index) {
image.addEventListener("click", function() {

    changePlace(index);

});
});
// 5. Show First Place When Page Loads
changePlace(0);