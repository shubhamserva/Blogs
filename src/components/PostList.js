import React from 'react';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';

class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
  }

  renderEdit(post){
    return (
        <div className="right floated content">
            <Link 
            to = {`/edit/${post._id}`}
            className="ui button primary">
                Edit    
            </Link>
        </div>
    )   
  }

    renderList(){
        if(this.props.posts && this.props.isSignedIn){
        return this.props.posts.map(post =>{
            return (
                <div className="item" key = {post._id}>

                    <div className="content">
                        <Link to = {`/display/${post._id}`} className="">
                        {post.pTitle}
                        </Link>     
                        <div className="description" style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
                            {post.pContent}
                            {this.renderEdit(post)}
                        </div>
                    </div>
                </div>
            )
        })
    }
        else{
            return (
                <div>
                    <h1 style={{textAlign: 'center'}}>Please Login !!!</h1>
                </div>
            )
        }
}
    renderCreate(){
        if(this.props.posts && this.props.isSignedIn){
            return (
                <Link to={"/create"} className="ui button primary" >
                Create Blog
            </Link>
            )
        }

    }

    render(){
        return (
                <div className="ui container">
                    <h2 style={{textAlign: 'center'}}>The Knowledge Blogs</h2>
                    <div className="ui celled list">
                        {this.renderList()}
                    </div>
                    <div style={{textAlign: 'right'}}> 
                        {this.renderCreate()}
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state) =>{
    //console.log("stste is",state)
    return {
        posts: state.blogs,
        isSignedIn: state.isSignedIn
    }
}

export default connect (mapStateToProps,{fetchPosts}) (PostList)