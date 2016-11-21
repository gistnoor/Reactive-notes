import React from 'react';
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
				<h3 className="page-header">New Notes</h3>
				<div className="form-group">
					<label htmlFor="noteId">
						Note Title <span className="notespan">*</span>
					</label>
					<input type="text" 
						className="form-control" 
						id="noteId" 
						placeholder="Note Title"
						required
						ref="name" />
				</div>
				<div className="form-group">
					<label htmlFor="noteDescription">
						Note description <span>*</span>
					</label>
					<textarea className="form-control" 
						id="noteDescription" 
						rows="15" 
						placeholder="Enter note Description"
						required
						ref="description">
					</textarea>
				</div>
				<div className="form-group">
					<label htmlFor="noteTags">
						Tags
					</label>
					<input type="text" 
						className="form-control" 
						id="noteTags" 
						placeholder="Add Tag" 
						ref="tags" />
				</div>
				<hr />
				<button className="btn btn-primary" type="submit">Submit</button>
				<button className="btn btn-link" type="reset">Cancel</button>
			</form>
		);
	}
}


