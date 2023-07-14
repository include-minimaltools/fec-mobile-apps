"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import { ActivityCollection } from "~/firebase/database";
import { Activity } from "~/firebase/models";

const ScheduleSection = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => new ActivityCollection().subscribeToAll(setActivities), []);

  if (!activities.length) return <></>;

  return (
    <section className="section schedule">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>
                <span className="alternate">Programa</span> del Evento
              </h2>
              <p>
                Explora nuestro completo programa de eventos para obtener una
                visión detallada de la VI Feria de Aplicaciones Móviles.
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "-6rem" }}>
          <div className="col-12">
            <div className="schedule-contents bg-schedule">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active schedule-item"
                  id="nov20"
                >
                  <ul className="m-0 p-0">
                    <li className="headings">
                      <div className="time">Hora</div>
                      <div className="speaker">Anfitrión</div>
                      <div className="subject">Tópico</div>
                    </li>
                    {activities.sort((a, b) => a.startTime.toMillis() - b.startTime.toMillis()).map(({ responsible, startTime, id, title }) => (
                      <li key={id} className="schedule-details">
                        <div className="block">
                          <div className="time">
                            <i className="fa fa-clock-o" />
                            <span className="time">
                              {moment(startTime.toDate()).format("LT")}
                            </span>
                          </div>
                          <div className="speaker">
                            <span className="name">{responsible}</span>
                          </div>
                          <div className="subject">{title}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ScheduleSection;
