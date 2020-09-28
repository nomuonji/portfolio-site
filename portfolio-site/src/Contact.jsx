import React from 'react';
import Snsbar from './Snsbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const form = {
  display:"flex",
  flexDirection:"column",
  margin:"30px 0 50px 0"
}

const inputItem = {
  marginBottom:"20px",
}

const btn = {
  width:"50%",
  margin:"0 auto"
}

const Contact = () => {
  return (
    <div className="section">
      <div className="section-title">
        <h2>contact</h2>
        <p>すみません、形だけのものです。何かありましたらTwitterなどでご連絡いただけると幸いです。</p>
      </div>

      <div className="input-form" style={form}>
        <TextField id="outlined-basic" label="Your name" variant="outlined" style={inputItem}/>
        <TextField id="outlined-basic" label="Your email" variant="outlined" style={inputItem}/>
        <TextField id="outlined-basic" label="Your message" variant="outlined" multiline style={inputItem}/>
        <Button variant="outlined" style={btn} >Send</Button>
      </div>
      
      <div>
        <p>yuto nomura</p>
        <Snsbar />
      </div>
    </div>
  )

};

export default Contact