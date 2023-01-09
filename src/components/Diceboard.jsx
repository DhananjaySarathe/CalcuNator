import React, { useState } from "react"
import Dice from "./Dice";

function Diceboard()
{
    const[no,updateno]=useState([6,6,6])

    function handleClick()
    {
        updateno([(Math.floor((Math.random() * 6) + 1)),(Math.floor((Math.random() * 6) + 1)),(Math.floor((Math.random() * 6) + 1))]);
    }

    return <div className="DiceBoard">
    <Dice no={(Math.floor((Math.random() * 6) + 1))} name="small"/>
    <Dice no={(Math.floor((Math.random() * 6) + 1))} name="big"/>
    <Dice no={(Math.floor((Math.random() * 6) + 1))} name="small"/>
    <button className="Btnroll" onClick={handleClick}>Roll</button>
    </div>
}

export default Diceboard;