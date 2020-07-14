import React from 'react';
import BooksList from './book_list';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
	return(
		<div>
			<header>
			<Container>
				<Row>
					<Col md={3} xs={12} className="sub_header">
						<p>Hello Riti !</p>
					</Col>
					<Col md={6} xs={9} className="search_bar">
						<Form inline>
					      <FormControl type="text" placeholder="Search" className="input_box mr-sm-2" />
					      <Button variant="outline-success">Search</Button>
					    </Form>
					</Col>
					<Col md={3} xs={3} className="logout">
						<button >LogOut</button>
					</Col>
				</Row>
			</Container>
			</header>
			<div className="main_body">
				<BooksList/>
			</div>
		</div>
	)
}

export default Home;