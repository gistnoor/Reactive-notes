import React from 'react';

import NoteItem from './NoteItem';
import NoteHeader from './NoteHeader';
import EmptyNote from './tweaks/note/EmptyNote';


export default class NoteList extends React.Component{
	constructor(props) {
		super(props);

	}

	getNotesId(notes) {
		return Object.keys(notes);
	}

	createNoteElements(notes) {
		let note;
		const { deleteNote } = this.props;
		return(
			this.getNotesId(notes)
				.map(noteId => {
					note = notes[noteId];
					return(<NoteItem note={note} deleteNote={deleteNote} key={note.id} />);
				}).reverse()
		);
	}



	render() {
		const {notes, deleteAllNote} = this.props;
		const noteItemElement = this.createNoteElements(notes);
		return(
			<div>
				<h3 className="page-header">
					<NoteHeader deleteAllNote={deleteAllNote} />
				</h3>
				<ul className="note-lists">
					{noteItemElement.length > 0 ? noteItemElement : <EmptyNote />}
				</ul>


			</div>
		);
	}
}	
