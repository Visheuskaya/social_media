import React from 'react';
import s from "../Dialogs.module.css";

type MessagesPropsType = {
    message: string
}
export const Messages = (props: MessagesPropsType) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    );
};

