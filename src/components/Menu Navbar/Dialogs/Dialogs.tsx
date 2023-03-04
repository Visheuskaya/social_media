import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Message";



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Valera' id= '1' />
                <DialogItem name='Varvara' id= '2' />
                <DialogItem name='Natallia' id= '3' />
                <DialogItem name='Viktor' id= '4' />
                <DialogItem name='Igor' id= '5' />
            </div>
            <div className={s.messages}>
               <Messages message={'Hello'} />
               <Messages message={'How are you'} />
               <Messages message={'Im ok,thank you'} />
            </div>
        </div>
    );
};

export default Dialogs;