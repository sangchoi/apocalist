import React from 'react';

const Contact = (props) => {
  return (
    <div className='App'>
      <div className='pageTitle'>
        <h1>Create a Posting</h1>
      </div>
      {/* onSubmit function on from */}
      <div className='createPostingOuterDiv'>
        <div className='createPostingDiv'>
          <form>
            <label htmlFor=''>Label </label>
            <input type='text' name='' id='' placeholder='' />
            <br />
            <label htmlFor=''>Label </label>
            <input type='text' name='' id='' placeholder='' />
            <br />
            <label htmlFor=''>Label </label>
            <input type='text' name='' id='' placeholder='' />
            <br />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
