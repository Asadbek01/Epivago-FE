import {  useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import {Row, Col, Container} from 'react-bootstrap'

const SignUp = () => {
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    password: ""
  })

  const handleInput = (fieldName, value) => {
    setReservation({
      ...reservation,
      [fieldName]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(reservation)
    try {
      let response = await fetch(
        'http://localhost:3002/user/register',
        {
          method: 'POST',
          body: JSON.stringify(reservation),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )

      if (response.ok) {
        alert('OK!')
        setReservation({
          name: '',
          email: '',
          password: ""

        })
      } else {
        alert('ERROR')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Container className='mt-5' >
     <Row className="d-flex justify-content-center ">
    <Col md={8}>
      <h2 className='mt-5'>Sign Up</h2>
      
      <Form onSubmit={handleSubmit} className="mt-5">
        <Form.Group className='d-flex '>
          <Form.Label  className='text-danger' > <strong className='h5 mr-5'>Name:</strong></Form.Label>
          <Form.Control
            type='text'
            placeholder='Input your name'
            className=" d-block ml-auto mb-2 rounded-pill"
            value={reservation.name}
            onChange={(e) => {
              handleInput('name', e.target.value)
            }}
            required
          />
        </Form.Group>
        <Form.Group className='d-flex '>
        <Form.Label  className=' text-danger' > <strong className='h5 mr-5' style={{paddingRight: "5px"}}>Email:</strong></Form.Label>
          <Form.Control
            type='email'
            placeholder='Input your email'
            className=" d-block ml-auto mb-2 rounded-pill"
            value={reservation.email}
            onChange={(e) => {
              handleInput('email', e.target.value)
            }}
            required
          />
        </Form.Group>

        <Form.Group className='d-flex mt-4'>
        <Form.Label  className='text-danger' > <strong className='h5 mr-4'>Password:</strong></Form.Label>
          <Form.Control
            type='password'
            placeholder='Input your password'
            className=" d-block mx-auto mb-2 rounded-pill"
            value={reservation.password}
            onChange={(e) => {
              handleInput('password', e.target.value)
            }}
            required
          />
        </Form.Group>
      
      
        <Button
        className='rounded-pill mt-5 mb-4'
        variant='success'
         type='submit'>
          Create Account
        </Button>
        <p>Already have an account? <a href="/">Login</a></p>

      </Form>
      </Col>
    </Row>
    </Container>
    </>
  )
}

export default SignUp