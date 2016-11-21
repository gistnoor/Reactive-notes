import React from 'react';
import classNames from 'classnames';

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
		const deleteAllButton = classNames('btn', 'btn-xs', 'btn-danger');
		return(				
			<form onSubmit={this.handleSubmit} className="form-inline">
				<button className={deleteAllButton} type="submit">Delete all</button>
			</form>
		);
	}
}
