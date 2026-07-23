import React from 'react'

import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", {}, "HaHa"),
//         React.createElement("h1", {}, "HaHa")
//     )
// )
// const JSXheading = (
//     <h1 className="head" tabIndex="10">Hello Bro</h1>
// )
const element = (
    <div id='container '>
        <h3 className="head" tabIndex="10">HOllllaaaaa</h3>
    </div>
)
const variable = 100
const FunctionalComp2 = () => (
    <div id='container '>
        <h2 className="head" tabIndex="10">Aa hi gye na</h2>
    </div>
)
const FunctionalComp = () => (
    <div id='container '>
        <h1 className="head" tabIndex="10">Hello{variable} Bro</h1>

    // you can call the component in both the ways
        <FunctionalComp2 />
        {FunctionalComp2()}

    //"to use Js in JSX we use { } brackets inside JSX"
        {element}
        {console.log("to use Js in JSX we use { } brackets inside JSX")}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<FunctionalComp />)