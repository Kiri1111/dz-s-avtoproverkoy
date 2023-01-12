import React from 'react'
import {AffairType} from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)   // need to fix
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div
            id={'hw2-affair-' + props.affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {/*создаёт студент*/}
                <div><span>{props.affair.name}</span></div>
                {/**/}
            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {/*создаёт студент*/}
                <div>{props.affair.priority}</div>
                {/**/}
            </div>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                onClick={() => deleteCallback(props.affair._id)} // need to fix

            >
                {/*текст кнопки могут изменить студенты*/}
                Del.
                {/**/}
            </button>
        </div>
    )
}

export default Affair
