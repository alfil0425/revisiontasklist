// Menu.js
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
return (
    <div>
    <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/tareas">Tareas</Link>
        </li>
        <li>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        </li>
    </ul>
    </div>
);
}

export default Menu;
