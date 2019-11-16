import React from 'react'
import { GroupContainer, FormTextareaLabel, FormTextareaContainer } from './form-textarea.styles'

const FormTextarea = ({ handleChange, label, ...props }) => {
  return (
    <GroupContainer>
      <FormTextareaContainer onChange={handleChange} {...props} />
      {label ? (
        <FormTextareaLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </FormTextareaLabel>
      ) : null}
    </GroupContainer>

  )
}

export default FormTextarea