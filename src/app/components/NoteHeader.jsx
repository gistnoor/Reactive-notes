import React from 'react';

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

		return(
			<form onSubmit={this.handleSubmit} className="form-inline">
				<button className="btn btn-xs btn-danger" type="submit">Delete all</button>
			</form>
		);
	}
}

