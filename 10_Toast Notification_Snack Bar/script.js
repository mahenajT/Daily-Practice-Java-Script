let toastBox = document.getElementById("toastBox");
let successMsg =
  "<i class='bi bi-check-circle-fill'></i> Successfully Submitted";
let errorMsg = "<i class='bi bi-x-circle-fill'></i> Please Fix The Error!";
let invalidMsg =
  "<i class='bi bi-exclamation-circle-fill'></i> Invalid Input, check again!";
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
