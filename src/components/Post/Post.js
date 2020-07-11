import React from 'react';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';



const Post = (props) => {
    return (
       <div>
            <Link to="/newpage/activity/viewcontroller">    
                <div>
                    <h3 className={classes.post} onClick={props.clicked}>
                        {props.postName}
                    </h3>
                </div>
            </Link>     
            </div>
    );

}
export default Post;