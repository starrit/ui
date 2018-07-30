import React, {Component, Fragment} from 'react'
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
        <Form
          success={this.props.success}
          errors={this.props.hasErrors}
          loading={this.props.isLoading}
          onSubmit={(e)=>{
          this.props.onSubmit(e)
        }}>
        <Message success positive header='Your request was successful!' content="You're request will be process and you will be conacted shortly. Thanks Ya'll" />
        <Message error header='Your did not go through!' content={this.props.hasErrors} />
          {
            !this.props.success && <Fragment>
            <Form.Group widths='equal'>
              <Form.Field control={Input} id="firstName" label='First name' placeholder='First name' required/>
              <Form.Field control={Input}  id="lastName" label='Last name' placeholder='Last name'  required/>
              <Form.Field control={Input} id="companyName" label='Company Name' placeholder='Company Name'  required/>

            </Form.Group>

            <Form.Group widths='equal'>
              <Form.Field control={Input} id="phone" label='Phone Number' placeholder='Phone Number'  required/>
              <Form.Field control={Input} id="email" label='Email Address' placeholder='Email Address'  required/>

            </Form.Group>
            <Form.Field control={TextArea} id="body" label='About your project' placeholder='Tell us more about your needs...'  required/>

            <Form.Field control={Button}>Submit</Form.Field>
          </Fragment>
          }
      </Form>
      </Container>
    )
  }
}

export default ContactForm
