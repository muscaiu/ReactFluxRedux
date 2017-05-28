import React from 'react'

import Title from './Header/Title'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                {/*props is comming from Layout*/}
                <Title title={this.props.title} name={this.props.name} />
            </div>
        )
    }
}
