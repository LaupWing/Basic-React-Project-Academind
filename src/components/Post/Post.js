import React from 'react';
// withRouter adds the url props (from the nearest component with these url props) to the the this components otherwise we need to pass it as props

import {withRouter} from 'react-router-dom'
import './Post.css';

const post = (props) =>{
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
}

export default withRouter(post);