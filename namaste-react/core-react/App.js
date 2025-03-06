const parent = React.createElement(
    "div", 
    { id: "parent"},
    React.createElement(
        "div",
        { className: "box-container" },
        [ React.createElement(
            "h1",
            { id: "heading1" },
            "zylo"
        ), React.createElement(
            "h2",
            { id: "heading2" },
            "zylo"
        ) ]
    ) 
);


// FOR THIS JSX EXIST.


/*
<div>
    <div>
        <h1>zylo</h1>
    </div>
</div>

*/



const heading = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello World from React."
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
