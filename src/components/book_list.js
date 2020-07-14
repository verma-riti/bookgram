import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bookDetails from '../json/book.json';

function BookList() {
  return (
    <div className="mt75">
      <Container>
        <Row>
          {bookDetails.map((book,i) =>{
                return(
                  <Col md={6} key={i}>
                    <Row className="book_panel"> 
                      <Col md={3} xs={4} className="book_panel_left">
                        <div className="book_img">
                          <img src={book.thumbnailUrl}/>
                        </div>
                      </Col>
                      <Col md={9} xs={8} className="book_panel_right">
                         <h5>{book.title}</h5>
                        
                          <p>Authors: {book.authors.map(author =>{
                            return(<small>{author}, &nbsp;</small>)
                          })}</p>
                          <p>Categories: {book.categories.map(category =>{
                            return(<small>{category}, &nbsp;</small>)
                          })}
                         </p>
                          <p>Isbn: <small>{book.isbn}</small> &nbsp;&nbsp;Pages: <small>{book.pageCount}</small> &nbsp; &nbsp;Status: <small>{book.status}</small></p>
                         
                      </Col>
                    </Row>
                  </Col>
                )
              })}
        </Row>
      </Container>
    </div>
  )
}

export default BookList;