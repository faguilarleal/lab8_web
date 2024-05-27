import React from "react"

function Display({text }) {


    return (
        <div className="display-container" >
            <p className="display-text">{text}</p>
        </div>
    )
}

export default Display