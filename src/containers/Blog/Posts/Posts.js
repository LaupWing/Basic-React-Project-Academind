import React, {Component} from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
// import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

import './Posts.css'
class Posts extends Component{
    state={
        posts:[]
    }
    async componentDidMount(){
        try{
            const res = await axios.get('/posts')
            const posts = res
                .data
                .slice(0,4)
                .map(post=>{
                    return{
                        ...post,
                        author: 'Laup'
                    }
                })
            this.setState({
                posts
            })
        }catch(e){
            console.log(e)
        }
    }
    postSelectedHandler = (id)=>{
        this.props.history.push({pathname: '/posts/'+id})
    }
    render(){
        const posts = this.state.posts.map(post=>{
            return (
                // <Link 
                //     to={'/posts/'+post.id}
                //     key={post.id} 
                // >
                    <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        clicked={()=>this.postSelectedHandler(post.id)}
                    />
                // </Link>
            )
        })
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url+'/:id'} exact component={FullPost}/>
            </div>
        )
    }
}

export default Posts