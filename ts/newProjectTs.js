var colorCardsElement = document.querySelectorAll(".section_typeColor_CardImg");
var cardimgElement = document.querySelectorAll(".header_down_img");
var colorInfoImg = document.querySelectorAll(".Colorinfo_infoImg");
var colorBatteryElement = document.querySelectorAll(".section_battery_img");
var headerTextElement = document.querySelectorAll(".header_down_h1,\n.header_down_span1,\n.header_down_span4");
// ----------------------------------------------------------------------------
// конст с масивом картинок
var imgs = [
    "img/headerImgGreen.png",
    "img/headerImgBlue.png",
    "img/headerlimgWhite.png",
    "img/headerImgBlack.png",
    "img/headerImgOrange.png"
];
var imgsTwo = [
    "img/headphonesGreenInfo.png",
    "img/headphonesBlueInfo.png",
    "img/headphonesWhiteInfo.png",
    "img/headphonesBlackInfo.png",
    "img/headphonesOrangeInfo.png",
];
var imgsThree = [
    "img/headphonesGreenbattery.png",
    "img/headphonesBluebattery.png",
    "img/headphonesWhitebattery.png",
    "img/headphonesBlackbattery.png",
    "img/headphonesOrangebattery.png",
];
// ----------------------------------------------------------------------------
// Перебор кода для выбора цвета
colorCardsElement.forEach(function (card, index) {
    card.addEventListener("click", function () {
        colorCardsElement.forEach(function (cards) { return cards.classList.remove("is_active"); });
        card.classList.add("is_active");
        cardimgElement.forEach(function (img) {
            img.classList.add("hide");
            setTimeout(function () {
                img.src = imgs[index];
                img.classList.remove("hide");
            }, 300);
        });
        colorInfoImg.forEach(function (imgTwo) {
            imgTwo.classList.add("hide");
            setTimeout(function () {
                imgTwo.src = imgsTwo[index];
                imgTwo.classList.remove("hide");
            }, 300);
        });
        colorBatteryElement.forEach(function (imgThree) {
            imgThree.classList.add("hide");
            setTimeout(function () {
                imgThree.src = imgsThree[index];
                imgThree.classList.remove("hide");
            }, 300);
        });
    });
});

