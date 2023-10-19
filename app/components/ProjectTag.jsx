import React from "react";

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white border-blue-500"
    : "border-slate-600 hover:border-white"
    return (
        <button onClick={() => onClick(name)} className={`rounded-full ${buttonStyles} border-2 px-6 py-3 text-xl cursor-pointer`}>
            {name}
        </button>
    )
}

export default ProjectTag