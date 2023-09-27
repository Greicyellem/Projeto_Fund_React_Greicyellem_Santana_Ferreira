import React from "react";

function InputText ({ placeholder, ToName }){
    return (
        <input 
            type="text" 
            placeholder={placeholder} 
            name={ToName}
            className="border-none py-2 px-3 rounded-2xl bg-gray-100 hover:bg-gray-300"
        />
    )
}

export default InputText;