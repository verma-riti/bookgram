import React, {useState, useEffect} from 'react';
import BooksList from './book_list';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import bookDetails from '../json/book.json';
import Pagination from "react-js-pagination";


function Home() {
	const [activePage, setActivePage] = useState(1)
  	const book_len = bookDetails.length;

  const handlePageChange =(pageNumber)=> {
  	console.log("page = ", pageNumber);
    setActivePage(pageNumber);
  }
  	return(
		<div>
			<header>
				<Container>
					<Row>
						<Col md={3} xs={12} className="sub_header">
							<p>Hello Riti !</p>
						</Col>
						<Col md={6} xs={9} className="search_bar">
							<span className="dropdown">
								<DropdownButton id="dropdown-item-button" title="Search by">
							        <Dropdown.Item eventKey="title">Title</Dropdown.Item>
								    <Dropdown.Item eventKey="year">Year</Dropdown.Item>
								    <Dropdown.Item eventKey="author">Author</Dropdown.Item>
								    <Dropdown.Item eventKey="category">Category</Dropdown.Item>
							      </DropdownButton>
							</span>
							<span className="search_form_input">
								<Form inline>
							      <FormControl type="text" placeholder="Search" className="input_box mr-sm-2" />
							      <Button variant="outline-success">Search</Button>
							    </Form>
						    </span>
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
			<footer>
				<Pagination
		          activePage={activePage}
		          itemsCountPerPage={10}
		          totalItemsCount={450}
		          pageRangeDisplayed={20}
		          onChange={handlePageChange}
		      	/>
			</footer>
		</div>
	)
}

export default Home;