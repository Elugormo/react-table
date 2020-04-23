import React from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
function FormInput() {
    const [show, setShow] = useState(false);
    const nameref = React.createRef()
    const algRef = React.createRef();
    const geoRef = React.createRef();
    const scnRef = React.createRef();
    const langRef = React.createRef();
    const lawRef = React.createRef();
    const infoRef = React.createRef();
    let newEntry = [nameref, algRef, geoRef, scnRef, langRef, lawRef, infoRef];
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newEntry)
    }
    return (
        <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           Add new Student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>User e-mail</Form.Label>
    <Form.Control type="email" placeholder="name.surname@example.com" ref={input => console.log(input)}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label >Alegebra</Form.Label>
    <Form.Control as="select" ref={algRef}>  
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Geometry</Form.Label>
    <Form.Control as="select" ref={geoRef}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1"ref={lawRef}>
    <Form.Label>Law</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1" ref={langRef}>
    <Form.Label>Language</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1" ref={scnRef}>
    <Form.Label>Science</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1" ref={infoRef}>
    <Form.Label>Additional information</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  
  <Button variant="primary" type="submit" onSubmit={handleSubmit}>  
    Submit
  </Button>
  
</Form>
        </Modal.Body>
      </Modal>
      <button onClick={e => handleSubmit(e)}></button>
</>
    )
}

export default FormInput