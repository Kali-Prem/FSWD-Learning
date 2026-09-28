const { createElement } = require("react");

let root = document.getElementById("root");

// let heading1 = document.createElement("h1");
// heading1.innerText = "Welcome React";
// heading1.style.backgroundColor = "orange";
// heading1.style.fontSize = "20px";

// let para1 = document.createElement("p");
// para1.innerText = "React is a Library";
// para1.backgroundColor = "yellow";
// para1.style.fontSize = "25px";

// root.append(heading1);
// root.append(para1);



// Using functions-----------
let React = {
    createElement: function (tag, styles, children){
    let ele = document.createElement(tag);
    ele.innerText = children;
    return ele;
    },
};

let heading1 = React.createElement("h1", {}, "Welcome to React");
let para1 = React.c