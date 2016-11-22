import React from 'react';
import TextShow from './tweaks/textarea/TextShow';
import uuid from 'node-uuid';
export default class AddNoteItem extends React.Component{
	constructor() {
		super();
		this.state = {
			previewText: '',
			previewTitle: ''

		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.previewText = this.previewText.bind(this);
		this.previewTitle = this.previewTitle.bind(this);
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

		this.setState({
			previewText: '',
			previewTitle: ''
		});
	}

	previewText(e) {
		this.setState({
		    previewText: e.target.value
		});
	}

	previewTitle(e) {
		this.setState({
		    previewTitle: e.target.value
		});
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<h3 className="page-header">New Notes</h3>
                <div className="form-group">
                    <label htmlFor="noteId">
                        Note Title <span className="notespan">*</span>
                    </label>
      
                 <input value={this.state.previewTitle} ref='name' className="form-control" type="text" onChange={this.previewTitle} placeholder="Enter Title" />

                </div>
				<div className="form-group">
		        	<label htmlFor="noteDescription">Description</label>
		        	 <textarea id="noteDescription" onChange={this.previewText} value={this.state.previewText} className="form-control" rows="15" ref="description" name="description" type="text" placeholder="Enter note description"></textarea>
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
				<TextShow title={this.state.previewTitle}
						text={this.state.previewText} />
				<br/>
				<button className="btn btn-primary" type="submit">Submit</button>
				<button className="btn btn-link" type="reset">Cancel</button>
			</form>
		);
	}
}
