// const heading = React.createElement("h1", { id: "newHeading", xyz: "abc" }, "Hello From React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

  /* <div id="parent">
   *    <div id="child">
   *        <h1>HaHa</h1>
   *    </div>
   * </div> 
   */


const heading = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        React.createElement("h1", {}, "HaHa"),
        React.createElement("h1", {}, "HaHa")
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)