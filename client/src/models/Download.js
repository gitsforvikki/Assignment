import React from "react";
import {useSelector} from 'react-redux';
import candidate  from '../assets/img/candidate.png'
import * as userReducer from '../redux/user/user.reducer';

let Download = ()=>{

  //get userinfo from store
  let userInfo = useSelector((state)=>{
    return state[userReducer.userFeaturesKey];
  });

  //destructuring
  let {user} = userInfo;

  
  return(
    <React.Fragment>
        {
       Object.keys(user).length > 0 &&

      <section className='p-3'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-header text-primary p-5'>
                <p className='h4'>Admit card 2023-24</p>
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

export default Download;