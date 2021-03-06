import React from 'react';
import {Panel, PanelGroup, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import NoteDescription from './NoteDescription';

export default class NoteItem extends React.Component{
	constructor() {
		super();
        this.state = {
            open:true         
        };	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.hideNotes = this.hideNotes.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		const { deleteNote } = this.props;
		const noteId = this.props.note.id;

		deleteNote(noteId);
	}

	hideNotes(e) {
		e.preventDefault();
		this.setState({
		    open: !this.state.open
		});
	}

	render() {
		const {note} = this.props;
		const showHide = this.state.open ? 'Hide' : 'Show';
		const tooltip = (
			<Tooltip id="tooltip">Your note will be <strong>deleted</strong> permanently.</Tooltip>
			);
		return(
			<div className="panel panel-info">
				
				<hr />
				<PanelGroup>
					<h3>
						<form className="inline">
							<Panel header={note.name} bsStyle="primary" onClick={this.hideNotes}>
								<Button className="onright" bsStyle="link">{showHide}</Button>
							</Panel>
						</form>
					</h3>
					<Panel collapsible expanded={this.state.open}>
						{note.description.length > 0 ? <NoteDescription description={note.description} /> : '' } 
					</Panel>
					<hr/>
					
					<form className="form-inline" onSubmit={this.handleSubmit}>
					    <OverlayTrigger placement="right" overlay={tooltip}>
							<Button type="submit" bsSize="xsmall" bsStyle="warning">Delete</Button>
						</OverlayTrigger>
					</form>

				</PanelGroup>
				
			</div>
		);
	}
}
