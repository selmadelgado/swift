import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header';

class PageLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PageLayout;