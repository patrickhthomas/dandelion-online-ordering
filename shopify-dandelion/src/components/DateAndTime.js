
import { bool } from 'prop-types';
import React, { useState, useEffect } from 'react';

export const DateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <>
        <h3>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h3>
        <h3>{`${dateTime.getHours()} ${dateTime.getMinutes()} ${dateTime.getDay()}`}</h3>
        </>
    );

}