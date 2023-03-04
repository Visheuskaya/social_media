import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://images.wallpaperscraft.com/image/single/forest_trees_fog_138688_2560x1440.jpg'  className={s.photo}/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;