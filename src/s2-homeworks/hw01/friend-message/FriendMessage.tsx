import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";


// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessageType) => {
    console.log('props', props)
    return (
        <div
            id={'hw1-friend-message-' + props.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.id}
                    // создаёт студент
                    src={props.user.avatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {props.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
