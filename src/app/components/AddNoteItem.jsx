import React from 'react';
import TextEditor from './tweaks/textarea/TextEditor';
import uuid from 'node-uuid';
export default class AddNoteItem extends React.Component{
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	
		const note = {
			id: uuid.v4(),
			date: new Date(),
			name: this.refs.name.value.trim(),
			description: this.refs.description.value.trim(),
			tags: this.refs.tags.value.trim()
		};

		this.props.addNoteItem(note);
	}


	render () {
		return (
			<form onSubmit={this.handleSubmit}>
					<TextEditor />
				<hr />
				<button className="btn btn-primary" type="submit">Submit</button>
				<button className="btn btn-link" type="reset">Cancel</button>
			</form>
		);
	}
}


