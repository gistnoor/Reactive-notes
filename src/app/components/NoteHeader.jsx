import React from 'react';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';

export default class NoteHeader extends React.Component{
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const { deleteAllNote } = this.props;

		deleteAllNote();
	}

	render() {
		const tooltip = (
	<Tooltip id="tooltip">All notes will be <strong>deleted</strong> !!!.</Tooltip>
			);
		return(
			<form onSubmit={this.handleSubmit} className="form-inline">
				<OverlayTrigger placement="right" overlay={tooltip}>
					<Button type="submit" bsSize="xsmall" bsStyle="danger">Delete</Button>
				</OverlayTrigger>
			</form>
		);
	}
}

