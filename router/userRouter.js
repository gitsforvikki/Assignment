const express =  require('express');
const router = express.Router();
const {body , validationResult} = require('express-validator');
const User = require('../models/user');




//regitser user
router.post('/register',[
  body('name').notEmpty().withMessage('name requires'),
  body('phone').notEmpty().withMessage('phone requires'),
  body('school').notEmpty().withMessage('school requires'),
  body('classes').notEmpty().withMessage('classes requires'),
  body('roll').notEmpty().withMessage('roll requires'),
  body('address').notEmpty().withMessage('address requires')
], async(request , response)=>{

  let errors = validationResult(request);
  if(!errors.isEmpty()){
    return response.status(401).json({errors : errors.array()});
  }
  try{
    //get data fill by user
    let {name , phone, school , classes , roll , address  } = request.body;

    //check user is already exist or not
    let user = await User.findOne({phone : phone});
    if(user){
      return  response.status(401).json({errors : [{msg : 'User already exist'}]});
    }

    user = new User({name , phone , school , classes , roll , address});
    //save to database
    user = await user.save();
    response.status(200).json({msg : 'Registration success'});


  }
  catch(error){
    console.log(error);
    response.status(500).json({errors : [{msg : error.message}]});
  }
})


//get user

router.get('/:phoneId' , async(request , response)=>{

  let phoneId = request.params.phoneId;

  try{
      //check user exist or not
    let user = await User.findOne({phone : phoneId});
    if(!user){
      return response.status(401).json({errors : [{msg : "User not found"}]})
    }

    response.status(200).json({
      user : user
    })


  }
  catch(error){
    console.log(error);
    response.status(500).json({errors : [{msg : error.message}]});
  }

})


module.exports = router;