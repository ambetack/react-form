import React from 'react';
import {useForm,useFieldArray} from 'react-hook-form';
import {Box,Container, Paper,Icon} from '@material-ui/core';
import CheckedboxList from "./CheckedboxList";


function Form() {
  const{register,handleSubmit,errors} =useForm;
  
  const Form=(
    <>
    <div className="card"></div>
      <div className="card-header"> 1.Tell us About your Company</div>
      <div className="card-body"></div>
      <form onSubmit={handleSubmit(onSubmit)}></form>

    <div className="form-group">
    <label for="yourname">Your Name</label>
    <input type="text" 
    className="form-control"
    ref={register
      ({
        required:true,
      })
    } 
    id="yourname" />
    <small className="form -text text-danger">
      {errors.Youremail.type==="required" && " this field is required"}
    </small>
  </div>
  <div className="form-group">
  <label for="email"> Your Email </label>
  <input type="email"
  className="form-control" 
  ref ={register({
    required:true
  })} 
  id="email" />
  <small className="form -text text-danger">
      {errors.Yourname.type==="required" && "this is required"}
    </small>
  </div>
 <div className="form-group">
  <label for="phone"> Your Phone Number</label>
  <input type="text" 
  class="form-control" 
   ref={register} 
  id="phone" />
  </div>
  <div className="form-group">
    <label for="companywebsite">Company Website </label>
    <input type="text" 
    className="form-control"
    ref={register} 
    id="company website" />
  </div>
  

  <div className="card"> </div>
  <div className ="card-header"> 2.   What are you looking to work on?</div>
  <div className="card-body"> </div>
  
  <Box width ={700} boxShadow={1} p={3}>
    

  <div className="form-group">
    <label for="describeyourprojectpriefly">Describe your project Briefly </label>
    <input type="text" 
    className="form-control"
    ref={register} 
    id="describeyourprojectbriefly" />
    <input
  accept="image/*"
  className={classes.input}
  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" className={classes.button}>
    Upload
  </Button>
</label> 

  </div>
  </Box>

  <Box width ={700} boxShadow={1} p={3}>
    <Container>
    <Paper> 
    <Icon>RadioButtonUnchecked</Icon>
    <Icon color ="secondary" style={{fontSize=50,color:lightblue[500]}}> </Icon>




  <div className="form-group">

    <label for="describeyourbudget">Describe your Budget </label>
    <input type="text" 
    className="form-control"
    ref={register({
      required:true
    })} 
    id="describeyourbudget" />
  </div>
  <small className="form -text text-danger">
      {errors.Yourname.type==="required" && "this is required"}
    </small>
  </Paper>
  </Container>
  
  </Box>



  </>


  )

  
  

  


  return (
    <div className="Form">
      <div className="container py-5">
        <form onSubmit={handleSubmit()}>{Form} </form>

        {Form}</div>
        
     
      
    </div>
  )}
    

export default Form

