document.querySelector(".mainContainer__imgGenBtn").addEventListener("click",()=>{

    randomImgList += `<img src="https://random.imagecdn.app/300/150">`;
    document.querySelector(".mainContainer__imgContainer").innerHTML = randomImgList;
});

let randomImgList = "";
