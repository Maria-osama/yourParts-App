import React, { Component } from 'react';
import classes from './Blog.module.css';
import { Route , Link, Switch } from 'react-router-dom';

import Posts from '../Posts/Posts';
import Settings from '../../components/Settings/Settings';
import Compare from '../Compare/Compare';
import FullPost from '../../components/FullPost/FullPost';


class Blog extends Component {
    state = {
        posts : []
    }
    componentDidMount(){
        var data = require('../../db.json');
        this.setState({
            posts : data
        })

    }
    render() {
        return (
           
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li className={classes.navTab}><Link to="/">Explore</Link></li>
                            <li className={classes.navTab}><Link to="/compare">Compare</Link></li>
                            <li className={classes.navTab}><Link to="/settings">Settings</Link></li>
                        </ul>
                    </nav> 
                </header>
                <Switch>
               <Route path="/" exact component={() => <Posts posts = {this.state.posts}/>}/>
               <Route path="/compare" exact component={()=> <Compare posts = {this.state.posts}/>}/>
               <Route path="/settings" exact component={Settings}/>
               <Route
                    path="/newpage/activity/viewcontroller"
                    exact
                    component={()=> <FullPost posts = {this.state.posts}/>} />
               </Switch>
            </div>
           
        );
    }
}
export default Blog;
