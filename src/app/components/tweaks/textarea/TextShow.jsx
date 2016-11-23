import React from 'react';
import {Modal, ButtonToolbar, Button} from 'react-bootstrap';
export default class TextShow extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            text: '',
            title: '',
            titleError: ''
        };
        this.showMyNote = this.showMyNote.bind(this);
        this.hideMyNote = this.hideMyNote.bind(this);
    }

    showMyNote(e) {
        const showdown = require('showdown');
        const converter = new showdown.Converter();
        const mytext = converter.makeHtml(this.props.text);
        const myTitle = this.props.title;
        this.setState({
            show: true,
            text: mytext,
            title: myTitle
        }, () => this.validateText());
    }

    validateText() {
        if (this.title.length === 0) {
            this.setState({         
                titleError: "Title can't be blank"
            });
        }
    }

    hideMyNote() {
        this.setState({
            show: false
        });
    }

    render() {
       /* const markdown = {this.state.text} > 0 ? {this.stat.text} : {this.state.titleError};*/
       const showText = this.state.text;

        return(
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showMyNote}>
                    Preview
                </Button>
                <Modal
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
                {...this.props}
                show={this.state.show}
                onHide={this.hideMyNote}
                dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">
                            {this.state.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="text-area-show">
                            {showText}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.hideMyNote}>Close</Button>
                    </Modal.Footer>              
                </Modal>
            </ButtonToolbar>

        );
    }
}
