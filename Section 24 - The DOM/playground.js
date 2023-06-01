document.querySelector("#container").style.textAlign = "center";
document.querySelector("img").style.width = "150px";
document.querySelector("img").style.borderRadius = "50%";


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const settings = document.querySelectorAll("span");
for (let i = 0; i < settings.length; i++) {
    settings[i].style.color = colors[i];
};