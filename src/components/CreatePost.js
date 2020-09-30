import React  from 'react'
import {connect } from 'react-redux';
import {createPosts} from '../actions'
import {Link} from 'react-router-dom';


class CreatePost extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
        }
    }
    

    onFormSubmit = event => {
    event.preventDefault();
    if(this.state.title){
        this.props.createPosts(this.state.title, this.state.content);
    }
    
    }

    renderCreate(){
        if(this.props.isSignedIn){
        return (
        <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
            <label>Enter Title</label>
            <input type="text" 
            onChange={(e)=> this.setState({ title:e.target.value})} 
            onClick={this.OnInputClick}
            value ={ this.state.title}  ></input>
            </div>

            <div className="field">
            <label>Enter Content</label>
            <textarea type="text" 
            onChange={(e)=> this.setState({ content:e.target.value})} 
            onClick={this.OnInputClick}
            value ={ this.state.content}  >
            </textarea>
            </div>
            <button className="ui button primary" >Submit</button>
            <Link to={"/"}>
            <button  className="ui button primary" >Cancel</button>
            </Link>
        </form>
    </div>
        )}}
    render(){

        return(
            <div> 
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.isSignedIn
    }
}



export default connect(mapStateToProps,{createPosts})  (CreatePost)