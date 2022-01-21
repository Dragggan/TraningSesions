import React, { FC, useState, useEffect } from 'react'
import { mockApiCallToFetchSessions, Session } from '../data';


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
                <table className="seasion_table">
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3 Level</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>11</td></tr>
                        <tr><td>22</td></tr>
                        <tr><td>33</td></tr>
                    </tbody>
                </table>
            </>
        )
    }
}
