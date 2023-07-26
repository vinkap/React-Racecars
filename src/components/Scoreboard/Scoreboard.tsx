import React, { ChangeEvent, useEffect, useState } from 'react';
import './Scoreboard.css';
import { Drivers, IDriver } from '../../models/Driver';
import Driver from '../Driver/Driver';

interface Prop {
    showScores: boolean;
    hideScoreboard: () => void;
}

function Scoreboard({ showScores, hideScoreboard }: Prop) {
    const [raceStarted, setRaceStarted] = useState<boolean>(false);
    const [showAddDriver, setShowAddDriver] = useState<boolean>(false);
    const [driverName, setDriverName] = useState<string>('');
    const [drivers, setDrivers] = useState<Drivers>([
        {
            id: 1,
            name: 'Princess Daisy',
            timing: 0,
            crossedFinishLine: false,
        },
        {
            id: 2,
            name: 'Mario',
            timing: 0,
            crossedFinishLine: false,
        },
        {
            id: 3,
            name: 'Luigi',
            timing: 0,
            crossedFinishLine: false,
        }
    ]);

    useEffect(() => {
        console.log('Scoreboard.tsx has mounted');

        return () => {
            console.log('Scoreboard.tsx has un-mounted');
        }
    }, []);

    const addDriver = () => {
        setDrivers((prev) => {
            return [...prev, { name: driverName }];
        });
        setShowAddDriver(false);
        setDriverName('');
    }

    const deleteDriver = (index: number) => {
        setDrivers((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    }

    return (
        <div className="Scoreboard">
            <button onClick={() => setRaceStarted(!raceStarted)}>{raceStarted ? 'Stop' : 'Go'}</button>
            {
                showScores &&
                <>
                    {
                        drivers.map((driver, index) =>
                            <Driver key={driver.id} driver={driver}
                                    raceStarted={raceStarted}
                                    onDelete={() => deleteDriver(index)} 
                            />
                        )
                    }

                    <button onClick={() => setShowAddDriver(!showAddDriver)}>Add Driver</button>
                    {showAddDriver &&
                        <>
                            <br />
                            <br />
                            <div>
                                <label htmlFor="name">Driver Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={driverName}
                                    onChange={(e) => setDriverName(e.target.value)}
                                />
                            </div>
                            <button onClick={addDriver}>Save</button>
                        </>
                    }
                    <br />
                    <br />
                </>
            }
            <button onClick={hideScoreboard}>Hide scoreboard</button>
        </div>
    );
}

export default Scoreboard;
