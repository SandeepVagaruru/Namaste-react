const heading= React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"heading"},"welcome to namaste react sandeep"),React.createElement("h2",{},"hello sandeep")]),
React.createElement("div",{id:"child2"})]);
const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(heading);