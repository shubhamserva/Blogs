import React from 'react';
import {connect } from 'react-redux';
import {signIn, signOut} from './actions'

class GoogleAuth extends React.Component{


    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'284511243874-8oc5j9cf7h8b1cnntms0efnnifk6kcur.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }
        if(this.props.isSignedIn){
            console.log(this.auth.currentUser.l2.value.rt.Ad);
            return (
            <div>
                <span style={{text:"bold"}}><strong>Welcome : {this.auth.currentUser.l2.value.rt.Ad}</strong></span>
                <button style={{marginLeft:"7px"}} onClick={this.onSignOutClick} className="ui google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            </div>
            )
        }
        else{
            return <div>
                  <button onClick={this.onSignInClick} className="ui google button">
                    <i className="google icon"/>
                    Sign In
                </button>
            </div>
        }
    }
    render(){
        return(
            <div>
               {this.renderAuthButton()}
            </div>
        )
    }
    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    }
    onSignInClick = ()  =>{
        this.auth.signIn();
    }
    onSignOutClick = ()  =>{
        this.auth.signOut();
    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn: state.isSignedIn}
}

export default connect(mapStateToProps,{signIn, signOut}) (GoogleAuth);