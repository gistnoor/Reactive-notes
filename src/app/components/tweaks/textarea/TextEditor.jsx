import React from 'react';
import TextShow from './TextShow';
import TextArea from './TextArea';
import TitleField from './TitleField';

export default class Editor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text : ''
        };
        this.updateTextarea = this.updateTextarea.bind(this);
        this.updateTitleField = this.updateTitleField.bind(this);
    }
    updateTitleField(e) {
        this.setState({
            title: e.target.value
        });
    }
    updateTextarea(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return(
            <div>
                <h3 className="page-header">New Notes</h3>
                <div className="form-group">
                    <label htmlFor="noteId">
                        Note Title <span className="notespan">*</span>
                    </label>
                    <TitleField id="noteId" ref="name" onChange={this.updateTitleField} />
                </div>
                <div className="form-group">
                    <label htmlFor="noteDescription">
                        Note description <span>*</span>
                    </label>
                    <TextArea id="noteDescription" 
                        ref="description" 
                        onChange={this.updateTextarea} />
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
                <TextShow 
                    title={this.state.title}
                    text={this.state.text} />
            </div>
        );
    }
}
