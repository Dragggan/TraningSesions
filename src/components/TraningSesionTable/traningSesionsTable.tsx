import { FC, useState, useEffect } from 'react'
import { mockApiCallToFetchSessions, Session } from '../../data';
import './traningSesionTable.css'
import grassBackground from '../../images/grassbackground.jpg'
import heart from '../../icons/heart.svg'
import { useNavigate } from "react-router-dom"


type SesionType = "training" | "recovery";

const dynamicClassType = (value: SesionType): string => {
    return value === 'training' ? 'traningClass' : 'recoveryClass'
}

export const TraningSesionsTable: FC = () => {
    const [sesions, setSesions] = useState<Session[]>([])
    const [err, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        asyncMockCallFuntion()
    }, []);

    // simulating API call
    const asyncMockCallFuntion = () => {
        return mockApiCallToFetchSessions()
            .then(response => {
                let addedFavorite = response.map(row => ({ ...row, favorite: false }))
                setSesions(addedFavorite)
            })
            .catch(err => setError(err))
    }

    const changeFavorites = (value: number) => {
        // todo maybe splice insted!?
        let arrr: Session[] = [...sesions];
        let filteredArray: Session[] = arrr.filter(({ id }) => id !== value);
        let filtedElement = arrr.filter(({ id }) => id === value)[0];
        filtedElement.favorite = !filtedElement.favorite;
        filteredArray.unshift(filtedElement)
        setSesions(filteredArray)
    }

    if (!sesions.length) {
        if (!err) {
            return <h1>Loading...</h1>
        }
        return (<h1>Error code, check URL...</h1>)
    }
    return (
        <>
            <img className='backgroundImage' src={grassBackground} alt='Backgroud' />
            <h1 className='headline'> Training sessions</h1>
            <div className="table_wrapper">
                {/* todo sticky header */}
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
                                // todo routing funtionality needss to be for entire row, not only on "Type" cell
                                <tr key={row.id} className={dynamicClassType(row.type)}>
                                    <td className='type' onClick={() => navigate('/detailsscreen', { state: row })}>
                                        {row.type}</td>
                                    {/* todo maype sufix Hours, minutes.... */}
                                    <td>{row.duration.toFixed()}</td>
                                    <td>{row.restLevel}</td>
                                    <td>{row.type === 'training' ? row.intensityLevel : 'no data'}</td>
                                    <td onClick={() => changeFavorites(row.id)}>
                                        {row.favorite
                                            ? <img src={heart} className='favorite' alt='like' /> : ''}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
