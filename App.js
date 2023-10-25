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

const root = ReactDOM.createRoot(document.getElementById('root'));
// This is comment
root.render(heading);