import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, editPost} from '../actions';

class EditPost extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            title:'',
            content:''
        }
      }

    componentDidMount(){
        this.props.fetchPosts().then((data)=>{
            this.setState({title : this.props.post[0].pTitle})
            this.setState({content : this.props.post[0].pContent})
        });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.editPost(this.props.match.params.id,this.state.title, this.state.content);
        }

    render(){
        if(!this.props.post){
            return <div> Loading... </div>
        }
    return (
            <div style={{margin:"5px"}}>
                <h3 style={{textAlign:"center"}}>Edit Your Blog</h3>
               
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field" >
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
                </form>
            </div>
    )
    } 
};

const mapStateToProps = (state,ownProps)=>{
    if (ownProps && state.blogs) {
        return {
          post: state.blogs.filter((item) => item._id == ownProps.match.params.id),
        };
      }
}
export default  connect(mapStateToProps, {fetchPosts, editPost}) (EditPost)