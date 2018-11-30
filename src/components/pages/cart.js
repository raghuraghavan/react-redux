"use strict"
import React from 'react'
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, Well, Panel, Row, Cell, Col, Button, ButtonGroup, Label } from "react-bootstrap";
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCartItem } from '../../actions/cartActions'

class Cart extends React.Component {    

    constructor(){
        super()
        this.state = {show: false}
    }

    onDelete(_id){
        const currentBookToDelete = this.props.cart
        const indexToDelete = currentBookToDelete.findIndex(function (cart) {
            return cart._id === _id
        })        
        let cartAfterDelete =  [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)] 
        this.props.deleteCartItem(cartAfterDelete)
    }
    onIncrement(_id){
        this.props.updateCartItem(_id, 1)
    }

    onDecrement(_id,quantity){
        if(quantity > 1) {
            this.props.updateCartItem(_id, -1)
        }        
    }

    open(){
        this.setState({show : true})
    }

    handleClose(){
        this.setState({ show: false })
    }

    renderEmpty(){
        return (<div></div>)
    }

    renderCart(){
        const cartItemsList = this.props.cart.map(function (cartArr) {                    
            return (     
                <Panel>
                    <Row key={cartArr._id} style={{margin:'5px', padding:'auto'}}>
                        <Col xs={12} sm={4}>
                            <h6>{cartArr.title}</h6><span>    </span>
                        </Col>                            
                        <Col xs={12} sm={2}>
                            <h6>usd. {cartArr.price}</h6>
                        </Col>   
                        <Col xs={12} sm={2}>
                            <h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6><span>    </span>
                        </Col>   
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{minWidth:'200px', margin:'10px'}}>
                                <Button bsStyle='default' bsSize='small' onClick={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)}>-</Button>
                                <span>     </span>
                                <Button bsStyle='default' bsSize='small' onClick={this.onIncrement.bind(this, cartArr._id)}>+</Button>
                                <span>     </span>
                                <Button bsStyle="danger" bsSize='small' onClick={this.onDelete.bind(this, cartArr._id)}>Delete Item</Button>
                            </ButtonGroup>
                        </Col>                                                 
                    </Row>
                </Panel>           
            )
        }, this)
        return (
            <Well header="Cart" style={{marginBottom:'5px'}}>   
                <Panel>
                    <Panel.Heading style={{backgroundColor:'gray', }}>Cart</Panel.Heading>
                    <Panel.Body style={{ marginTop: '10px', marginBotton: '10px'}}>
                        {cartItemsList} 
                        <Row>
                            <Col xs={12}>
                                <h6> Total Amount : $ </h6> <h6>{this.props.cart.totalAmount}</h6>                          
                                <Button bsStyle="success" bsSize='small' onClick = {this.open.bind(this)}>
                                    PROCEED TO CHECKOUT
                                </Button>
                            </Col>
                        </Row> 
                        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                            <ModalHeader closeButton>
                                <ModalTitle>Thank You!!!</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <h6>
                                    Your Order has been placed !!!!!
                                    <p>You will recived an confirmation email about you Order placed... </p>
                                </h6>
                            </ModalBody>
                            <ModalFooter>
                                <Col xs={6}>
                                    <h6> total  $:</h6>
                                </Col>
                                <Button onClick={this.handleClose.bind(this)} bsSize='small' bsStyle='success'>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Panel.Body>              
                </Panel>            
            </Well>
        )
    }

    render() {
        if(typeof this.props.cart !== 'undefined' ) {     
            if (this.props.cart) {                  
                return this.renderCart()
            } 
        } else {
            return this.renderEmpty()
        }
    }
}

//mapStateToProps
function mapStateToProps(state){  
    return {
        cart: state.carts.carts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            deleteCartItem: deleteCartItem,
            updateCartItem : updateCartItem
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps )(Cart)