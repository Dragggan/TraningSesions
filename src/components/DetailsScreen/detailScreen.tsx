import React, { FC, } from 'react'
import { useLocation, Link } from 'react-router-dom';
import './detailScreen.css'
import volleyball from '../../icons/volleyball.svg'
import chevronleft from '../../icons/chevron-left.svg'
import batterycharging from '../../icons/battery-charging.svg'
import batterycharging_green from '../../icons/batterycharging_green.svg'
import ok from '../../icons/ok.svg'
import text from '../../icons/text.svg'
import topfit from '../../icons/topfit.svg'

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

    // date: "2022-01-24"
    // description: "massage"
    // duration: 90
    // endTime: "20:30"
    // favorite: false
    // id: 5
    // restLevel: 1
    // startTime: "19:00"
    // type: "recovery"
    const { type, date, startTime, endTime, duration } = state;
    return type === 'training' ? (
        <div className="container_wrapper">
            <div className="icon_wrapper">
                <img src={chevronleft} alt="chevronleft" className='chevronleft' />
                <img src={volleyball} alt="volleyball" className='volleyball' onClick={() => <Link to='/' />} />
            </div>
            {/* headlines..... */}
            <h3 className='details_type'>{state.type}</h3>
            <h4>{date}</h4>
            <span>{startTime}</span>-<span>{endTime}</span>.<span>{duration}</span>
            {/* ---------------------------- */}
            <div>
                <img src={batterycharging} alt="batterycharging" className='batterycharging' />
                I felt  <img src={ok} alt="ok" className='ok' /> before the training session.
            </div>
        </div>
    ) : (
        <div className="container_wrapper">
            <div className="icon_wrapper">
                <img src={chevronleft} alt="chevronleft" className='chevronleft' />
                <img src={batterycharging} alt="batterycharging" className='batterycharging_big' />
            </div>
            {/* headlines..... */}
            <h3 className='details_type'>{state.type}</h3>
            <h4>{state.date}</h4>
            <span>{startTime}</span>-<span>{endTime}</span>.<span>{duration}</span>
            {/* ---------------------------- */}
            <div>
                <img src={text} alt="text" className='text' /> Warm bath.
                <span>
                    <img src={batterycharging_green} alt="batterycharging" className='batterycharging_green' />I felt</span><img src={topfit} alt="topfit" className='topfit' /> after the recovery session.

            </div>
        </div>
    )
}
