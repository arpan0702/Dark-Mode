if(document.querySelector(".popup")){
    console.log(5);
    const button=document.querySelector(".button");
    const circle=document.querySelector(".circle");
    let buttonOn=false;
    button.addEventListener("click", ()=>{
        if(!buttonOn){
            buttonOn=true;
            console.log("hi");
            circle.style.animation="moveCircleRight is forwards";
            button.style.animation="backgroundYellow is forwards";
            chrome.tabs.executeScript({
                file:"appOn.js"
            })
        }
        else{
            buttonOn=false;
            circle.style.animation="moveCircleLeft is forwards";
            button.style.animation="backgroundBlue is forwards";
            chrome.tabs.executeScript({
                file:"appOff.js"
            })
        }
    })
}