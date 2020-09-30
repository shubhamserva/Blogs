import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class DisplayPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost(){
    if(this.props.isSignedIn){
    const { pTitle, pContent } = this.props.post[0];
    return (
      <div style={{margin:"5px"}}>
        <h1 className="title" style={{textAlign: 'center'}}>{pTitle}</h1>
        <h3 style={{padding: '20px', border: '1px solid'}}>{pContent}</h3>
      </div>
    )
  }
}

  render() {
    if (!this.props.post) {
      return <div> Loading... </div>;
    }

    
    return (
          <div> 
            {this.renderPost()}
          </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps && state.blogs) {
    return {
      post: state.blogs.filter((item) => item._id == ownProps.match.params.id),
      isSignedIn: state.isSignedIn
    };
  }
}; 

export default connect(mapStateToProps, { fetchPosts })(DisplayPost);
