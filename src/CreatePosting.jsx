import React from 'react';
import './CreatePosting.css'

const Contact = (props) => {
  return (
    <div className='CreatePosting'>
      <div className='pageTitle'>
        <h1 className='CreatePostingHeader'>Create a Posting</h1>
      </div>
      {/* onSubmit function on from */}
      <div className='createPostingOuterDiv'>
        <div className='createPostingDiv'>
          <form>
            <label className="CreatePostingLabel1" htmlFor=''>Name: </label>
            <input className="CreatePostingInput1" type='text' name='' id='' placeholder='' />
            <br />
            <label className="CreatePostingLabel2" htmlFor=''>Item: </label>
            <input className="CreatePostingInput2" type='text' name='' id='' placeholder='' />
            <br />
            <label className="CreatePostingLabel3" htmlFor=''>Category: </label>
            <input className="CreatePostingInput3" type='text' name='' id='' placeholder='' />
            <br />
            <label className="CreatePostingLabel4" htmlFor=''>Location: </label>
            <input className="CreatePostingInput4" type='text' name='' id='' placeholder='' />
            <br />
            <label className="CreatePostingLabel5" htmlFor=''>Description: </label>
            <input className="CreatePostingInput5" type='text' name='' id='' placeholder='' />
            <br />
            <label className="CreatePostingLabel6" htmlFor=''>Trade Value: </label>
            <input className="CreatePostingInput6" type='text' name='' id='' placeholder='' />
            <br />
            <button className="CreatePostingImageButton" type='submit'>Upload Image</button>
           
            <button className="CreatePostingButton" type='submit'>Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
