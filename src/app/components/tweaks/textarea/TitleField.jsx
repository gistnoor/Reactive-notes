import React from 'react';

export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title} = this.props;

        return(
            <input className="form-control" onChange={this.props.onChange} type="text" placeholder="Enter Title" value={title} />
        );
    }
}

