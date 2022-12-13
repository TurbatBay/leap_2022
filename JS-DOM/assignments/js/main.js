// document.getElementById("aimag-104").innerHTML = 'Turuu12312313123'

console.log(document.getElementById("aimag-101").innerHTML) 
console.log(document.getElementById("aimag-522").innerHTML)


// document.getElementById("aimagNames").style = 'font-size: 40px;'
// document.getElementById("aimag-104").style = 'color : red;'
// document.getElementById("aimag-101").style = 'margin : 20px;'
// document.getElementById("aimagNames").style = 'border: red 1px solid;'


for (let i = 0; i < document.getElementsByClassName('gobi').length; i++) {
    document.getElementsByClassName("gobi")[i].style = "font-size: 35px; background-color magenta;"
}


console.log(document.getElementById('aimagNames').id)
const liLength = document.getElementById('aimagNames').getElementsByTagName('li').length;
console.log(document.getElementById('aimagNames').getElementsByTagName('li')[liLength-1].innerHTML);


for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName('li').length;i++) {
    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-1")) {
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style="background-color: green;"
    }
}


for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName('li').length;i++) {
    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-2")) {
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style="background-color: red;"
    }
}

for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName('li').length;i++) {
    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-3")) {
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style="background-color: yellow;"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName('li').length;i++) {
    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-4")) {
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style="background-color: pink;"
    }
}

for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName('li').length;i++) {
    if (document.getElementById("aimagNames").getElementsByTagName('li')[i].id.includes("aimag-5")) {
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style="background-color: teal;"
    }
}





// 11:00 NEW SUBJECT



document.querySelector("#demo").innerHTML = "Date : " + Date();

document.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg";




const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
main[0].appendChild(newDiv);

const h1 = document.querySelector("h1") ;
h1.appendChild(newDiv);