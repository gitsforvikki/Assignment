import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as userActions from '../redux/user/user.action';
import * as userReducer from '../redux/user/user.reducer';
import candidate  from '../assets/img/candidate.png'
let AdmitCard = ()=>{
  const navigate = useNavigate();
  let dispatch = useDispatch();

  let [phoneNumber , setPhoneNumber] = useState('');

  let updatePhoneNumber = (event)=>{
    setPhoneNumber(event.target.value);
  }

  let getUserInfo =(event)=>{
    event.preventDefault();
    dispatch(userActions.getUser(phoneNumber));
  }
  //get userinfo from store
  let userInfo = useSelector((state)=>{
    return state[userReducer.userFeaturesKey];
  });

  let {user , errorMessage} = userInfo;

  //download Admit card

  let downloadAdmit=()=>{
    navigate("/users/download");
    setTimeout(()=>{
      {
        Object.keys(user).length > 0 && 
        window.print();
      }
    } , 1000);
    
    setTimeout(()=>{
      navigate("/users/admit-card");
    } , 1000);
  }
  return(
    <React.Fragment>
      <section className='p-2 bg-light text-dark'>
        <div className='container'>
          <div className='row' >
            <div className='col'>
              <p className='h3'>Download your Admit card  </p>
            </div>
          </div>
        </div>
      </section>


{/* Download form section */}

      <section className='p-2'>
        <div className='container '>
          <div className="row">
            <div className='col'>
              <form class="form-inline" onSubmit={getUserInfo}>
                <div class="form-group mx-sm-3 mb-2">
                  <input 
                  onChange={updatePhoneNumber}
                  type="number" required class={`form-control ${Object.keys(errorMessage).length > 0  ? 'is-invalid' : ''}`}  placeholder="Phone number"/>
                </div>
                <input type="submit" className="btn btn-dark text-brown btn-sm" value="submit" />
                <button onClick={downloadAdmit} className='btn btn-warning btn-sm text-dark'>Download</button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* Admit card section */}
      
      
    {
       Object.keys(user).length > 0 &&

      <section className='p-3'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-header text-primary p-5'>
                <p className='h4'> GATE 2023 Offline Exam Admit card </p>
              </div>
              <div className='card-body '>
               <div className='row'>
                <div className='col-md-4'>
                  <img src={candidate}  alt='candidate img'/>
                </div>
                <div className='col-md-8 '>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <span className='font-weight-bold'>Name:</span> {user.name}<br/>
                    </li>
                    <li  className='list-group-item'>
                      <span className='font-weight-bold'>Roll Number:</span> {user.roll}<br/>
                    </li>
                    <li className='list-group-item'>
                      <span className='font-weight-bold'>School:</span> {user.school}<br/>
                    </li>
                    <li className='list-group-item'>
                      <span className='font-weight-bold'>Class:</span> {user.classes}<br/>
                    </li>
                    <li className='list-group-item'>
                      <span className='font-weight-bold'>Registerd Phone:</span> {user.phone}<br/>
                    </li>
                    <li className='list-group-item'>
                      <span className='font-weight-bold'>Address:</span> {user.address}<br/>
                    </li>
                  </ul>
            
                </div>
               </div>
              </div>

              <div className='card-footer'>
                <p className='font-weight-bold font-italic'>General instructions for applicants</p>
                <ol>
                  <li>Candidates must bring the Admit Card and show it to the Invigilators on duty and should preserve it for futurerequirements.</li>
                  <li>Photograph contained in this Admit Card will be matched with the photograph submitted with original application.</li>
                  <li>Candidates should bring two Black Ballpoint Pens. Use of pencil is PROHIBITTED</li>
                  <li>Mobile phone, Calculator, Digital Watch or any Electronic Device is NOT ALLOWED</li>
                  <li>Candidates involved in unfair means/misconduct in examination hall, will be silently expelled.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     
    }


    </React.Fragment>
  )
}

export default AdmitCard;