import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Layout from '../layout/Layout';
import { Fade } from 'react-reveal';
import '../contact/contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('meqnpprb');
  if (state.succeeded) {
    return <p>Thanks for getting in touch!</p>;
  }
  return (
    <Layout title='Contact'>
      <Fade duraction={1000}>
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
