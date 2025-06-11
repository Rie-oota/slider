const picture_src = new Array("./image/spring.jpg","./image/summer.jpg","./image/fall.jpg","./image/winter.jpg");
let pictureNum = -1;
slideshow_timer();

function slideshow_timer(){
  if (pictureNum == 3){
    pictureNum = 0;
  } 
  else {
    pictureNum ++;
  }
  document.getElementById("picture").src=picture_src[pictureNum];
  const timeInterval = 5000;
  setTimeout("slideshow_timer()",timeInterval); 
}

function go_forward(){
  if (pictureNum == 3) {
    pictureNum = 0;
  }
  else {
    pictureNum ++;
  }
  document.getElementById("picture").src=picture_src[pictureNum];
  count = 0;
}

function go_back(){
  if (pictureNum == 0) {
    pictureNum = 3;
  }
  else {
    pictureNum --;
  }
  document.getElementById("picture").src=picture_src[pictureNum];
  count = 0;
}