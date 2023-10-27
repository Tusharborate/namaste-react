import React from 'react';
import ReactDOM from 'react-dom/client';

const Elem = () => (
    <h2>This is testing heading {22 + 32}</h2>
)

const elem = (
    <>
        <h3>This is heading {22 + 54}</h3>
        {
            console.log("Working")
        }
        <Elem/>
    </>
) 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(elem); 