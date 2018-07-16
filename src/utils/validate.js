import React from 'react';
import constants from 'constants/app-constants';

export const required = value => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return <div className="field-error"><p>This field is required</p></div>;
  }
};

const isValidEmail = emailString => constants.REGEX.EMAIL.test(emailString);
export const email = value => {
  if (!isValidEmail(value)) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return <div className="field-error"><p>Provide a valid email</p></div>;
  }
};

export const passwordConstraints = value => {
  if (value && !constants.REGEX.PASSWORD.test(value)) {
    return <div className="field-error"><p>
      Password should be atleast 8 characters long and contain atleast 1 number
    </p></div>;
  }
};

export const confirmPassword = (value, props, components) => {
  let passwordValue = components.password[0].value;
  let message;
  if (value && !passwordValue) {
    message = 'Confirm password needs to by empty for empty password';
  }
  else if (!value && passwordValue) {
    message = 'This field is required';
  }
  else if (value && passwordValue && value !== passwordValue) {
    message = 'Passwords need to match';
  }
  if (message) {
    return <div className="field-error"><p>{message}</p></div>;
  }
};


export default {
  isValidEmail
};
