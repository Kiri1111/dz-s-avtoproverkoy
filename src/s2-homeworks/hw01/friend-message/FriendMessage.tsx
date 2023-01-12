import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type FriendMessagePropsType = {
    friendMessage0: MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.friendMessage0.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.friendMessage0.id}
                    // создаёт студент
                    src={props.friendMessage0.user.avatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.friendMessage0.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {props.friendMessage0.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.friendMessage0.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.friendMessage0.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.friendMessage0.message.time}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.friendMessage0.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
