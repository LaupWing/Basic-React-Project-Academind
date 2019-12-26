import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
class Blog extends Component {
    state={
        auth: false
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* YOu can set custom activeClass / activeStyling by using activeClassName || activeStyle */}
                            <li><NavLink to="/posts">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* <Route path="/" render={()=> <Posts/>}/> */}
                    {/* <Route path="/" exact component={Posts}/> */}
                    <Route path="/posts" component={Posts}/>
                    {this.state.auth? <Route path="/new-post" component={NewPost}/>:null}
                    <Redirect from ='/' to='/posts'/>
                    {/* Id is below to prevent the new post from rendereing before id */}
                </Switch>
            </div>
        );
    }
}

export default Blog;