let randomImgList = "";
const imageURL = "https://random.imagecdn.app/300/150";
const imageContainer = document.querySelector(".mainContainer__imgContainer");


async function getImage() {
    const response = await fetch(imageURL);
    const img = document.createElement("img");
    img.src = response.url;
    imageContainer.appendChild(img);
}

document.querySelector(".mainContainer__imgGenBtn").addEventListener("click",()=>{
    getImage();
});
