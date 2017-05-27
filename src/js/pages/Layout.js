import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'

export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Will'
        }
    }

    render() {
        setTimeout(() => {
            this.setState({ name: 'Cris' })
        },2000)

        return (
            <div>
                <Header />
                {this.state.name}
                <Footer />
            </div>
        )
    }
}
