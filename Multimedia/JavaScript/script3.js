let para1 = document.getElementById("demo1");
let para2 = document.getElementById("demo2");

console.log(para1, para2);
//inner HTML
//outerHTML
//innerText
//textContent

function myFunc() {
    console.log(para1.innerHTML);
    console.log(para1.outerHTML);
    console.log(para1.innerText);
    console.log(para1.textContent);

    para1.innerHTML = "I am changed";
    // para2.outerHTML = "<h4>I am changed<h4>";
    para2.innerText = "I am a new paragraph now";

    // para1.style.backgroundColor = "red";
    // para1.style.fontSize = "2em";
    // para2.style.fontWeight = "bold";
    // para2.style.fontStyle = "italic";
    para1.style.cssText = "font-size: 2em; background-color: red;"
    para1.style.border = "2px solid black";
    // para2.style.cssText = "background-color: blue; font-size: 2em; border: 1px dashed black";
    para2.style.border = "2px solid black";

    //create a style opbject
    const myStyles = {
        fontSize: "2em",
        backgroundColor: "yellow",
        border: "2px dashed green"
    }

    Object.assign(para2.style, myStyles);
}


//identifier - name given to variable, constant, array or function/method
//backgroud-color -> backGroundColor

// let and const --> block 
// var --> function
