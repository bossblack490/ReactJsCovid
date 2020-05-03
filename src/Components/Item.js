import React from "react";

export default function Item(props) {
    let lastUpdate = new Date();
    lastUpdate.setTime(props.lastUpdate);

    return (
        <div className="item">
            <li>{props.country} - {props.deaths} Смертей | {props.recovered} Вылеченных | {props.confirmed} Зараженных | {props.active} Активных | Последнее обнавление {`${lastUpdate.getDate()}.${lastUpdate.getMonth()}.${lastUpdate.getFullYear()} ${lastUpdate.getHours()}:${lastUpdate.getMinutes()}`}</li>
        </div>
    );
}