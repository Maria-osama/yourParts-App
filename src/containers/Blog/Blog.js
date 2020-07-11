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
       /* posts : [
            {id:1 , name:"Maria" , attr : ["attr1" , "attr2" , "attr3" , "attr4" , "attr5"]},
            {id:2 , name:"boules"},
            {id:3 , name:"jhkjdfhg"},
            {id:4 , name:"jhkjdfhg"},
            {id:5 , name:"jhkjdfhg"},
            {id:6 , name:"jhkjdfhg"},
            {id:7 , name:"jhkjdfhg"},
            {id:8 , name:"jhkjdfhg"},
            {id:9 , name:"jhkjdfhg"},
            {id:10 , name:"jhkjdfhg"},
            {id:11 , name:"jhkjdfhg"},
            {id:12 , name:"jhkjdfhg"},
            {id:13 , name:"jhkjdfhg"},
            {id:14 , name:"boules"},
            {id:15 , name:"boules"},
            {id:16 , name:"boules"},
            {id:17 , name:"boules"},
            {id:18 , name:"boules"},
            {id:19 , name:"boules"},
            {id:20 , name:"boules"},
            {id:21 , name:"boules"},
            {id:22 , name:"boules"},
            {id:23 , name:"boules"},
            {id:24 , name:"boules"},
            {id:25 , name:"boules"},
            {id:26 , name:"boules"},
            {id:27 , name:"boules"},
            {id:28 , name:"boules"},
            {id:29 , name:"boules"},
            {id:30 , name:"boules"},
            {id:31 , name:"boules"},
            {id:32 , name:"boules"},
            {id:33 , name:"boules"},
            {id:34 , name:"boules"},
            {id:35 , name:"boules"},
            {id:36 , name:"boules"},
            {id:37 , name:"boules"},
            {id:38 , name:"boules"},
            {id:39 , name:"boules"},
            {id:40 , name:"boules"},
            {id:41 , name:"7mada"},

        ]*/
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