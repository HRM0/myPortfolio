import React from "react";
import NavLink from "./Navlink";

const MenuOverLay = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link,idx) => {
                return (
                    <li>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuOverLay