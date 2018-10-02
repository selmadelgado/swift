import React, { Component } from 'react'

class PageHome extends Component {

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        return (
            <div>
                <h1>Home Route</h1>
            </div>
        )
    }
}

export default PageHome;