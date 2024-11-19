const nftImage = document.querySelector(".main-nft");
const eyeIcon = document.getElementById("eye-icon");

nftImage.addEventListener("mouseover", () => {
    eyeIcon.style.visibility = "visible";
});

nftImage.addEventListener("mouseout", () => {
    eyeIcon.style.visibility = "hidden";
});