"use client";

import { FC, useEffect, useState } from "react";
import { CountdownResult, calculateDiffDate } from "../utils";
import { Timestamp } from "firebase/firestore";

type CountdownProps = {
  initialCountdown: CountdownResult;
  eventDate: Date;
};

const Countdown: FC<CountdownProps> = ({ initialCountdown, eventDate }) => {
  const [countdown, setCountdown] = useState<CountdownResult>(initialCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateDiffDate(eventDate));
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <section
      className="count-down"
      data-aos="fade-up"
      data-aos-duration={2000}
      data-aos-delay={50}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-head">
              <div className="box-content">
                <div className="box">
                  <h1 id="days">{countdown.days > 0 ? countdown.days : 0}</h1>
                  <h2 id="daystxt">Días</h2>
                </div>
                <div className="box">
                  <h1 id="hours">
                    {countdown.hours > 0 ? countdown.hours : 0}
                  </h1>
                  <h2 id="hourstxt">Horas</h2>
                </div>
                <div className="box">
                  <h1 id="minutes">
                    {countdown.minutes > 0 ? countdown.minutes : 0}
                  </h1>
                  <h2 id="minutestxt">Minutos</h2>
                </div>
                <div className="box">
                  <h1 id="seconds">
                    {countdown.seconds > 0 ? countdown.seconds : 0}
                  </h1>
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
