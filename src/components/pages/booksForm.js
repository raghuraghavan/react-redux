'use strict';
import React from 'react';
import { Well, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBooks } from '../../actions/booksActions';
import { Button, FormControl, ControlLabel, FormGroup, InputGroup, Form } from "react-bootstrap";

const styletype = {
	background: 'lightBlue',
	border: '8px',
	color: 'yellow'
};

const buttonStyle = {
	backgroundColor: '#337ab7',
	display: 'inline - block',
	padding: '6px 12px',
	fontsize: '14px',
	fontweight: 400,
	textalign: 'center',
	whitespace: 'nowrap',
    verticalalign: 'middle',
    color: '#fff',
    bordercolor: '#2e6da4',
    cursor: 'pointer',

};

class BooksForm extends React.Component {

	constructor() {
		super();
		this.state = {_id:3,  title: '', description: '', price: '' };
    }
    
    // manuplating state
	getTitle = (e) => {
		this.setState({ title: e.target.value });
	};
	getDescription = (e) => {
		this.setState({ description: e.target.value });
	};
	getPrice = (e) => {
		this.setState({ price: e.target.value });
	};

    // form submit event
	handleSubmit = (e) => {
		e.preventDefault();
        this.setState({ _id: this.state._id + 1 });
        console.log(this.state._id);
        
		const book = [ this.state ];
		if (this.state !== null && this.state.title !== null && this.state.description !==null) {
			this.props.addBooks(book);
		}
    };

    // length valdiation
    validateTitlelength = () =>{
        const length = this.state.title.length;
        if (length > 9) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    validateDescriptionlength = () => {
        const length = this.state.description.length;
        if (length > 9) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    validatePrice = () =>{
        const cost = parseFloat(this.state.price)
        if (cost > 0.1) return 'success';
        else if (length > 0) return 'error';
        return null;
    }

	render() {
		return (
            <Well style={{ width: '100%' }}>
                <Panel style={{ width: '80%', marginTop : 'auto', marginBottom: 'auto', marginRight : 'auto', marginLeft: 'auto'}}>                
                    <Panel.Heading style={{ backgroundColor: 'gray', }}>
                    Book Form
                </Panel.Heading>
                <Panel.Body>
                    <Form horizontal style={{ marginLeft : '41px', marginTop : '2px', marginBottom : '25px' }} onSubmit={this.handleSubmit}>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.validateTitlelength()}
                        >
                            <ControlLabel>Enter Book's Name</ControlLabel>
                            <FormControl
                                type="text"                                
                                placeholder="Enter Book Title"
                                onChange={this.getTitle}
                                style={{width: '85%'}}
                            />
                            <FormControl.Feedback />                           
                        </FormGroup>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.validateDescriptionlength()}
                        >
                            <ControlLabel>Enter Book Description</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Book Title"
                                onChange={this.getDescription}
                                style={{ width: '85%' }}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.validatePrice ()}
                        >
                            <ControlLabel>Enter Book's Price</ControlLabel>
                            <InputGroup style={{ width: '85%' }}>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl 
                                    type="text" 
                                    placeholder = "Enter Book's Price"
                                    onChange={this.getPrice}
                                    
                                    />
                                {/* <InputGroup.Addon>.00</InputGroup.Addon> */}
                            </InputGroup>
                        </FormGroup>						
                        <Button bsStyle='primary' bsSize="small" onClick={this.handleSubmit}>Save book</Button>
                    </Form >
                    </Panel.Body>
				</Panel>
			</Well>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addBooks }, dispatch);
}

export default connect(null, mapDispatchToProps)(BooksForm);
