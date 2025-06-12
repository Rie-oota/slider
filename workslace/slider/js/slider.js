
// 表示させたい画像を格納する
const picture_src = new Array("./image/spring.jpg","./image/summer.jpg","./image/fall.jpg","./image/winter.jpg");
// 変数pictureNumに-1を代入する
let pictureNum = -1;
// 画像の切り替えを実行する
slideshow_timer();

// 画像の切り替えを実行する
function slideshow_timer(){
  // 変数pictureNumが3の場合は、pictureNumに0を代入する
  if (pictureNum == 3){
    pictureNum = 0;
  } 
  // 変数pictureNumが3以外の場合は、pictureNumを1増やす
  else {
    pictureNum ++;
  }
  // pictureNum番目の画像を表示する
  document.getElementById("picture").src=picture_src[pictureNum];
  // 時間間隔を5秒に指定する
  const timeInterval = 5000;
  // 画像の切り替えを５秒間隔で実行する
  const timer = setTimeout("slideshow_timer()",timeInterval); 
}

// 時計回りに画像を表示する
function go_forward(){
  // 変数pictureNumが3の場合は、pictureNumに0を代入する
  if (pictureNum == 3) {
    pictureNum = 0;
  }
  // 変数pictureNumが3以外の場合は、pictureNumを1増やす
  else {
    pictureNum ++;
  }
  // pictureNum番目の画像を表示する
  document.getElementById("picture").src=picture_src[pictureNum];
  // タイマーをリセットする
  clearTimeout(timer);
}

// 反時計回りに画像を表示する
function go_back(){
  // 変数pictureNumが0の場合は、pictureNumに3を代入する
  if (pictureNum == 0) {
    pictureNum = 3;
  }
  // 変数pictureNumが0以外の場合は、pictureNumを1減らす
  else {
    pictureNum --;
  }
  // pictureNum番目の画像を表示する
  document.getElementById("picture").src=picture_src[pictureNum];
  // タイマーをリセットする
  clearTimeout(timer);
}