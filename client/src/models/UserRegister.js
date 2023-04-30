import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import *  as userActions from '../redux/user/user.action';
import * as userReducer from '../redux/user/user.reducer';
import { useNavigate } from "react-router-dom";


let UserRegister = ()=>{

  let dispatch = useDispatch();
  let navigate = useNavigate();

  //local state management
  let [user , setUser] = useState({
    name : "",
    phone: "",
    school: "",
    classes: "",
    roll: "",
    address: ""
  });

  //update for on typing or changing
let updateInput=(event)=>{
  setUser({
    ...user,
    [event.target.name] : event.target.value
  })
}


//get userinfo from redux store
let userInfo = useSelector((state)=>{
  return state[userReducer.userFeaturesKey];
});

//destructuring
let {  errorMessage} = userInfo;

//form submit for registration

let clickSubmitUser=(event)=>{
  event.preventDefault();
  dispatch(userActions.registerUser(user , navigate));


}

  return (
    <React.Fragment>
      
      <section className="p-3 bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Welcome to National Test Agency portal</p>
            </div>
          </div>
        </div>
      </section>

      <section className="m-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  <h3>Register Here</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={clickSubmitUser}>
                    <div className="form-group">
                      <input 
                      
                      name="name"
                      value={user.name}
                      onChange={updateInput}
                      type="text" required className="form-control"  placeholder="Enter Name"/>
                    </div>

                    <div className="form-group">
                      <input 
                      
                      name="phone"
                      value={user.phone}
                      onChange={updateInput}
                      type="number" required class={`form-control ${Object.keys(errorMessage).length > 0  ? 'is-invalid' : ''}`}  placeholder="Enter Phone number"/>
                   
                    </div>

                    <div className="form-group">
                      <input 
                      
                      name="school"
                      value={user.school}
                      onChange={updateInput}
                      type="text" required className="form-control"  placeholder="Enter School Name"/>
                    </div>

                    <div className="form-group">
                      <input 
                      
                      name="classes"
                      value={user.classes}
                      onChange={updateInput}
                      type="number" required className="form-control"  placeholder="Enter class"/>
                    </div>

                    <div className="form-group">
                      <input 
                      
                      name="roll"
                      value={user.roll}
                      onChange={updateInput}
                      type="number" required className="form-control"  placeholder="Enter Roll number"/>
                    </div>

                    <div className="form-group">
                      <input 
                      
                      name="address"
                      value={user.address}
                      onChange={updateInput}
                      type="text" required className="form-control"  placeholder="Enter Address"/>
                    </div>

                    <div >
                      <input type="submit" className="btn btn-dark text-brown btn-sm" value="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default UserRegister;