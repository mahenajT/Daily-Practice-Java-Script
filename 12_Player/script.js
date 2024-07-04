let progress = document.getElementById("progress");
let surah = document.getElementById("surah");
let controlIcon = document.getElementById("controlIcon");

surah.onloadedmetadata = function () {
  progress.max = surah.duration;
  progress.value = surah.currentTime;
};

function playPause() {
  if (controlIcon.classList.contains("bi-pause")) {
    surah.pause();
    controlIcon.classList.remove("bi-pause");
    controlIcon.classList.add("bi-play-fill");
  } else {
    surah.play();
    controlIcon.classList.add("bi-pause");
    controlIcon.classList.remove("bi-play-fill");
  }
}
if (surah.play()) {
  setInterval(() => {
    progress.value = surah.currentTime;
  }, 500);
}
progress.onchange = function () {
  surah.play();
  surah.currentTime = progress.value;
  controlIcon.classList.add("bi-pause");
  controlIcon.classList.remove("bi-play-fill");
};
