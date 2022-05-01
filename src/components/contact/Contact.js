// Main Imports
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Fade } from 'react-reveal';

// Import Components
import Layout from '../layout/Layout';

// Import Styles
import '../contact/contact.css';

const Contact = () => {
  // Initialise state using formspee hook
  const [state, handleSubmit] = useForm('meqnpprb');
  if (state.succeeded) {
    return (
      <Fade duration={1000}>
        <div className='success-wrapper'>
          <h2>Thanks for getting in touch!</h2>
        </div>
      </Fade>
    );
  }
  return (
    <Layout title='Contact'>
      <Fade duration={1000}>
        <h2>Don't hesitate to get in contact.</h2>
        <div className='contact-main'>
          <form onSubmit={handleSubmit}>
            <textarea
              id='name'
              type='name'
              name='name'
              className='input-box'
              placeholder='Name'
            />
            <textarea
              id='email'
              type='email'
              name='email'
              className='input-box'
              placeholder='Email'
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <textarea
              id='message'
              name='message'
              placeholder='Message'
              className='message-box'
              rows={5}
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button
              type='submit'
              disabled={state.submitting}
              className='button-submit'>
              Send
            </button>
          </form>
        </div>
      </Fade>
    </Layout>
  );
};

export default Contact;
