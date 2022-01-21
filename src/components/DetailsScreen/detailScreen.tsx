import React, { FC, useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import './detailScreen.css'
import volleyball from '../../icons/volleyball.svg'
import chevronleft from '../../icons/chevron-left.svg'

interface CustomizedState {
    id: string
    date: string
    description: string
    duration: number
    endTime: string
    favorite: false
    restLevel: 1
    startTime: string
    type: string

}

export const DetailsScreen: FC = () => {
    const location = useLocation();
    const state = location.state as CustomizedState;
    console.log('%c  location.state==> ', 'color:red;font-size:12px;', location.state);

    // if (state) {
    //     return (
    //         <>
    //             <h1>{state.id}</h1>
    //             <h1>{state.date}</h1>
    //             <h1>{state.description}</h1>
    //             <h1>{state.duration}</h1>
    //             <h1>{state.favorite}</h1>
    //             <nav>
    //                 <Link to="/">go back</Link>
    //             </nav>
    //         </>
    //     )
    // }
    // return (
    //     <h2>error caling state</h2>
    // )
    return (
        <div className="container_wrapper">
            <div className="icon_wrapper">
                <img src={chevronleft} alt="chevronleft" className='chevronleft' />
                <img src={volleyball} alt="volleyball" className='volleyball' />
            </div>

        </div>
    )
}
