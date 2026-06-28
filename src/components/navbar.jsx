import React from 'react';
import {logo} from "../assets/assets.js";

function Navbar() {
    return (
        <nav className="dark:bg-black/50 absolute w-full rounded-b-xl flex justify-between items-center">
            <img src={logo} alt="logo" className="w-50 m-2" />
            <span className="text-xl text-white mr-4 font-bold">عبدالله ماهر الحاج عيد</span>
        </nav>
    );
}

export default Navbar;