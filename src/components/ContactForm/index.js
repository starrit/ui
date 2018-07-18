import React, {Component} from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Message, Container } from 'semantic-ui-react'
import styles from "./Style.scss"
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e, { value }){
    return this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <Container className={styles.ContactForm}>
        <Form >
        <Message success header='Form Completed' content="You're all signed up for the newsletter" />
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='First name' placeholder='First name' required/>
          <Form.Field control={Input} label='Last name' placeholder='Last name'  required/>
          <Form.Field control={Input} label='Company Name' placeholder='Company Name'  required/>

        </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Phone Number' placeholder='Phone Number'  required/>
            <Form.Field control={Input} label='Email Address' placeholder='Email Address'  required/>

          </Form.Group>
        <Form.Field control={TextArea} label='About your project' placeholder='Tell us more about your needs...'  required/>

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </Container>
    )
  }
}

export default ContactForm
