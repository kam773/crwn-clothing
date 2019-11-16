import React, { useState } from 'react'

import FormInput from '../../components/form-input/form-input.component'
import FormTextarea from '../../components/form-textarea/form-textarea.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import { ContactContainer, ContactTitle } from './contact.styles'

const Contact = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' })

  const handleChange = event => {
    const { value, name } = event.target;
    setInputs(inputs => ({ ...inputs, [name]: value }))
  }
  const handleSubmit = () => {

  }
  return (
    <ContactContainer>
      <ContactTitle>Contact us</ContactTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='name'
          type='text'
          handleChange={handleChange}
          value={inputs.name}
          label='name'
          required
        />
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={inputs.email}
          label='email'
          required
        />
        <FormTextarea
          name='message'
          type='text'
          handleChange={handleChange}
          value={inputs.message}
          label='message'
          required
        />
        <CustomButton type="submit" >
          Send
        </CustomButton>
      </form>
    </ContactContainer>
  )
}

export default Contact