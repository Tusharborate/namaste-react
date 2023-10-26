import React from 'react';
import ReactDOM from 'react-dom/client';
/*
const heading = React.createElement("div",{},
                [
                React.createElement("div",{id: "heading"},
                    [
                        React.createElement("h1", {id: "inner"}, "This is heading one"),
                        React.createElement("h2", {id: "inner2"}, "This is heading text two")
                    ]
                ),
                React.createElement("div",{id: "heading"},
                    [
                        React.createElement("h1", {id: "inner"}, "This is heading one"),
                        React.createElement("h2", {id: "inner2"}, "This is heading text two")
                    ]
                )
                ]
                );
*/

const heading = React.createElement("h1",{id: "heading"},"This is header");
console.log(heading);

const jsxElement = <h1 id="heading" tabIndex={1}>This is header</h1>; 
console.log(jsxElement);

const TitleComponent = () => (
    <h1 id="heading">This is title</h1>
)

const HeadingComponent = () => (
    <div className='container'>
        <TitleComponent/>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
// This is comment
root.render(<HeadingComponent/>);