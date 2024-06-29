let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let invalidText = document.getElementById("error-input");

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    invalidText.style.display = "none";
  } else {
    qrText.classList.add("error");
    invalidText.textContent = "Invalid!";
    invalidText.style.display = "block";
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
