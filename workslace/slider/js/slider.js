// 表示させたい画像を格納する
const pictureSrc = ["./image/spring.jpg", "./image/summer.jpg", "./image/fall.jpg", "./image/winter.jpg"];
// 現在のスライドインデックス
let pictureNum = -1;
// タイマーをグローバルで管理
let timer;

// 共通のスライド切り替えロジック
function changeSlide(direction) {
  // インデックスを循環させる
  pictureNum = (pictureNum + direction + pictureSrc.length) % pictureSrc.length;
  document.getElementById("picture").src = pictureSrc[pictureNum];
}

// 自動再生機能
function startSlideshow() {
  // 5秒間隔で次のスライドを表示
  timer = setInterval(() => changeSlide(1), 5000);
}

// スライドショーを一時停止
function stopSlideshow() {
  clearInterval(timer);
}

// ボタン操作のイベントリスナーを設定
document.getElementById("prev").addEventListener('click', () => {
  stopSlideshow(); // 自動再生を一時停止
  changeSlide(-1); // 前のスライドに変更
  startSlideshow(); // 再度自動再生を開始
});

document.getElementById("next").addEventListener('click', () => {
  stopSlideshow(); // 自動再生を一時停止
  changeSlide(1); // 次のスライドに変更
  startSlideshow(); // 再度自動再生を開始
});

// ページが読み込まれたら自動再生開始
window.onload = () => {
  changeSlide(1); // 最初に1枚目を表示
  startSlideshow(); // 再度自動再生を開始
};