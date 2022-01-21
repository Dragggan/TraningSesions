import React, { FC, } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './detailScreen.css'
import volleyball from '../../icons/volleyball.svg'
import chevronleft from '../../icons/chevron-left.svg'
import batterycharging from '../../icons/battery-charging.svg'
import batterycharging_green from '../../icons/batterycharging_green.svg'
import batery_charger_yellow from '../../icons/batery_charger_yellow.svg'
import ok from '../../icons/ok.svg'
import text from '../../icons/text.svg'
import topfit from '../../icons/topfit.svg'
import speedometer from '../../icons/speedometer.svg'
import intense from '../../icons/intense.svg'

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
    const navigate = useNavigate()

    const { type, date, startTime, endTime, duration } = state;

    const dynamic_class_type = () => {
        return type === 'training' ? 'details_type' : "details_type_recovery"
    }
    return type === 'training' ? (
        <div className="container_wrapper_green">
            <div className="icon_wrapper">
                <img src={chevronleft} alt="chevronleft" className='chevronleft' onClick={() => navigate('/')} />
                <img src={volleyball} alt="volleyball" className='volleyball' />
            </div>
            {/* headlines..... */}
            <div className='midle_section'>
                <h1 className='details_type'>{type}</h1>
                {/* todo format date */}
                <h2 className='time'>{date}</h2>
                <div className='time'>
                    <span >{startTime}</span> - <span>{endTime}</span>&#8226;<span className='duration_time'>{duration.toFixed()}</span></div>
            </div>
            {/* ---------------------------- */}
            <div className='batery_wrapper'>
                <img src={batery_charger_yellow} alt="batery_charger_yellow" className='batery_charger_yellow' />
                I felt  <img src={ok} alt="ok" className='ok' /> before the training session.
            </div>
            <div className='speed_wrapper'>
                <img src={speedometer} alt="speedometer" className='speedometer' /> I perceived the training as <img src={intense} alt="intense" className='intense' />
                The total load was 240.
            </div>
        </div >
    ) : (
        <div className="container_wrapper_blue">
            <div className="icon_wrapper">
                <img src={chevronleft} alt="chevronleft" className='chevronleft' onClick={() => navigate('/')} />
                <img src={batterycharging} alt="batterycharging" className='batterycharging_big' />
            </div>
            {/* headlines..... */}
            <h3 className={dynamic_class_type()}>{state.type}</h3>
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
