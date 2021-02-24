'use strict';

import { useState, useEffect } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        setTimeout(tick,1000);
    });

    const tick = () => {
        setTime(new Date().toLocaleTimeString());

    }

    return (
        <p>{time}</p>
    )
}
export default Clock;