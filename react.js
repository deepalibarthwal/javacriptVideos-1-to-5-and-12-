const task = {
    title: "learning react"
}

function toTitleCase(text) {
    return text.charAt(0).toUpperCase() + text.substr(1);
}

const element = (
    <h2>
        I'am working on {toTitleCase(task.title)}
    </h2>
);

function greeting(name) {
    if(name) {
        return <h2>Welcome {name}</h2>;
    } else {
        return <h2>Welcome, stranger</h2>;
    }
}

ReactDOM.render(
    <React.Fragment>
        {element}
        {greeting("Abc")}
    </React.Fragment>
    ,
    document.getElementById("root")
);

// ReactDOM.render(
//     [ element,
//     greeting("Abc") ]
//     ,
//     document.getElementById("root")
// );
