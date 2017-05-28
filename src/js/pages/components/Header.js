import React from 'react'

import Title from './Header/Title'

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value
        this.props.changeTitle(title)
    }
    render() {
        return (
            <div>
                {/*props is comming from Layout*/}
                <Title title={this.props.title} name={this.props.name} />
                <input onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
