import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div>
            <div className={s.dialog}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default DialogItem;