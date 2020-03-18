
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const debug = require('debug')('ujumbe-api');


const Schema = mongoose.Schema;

const userSchema =  new Schema({
    firstName: {
      type: String,
      required: [true, 'The first name is required']
    },
    email: {
      type: String,
      validate: {
        validator: function(v){
          return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
        },
        message: props => `Invalid email`

      },
      required: [true, 'The email address is required'],
      lowercase: true
    },
    lastName: {
      type: String,
      required: [true, 'The last name is required']
    },
    password: {
      required: [true, "The password is required"],
      type: String
    }
},{timestamps: true});


//PRE HOOKS
//hashing the password
userSchema.pre('save', async function(){
  
    if(this.isModified("password")){
      try{
        debug("************Hashing Hashing***********");
        let hash = await hashing(this.password);
        this.password = hash;
      }catch(err){
        console.error(err);
        return Promise.reject(err);
      }
    }
});

//MODEL METHODS
//method to compare the password and the submitted password
userSchema.methods.validatePassword = function(password){
    debug("validating password");
    return bcrypt.compareSync(password, this.password);
};

//HELPER METHODS
let hashing = async (password)=>{
  try{
    let hash  = await bcrypt.hash(password, 10);
    return Promise.resolve(hash)
  }catch(err){
    console.error(err);
    return Promise.reject(err);
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;



