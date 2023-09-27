import React from "react";

function Card ({ createdAt, title, subtitle, content}) {
    return(
        <div className="bg-gray-100 shadow-xl rounded-2xl p-5 mb-5 text-2xl text-gray-600 font-semibold">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <p>{content}</p>
        </div>
    )
}

export default Card;