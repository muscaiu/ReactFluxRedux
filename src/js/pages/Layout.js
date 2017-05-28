import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'

export default class Layout extends React.Component {
    render() {
        const title = "Welcome"
        const name = "Cris"
        return (
            <div>
                <Header title={title} name={name} />
                <Footer />
            </div>
        )
    }
}
