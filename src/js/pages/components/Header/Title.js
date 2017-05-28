import React from 'react'

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>Title</h1>
                {/*props is coming from Header*/}
                <h2>{this.props.title} - {this.props.name}</h2>
            </div>
        )
    }
}
