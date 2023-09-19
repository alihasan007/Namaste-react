// const rootEL = document.getElementById('root')
// const childEL = document.createElement('h2')
// const textEL = document.createTextNode('hello from root')
// childEL.appendChild(textEL)
// rootEL.appendChild(childEL)

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "child" }, "hello from react child"),
    React.createElement("h1", { id: "child2" }, "hello from react child 2")])
const heading = React.createElement("h1", { id: "heading" }, "hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);