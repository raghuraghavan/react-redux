'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';
import { Well, Panel, Grid, Col, Row } from 'react-bootstrap';

import BookItem from './bookItem';
import BookForm from './booksForm';
import Cart from './cart'
// import ErrorBoundary from './errorBoundary'

class BooksList extends Component {
	componentDidMount() {
		// Dispatch an action
		this.props.getBooks();
	}

	render() {
		const booksList = this.props.books.map(function(booksArr) {
			return (
				<Col xs={12} sm={6} md={4} key={booksArr._id}>
					<BookItem
						_id={booksArr._id}
						title={booksArr.title}
						description={booksArr.description}
						price={booksArr.price}
					/>
				</Col>
			);
		});
		return (
			<Well>
				<Panel>
					<Grid>
						<Row>
							{/* <ErrorBoundary> */}
							{
								this.props.cart.length !== 0 ? <Cart /> : ''
							}								
							{/* </ErrorBoundary> */}
						</Row>
						<Row style={{ marginTop: '15px' }}>
							<Col xs={12} sm={6}>
								{/* <ErrorBoundary> */}
									<BookForm />
								{/* </ErrorBoundary> */}
							</Col>
							{booksList}
						</Row>
					</Grid>
				</Panel>
			</Well>
		);
	}
}

function mapStateToProps(state) {
	return {
		books: state.books.books,
		cart: state.carts.carts
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			getBooks: getBooks
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
