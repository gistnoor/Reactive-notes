import React from 'react';
import {Modal, ButtonToolbar, Button} from 'react-bootstrap';
export default class TextShow extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showMyNote = this.showMyNote.bind(this);
        this.hideMyNote = this.hideMyNote.bind(this);
    }

    showMyNote() {
        this.setState({
            show: true
        });
    }

    hideMyNote() {
        this.setState({
            show: false
        });
    }

    render() {
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
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="text-area-show">
                            {this.props.text}
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
