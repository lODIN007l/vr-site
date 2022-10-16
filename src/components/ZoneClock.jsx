import React from "react";
import { useState, useEffect } from "react";
import './Scss/clock.scss'

const ZoneClock = () => {

    const [currentTime,setCurrenTime] = useState (new Date().toLocaleTimeString('fr-FR'));

    const refreshTime = () =>{
        setCurrenTime(new Date().toLocaleTimeString('fr-FR'));
    };
    
    useEffect(
        () => {
            const time  = setInterval(refreshTime,1000)

            return () => {
                clearInterval(time);
            };

        }, []
    );
    
    
    return(
        <section className="container mx-auto relative text-center lg:text-left mt-10 relative">
            <div id="clock">
                <p className="time mb-4 text-5xl lg:text-7xl">{currentTime}</p>
                <p className="zone text-xl">{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
            </div>
        </section>
    );
    
};

export default ZoneClock;