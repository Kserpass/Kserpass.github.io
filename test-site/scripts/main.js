let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/images.jpg') {
        myImage.setAttribute('src', 'images/kobe2.jpg');    
    } else {
        myImage.setAttribute('src', 'images/images.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mamba forever, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mamba forever, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}