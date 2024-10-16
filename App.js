// var h2 = document.createElement("h2");
// h2.innerHTML= "hello this is javascript"

// var div= document.querySelector("#div");
// div.appendChild(h2);

// here first code in react js hello world

/**
 *  here we creat a neasted tag like that
 * 
 * 
 *   <div id="parent">
 *   <div id ="child">
 *   <h1>hey</h1>
 *   </div>
 *   </div>
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
//  */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "h1 first tag"),
      React.createElement("h2", {}, "h2 first tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "h1 first tag"),
      React.createElement("h2", {}, "h2 first tag"),
    ]),
  ]
  // console.log(parent);
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
