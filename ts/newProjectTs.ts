const colorCardsElement = document.querySelectorAll(`.section_typeColor_CardImg`)
const cardimgElement= document.querySelectorAll(`.header_down_img`)
const colorInfoImg=  document.querySelectorAll(`.Colorinfo_infoImg`)
const colorBatteryElement = document.querySelectorAll(`.section_battery_img`)
const headerTextElement = document.querySelectorAll(`.header_down_h1,
.header_down_span1,
.header_down_span4`)
// ----------------------------------------------------------------------------
// конст с масивом картинок


const imgs: string[] = [
   "img/headerImgGreen.png",
  "img/headerImgBlue.png",
  "img/headerlimgWhite.png" ,
  "img/headerImgBlack.png" ,
    "img/headerImgOrange.png" 
]

const imgsTwo string[] = [
"img/headphonesGreenInfo.png",
"img/headphonesBlueInfo.png",
"img/headphonesWhiteInfo.png",
"img/headphonesBlackInfo.png",
"img/headphonesOrangeInfo.png",
]
const imgsThree string[] =[
"img/headphonesGreenbattery.png",
"img/headphonesBluebattery.png",
"img/headphonesWhitebattery.png",
"img/headphonesBlackbattery.png",
"img/headphonesOrangebattery.png",
]

// ----------------------------------------------------------------------------
// Перебор кода для выбора цвета

colorCardsElement.forEach((card, index) => {
card.addEventListener(`click`, ()=>{
  colorCardsElement.forEach(cards => cards.classList.remove(`is_active`));
  card.classList.add(`is_active`)
  cardimgElement.forEach(img => {
      img.classList.add(`hide`);
  setTimeout(() => {
     img.src =imgs[index] 
   img.classList.remove(`hide`);
  }, 300);
  
  });
  colorInfoImg.forEach(imgTwo => {
          imgTwo.classList.add(`hide`);
      setTimeout(() => {
imgTwo.src = imgsTwo[index]
   imgTwo.classList.remove(`hide`);
  }, 300);
  });
    colorBatteryElement.forEach(imgThree => {
          imgThree.classList.add(`hide`);
      setTimeout(() => {
imgThree.src = imgsThree[index]
   imgThree.classList.remove(`hide`);
  }, 300);
  });
})
});



