const openShare = document.querySelector(".open-share");
const share = document.querySelector(".share");

openShare.addEventListener("click", function () {
  share.classList.remove("hidden");
});

share.addEventListener("click", function () {
  share.classList.add("hidden");
});
