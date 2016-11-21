import React from 'react';
import AddNoteItem from './AddNoteItem';
import NoteList from './NoteList';

export default class Notes extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			note: {}
		};
		this.addNoteItem = this.addNoteItem.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.deleteAllNote = this.deleteAllNote.bind(this);
	}

	updateNote(note) {
		this.setState({
		    note
		});
	}

	addNoteItem(newNote) {
		const { note } = this.state;
		note[newNote.id] = newNote;
		this.updateNote(note);
	}

	deleteNote(noteId) {
		const { note } = this.state;
		delete note[noteId];
		this.updateNote(note);
	}

	deleteAllNote() {
		this.updateNote({});
	}

	render() {
		const notes = this.state.note;
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<AddNoteItem addNoteItem={this.addNoteItem} />
					</div>
					<div className="col-sm-6">
						<NoteList 
							notes={notes}
							deleteNote={this.deleteNote}
							deleteAllNote={this.deleteAllNote} />
					</div>
				</div>
			</div>
		);
	}
}