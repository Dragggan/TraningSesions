import React, { FC, useState, useEffect } from 'react'
import { mockApiCallToFetchSessions, Session } from '../../data';
import './traningSesionTable.css'
import grassBackground from '../../images/grassbackground.jpg'


export const TraningSesionsTable: FC = () => {
    const [sesions, setSesions] = useState<Session[]>([])
    const [err, setError] = useState(null)

    useEffect(() => {
        asyncMockCallFuntion()
    }, []);

    const asyncMockCallFuntion = () => {
        return mockApiCallToFetchSessions()
            .then(response => setSesions(response))
            .catch(err => {
                console.log('%c  err==> ', 'color:red;font-size:12px;', err);
                setError(err)
                throw err;
            })
    }

    if (!sesions.length) {
        if (!err) {
            return <h1>Loading...</h1>
        }
        return (<h1>Error code, check URL...</h1>)
    }
    else {
        return (
            <>
                <img className='backgroundImage' src={grassBackground} alt='Backgroud' />
                <h1>Training sessions</h1>
                <table className="training_sessions_table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Duration</th>
                            <th>Rest Level</th>
                            <th>intensity Level</th>
                            <th>Favorite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sesions.map(row => {
                            return (
                                <tr key={row.id}>
                                    <td className='type'>{row.type}</td>
                                    <td>{row.duration}</td>
                                    <td>{row.restLevel}</td>
                                    <td>{row.type === 'training' ? row.intensityLevel : 'no data'}</td>

                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
