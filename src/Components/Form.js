import React from 'react'
import {Form, Button,Col} from 'react-bootstrap';
import './css/Fstyle.css'

function Formulaire() {
    return (
        <div>
        <Form >
            <h3>Play Me </h3>
            <audio controls autoplay> 
            <source src="/sound/popstar.mp3" type="audio/mpeg"/>
            </audio>
            <h3>Feel free to put your contact information and specify your Mariji quantity  </h3>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>


  <Form.Row>
    

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Region</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>North America</option>
        <option>South America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Africa</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Quantity of Marijuana (in grammes)</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Your Preferred Type of Marijuana</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Indica</option>
        <option>Sativa</option>
        <option>Hybrid</option>
        <option>Ruderalis</option>
      </Form.Control>
    </Form.Group>

  <Button variant="success" type="submit" className="mr-auto">
    Let's get High
  </Button>
  
</Form>
</div>
    )
}
export default Formulaire