import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src={'#'}/>
        </div>
        <div>Ava + description</div>
        <div>
            My posts
            <div>
                New Post
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
            </div>
        </div>
    </div>
};

export default Profile;