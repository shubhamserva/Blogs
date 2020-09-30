import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import DisplayPost from "./DispayPost";
import EditPost from "./EditPost";
import history from "../history";

function App() {
  return (
  
    <Router history={history}>
      <Header/>
      <Switch>
        <Route exact path="/create" exact component={CreatePost} />
        <Route path="/display/:id" exact component={DisplayPost} />
        <Route path="/edit/:id" exact component={EditPost} />
        <Route path="/" exact component={PostList} />

      </Switch>
    </Router>
 
  );
}

export default App;
