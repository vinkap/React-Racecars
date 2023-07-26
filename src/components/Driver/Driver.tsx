import React, { useCallback, useEffect, useState } from 'react';
import './Driver.css';
import { IDriver } from '../../models/Driver';

interface Prop {
    driver: IDriver;
    raceStarted: boolean;
    onDelete: () => void;
}

function Driver({ driver, raceStarted, onDelete }: Prop) {
    const [seconds, setSeconds] = useState(0);
    // let timer: any;

    const formatTime = useCallback((seconds: number): string => {
        let s = 0;
        let m = 0;
        if (seconds > 59) {
            m = Math.floor(seconds / 60);
            s = seconds % 60;
        } else {
            s = seconds;
        }
        return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
    }, []);

    useEffect(() => {
        console.log('Scoreboard.tsx has mounted');

        return () => {
            console.log('Scoreboard.tsx has un-mounted');
        }
    }, []);

    useEffect(() => {
        let timer:any;
        console.log('raceStarted has updated')

        if (raceStarted) {
            timer = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000)
        }
    
        return () => {
            // Reset the timer
            if (timer) {
                console.log('Driver.tsx cleanup fn');
                clearInterval(timer);
                setSeconds(0);
            }
        }
    }, [raceStarted]);

    return (
        <>
            <div className="Driver">
                <ul>
                    <li><span>{driver.name}</span>&nbsp;&nbsp;&nbsp;<button onClick={onDelete}>X</button></li>
                    <div>{formatTime(seconds)}</div>
                </ul>
            </div>
        </>
    );
}

export default Driver;
