import React from 'react';
import classNames from 'classnames';
import NoteDescription from './NoteDescription';

export default class NoteItem extends React.Component{
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		const { deleteNote } = this.props;
		const noteId = this.props.note.id;

		deleteNote(noteId);
	}

	render() {
		const {note} = this.props;
		const panelClass = classNames('panel', 'panel-primary');
		const deleteButton = classNames("btn", "btn-warning", "btn-xs");
		return(			
			<div className={panelClass}>
				<div className="panel-heading">
					{note.name}
				</div>
					{note.description.length > 0 ? <NoteDescription description={note.description} /> : ''}
				<div className="panel-footer">
					<form className="form-inline" onSubmit={this.handleSubmit}>
						<button type="submit" className={deleteButton}>Delete</button>
					</form>
				</div>
			</div>
		);
	}
}
