import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import classes from './Posts.module.css';
import { ThemeContext } from '../../Context/theme-context';


class Posts extends Component {
    state = {
        per: 10,
        page: 1,
        totalPages: null,
        scrolling: false,
        selectedPostId: 0
    }

    componentWillMount() {

        if (ThemeContext._currentValue.manualScrolling == false) {
            window.addEventListener('scroll', () => this.handleScroll());
        }

    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    handleScroll = () => {

        const wrappedElement = document.getElementById('PostsContainer');
        if (this.isBottom(wrappedElement)) {
            this.loadMore()

        }

    }

    loadMore = () => {
        this.setState(prevState => ({
            per: prevState.per + 5,
            scrolling: true
        }))
    }
    postClickHandler = (name) => {
        localStorage.setItem("postName", name)
        ThemeContext._currentValue.selectedPostName = name;
    }
    render() {

        let newData = this.props.posts.slice(0, this.state.per).map(record => {
            return <Post
                key={record.id}
                postName={record.name}
                clicked={() => this.postClickHandler(record.name)}
            />

        });

        return (
            <ThemeContext.Provider>
                <div className={classes.container}>
                    <h5 className={classes.title + " text-center"}>SAMSUNG devices</h5>
                    <section id="PostsContainer" className="sec">
                        {newData}
                    </section>
                    <button
                        onClick={this.loadMore}
                        className={classes.loadMore}
                        style={{ display: ThemeContext._currentValue.manualScrolling ? "block" : "none" }}>Load More</button>
                </div>
            </ThemeContext.Provider>
        );
    }
}
export default Posts;