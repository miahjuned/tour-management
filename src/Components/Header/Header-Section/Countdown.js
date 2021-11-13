import React, { useEffect, useState } from "react";
import {CountdownContainer, CountdownTime, CountdownTimer, CountdownTimerContainer, CountdownTimerTitle, CountdownTitle } from '../../Style/Style';


const calculateTimeLeft = () => {
    let year = 2022;
    let difference = +new Date(`01/01/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
  } 

  return timeLeft;

}

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer=setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
      });


      const timerComponents = [];

        Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
        });

    return (
        <>
        {/* <div>
            <h1>HacktoberFest {year}Countdown</h1>
            <h2>With React Hooks! {timeLeft.seconds}</h2>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div> */}
        <CountdownContainer>
            <CountdownTitle> Hurry up! Registration time will be closed</CountdownTitle>
            <CountdownTimerContainer>
                <CountdownTimer>
                    <CountdownTime>{timeLeft.days}</CountdownTime>
                    <CountdownTimerTitle>Days</CountdownTimerTitle>
                </CountdownTimer>
                <CountdownTimer>
                    <CountdownTime>{timeLeft.hours}</CountdownTime>
                    <CountdownTimerTitle>Hours</CountdownTimerTitle>
                </CountdownTimer>
                <CountdownTimer>
                    <CountdownTime>{timeLeft.minutes}</CountdownTime>
                    <CountdownTimerTitle>Mins</CountdownTimerTitle>
                </CountdownTimer>
                <CountdownTimer>
                    <CountdownTime>{timeLeft.seconds}</CountdownTime>
                    <CountdownTimerTitle>Sec</CountdownTimerTitle>
                </CountdownTimer>
            </CountdownTimerContainer>
        </CountdownContainer>
    </>
    );
};

export default Countdown;