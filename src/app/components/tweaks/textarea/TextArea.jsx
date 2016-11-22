import React from 'react';

export default class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {textval} = this.props;

        return(
            <textarea className="form-control" rows="15" name="description" type="text" placeholder="Enter note description" onChange={this.props.onChange} value={textval} />
        );
    }
}
