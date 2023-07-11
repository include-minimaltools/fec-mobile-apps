"use client";

import { FC, useEffect, useState } from "react";
import { CountdownResult, calculateDiffDate } from "../utils";

type CountdownProps = {
  initialCountdown: CountdownResult;
};

const Countdown: FC<CountdownProps> = ({ initialCountdown }) => {
  const [countdown, setCountdown] = useState<CountdownResult>(initialCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateDiffDate(new Date("7/14/2023")));
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <section className="count-down">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-head">
              <div className="box-content">
                <div className="box">
                  <h1 id="days">{countdown.days}</h1>
                  <h2 id="daystxt">Días</h2>
                </div>
                <div className="box">
                  <h1 id="hours">{countdown.hours}</h1>
                  <h2 id="hourstxt">Horas</h2>
                </div>
                <div className="box">
                  <h1 id="minutes">{countdown.minutes}</h1>
                  <h2 id="minutestxt">Minutos</h2>
                </div>
                <div className="box">
                  <h1 id="seconds">{countdown.seconds}</h1>
                  <h2 id="secondstxt">Segundos</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Countdown;
