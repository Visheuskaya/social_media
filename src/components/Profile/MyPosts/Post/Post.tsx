import React from 'react';
import s from './Post.module.css'

type PropsType = {
    message: string
    likeCount: string
}
const Post = (props: PropsType) => {
    return <div>
            <div className={s.item}>
                <img src={'#'} alt={'#'}/>
                {props.message}
                {props.likeCount}
            </div>
        </div>
};

export default Post;