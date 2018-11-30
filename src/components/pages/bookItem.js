import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Well, Button, Panel } from 'react-bootstrap';
import { addToCart, updateCartItem } from '../../actions/cartActions';

class BookItem extends React.Component {

	handleCart() {		
		const book = [...this.props.cart, {
			_id: this.props._id,
			title: this.props.title,
			description: this.props.description,
			price: this.props.price,
			quantity : 1
		}]		
		if(this.props.cart.length > 0){
			// CART is EMPTY
			let _id = this.props._id
			let cartIndex = this.props.cart.findIndex(function(cart){
				return cart._id === _id
			})
			if (cartIndex === -1) {
				this.props.addToCart(book)
			} else {
				// we need to update quqntity
				this.props.updateCartItem(_id, 1)
			}
		} else {
			this.props.addToCart(book);				
		}
	}

	render() {
		return (
			<Well style={{ width: 'auto', margin:'auto' }}>
				<Panel style={{ width: 'auto', margin: 'auto' }}>
					<Row
						style={{
							width: '80%',
							marginTop: 'auto',
							marginBottom: 'auto',
							marginRight: 'auto',
							marginLeft: 'auto'
						}}
					>
                        <Col xs={12} style={{
                            width: '80%',
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: 'auto',
                            marginLeft: 'auto'
                        }}>
							<h6>{this.props.title}</h6>
							<h6>{this.props.description}</h6>
							<h6>{this.props.price}</h6>
							<Button 
								bsStyle="primary" 
								onClick={this.handleCart.bind(this)}
							>
								Buy Now
							</Button>
						</Col>
					</Row>
				</Panel>
			</Well>
		);
	}
}

function mapStateToProps(state) {
	return {
		cart: state.carts.carts
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			addToCart: addToCart,
			updateCartItem : updateCartItem
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
