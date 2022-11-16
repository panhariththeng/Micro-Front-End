import React, { useState, useEffect } from "react";
import Login from "./Login";
import MiniCart from "./MiniCart";
import {jwt } from "./cart";

export default function CartContent() {
    const [token, setToken] = useState("");

    return (<div>
        <div></div> JWT: {token}
        <Login/>
        <MiniCart />
    </div>
    );

}