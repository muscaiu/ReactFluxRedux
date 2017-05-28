import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'

export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'Welcome'
        }
    }

    changeTitle(title) {
        this.setState({ title: title })
    }

    render() {
        const name = "Cris"
        return (
            <div>
                {/*bind this, otherwise it will not use the values from the Layout component*/}
                <Header
                    changeTitle={this.changeTitle.bind(this)}
                    title={this.state.title}
                    name={name} />
                <Footer />
            </div>
        )
    }
}
