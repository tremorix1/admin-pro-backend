const { Schema, model } = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol válido'
};

const usuarioSchema = Schema({
  nombre:{
    type: String,
    required: [true,'El nombre es necesario']
  },
  email:{
    type: String,
    unique: true,
    required: [true,'El email es necesario']
  },
  password:{
    type:String,
    required: [true,'La contraseña es obligatoria']
  },
  img:{
    type: String,
    required: false
  },
  role:{
    type: String,
    default: 'USER_ROLE',
    enum: rolesValidos
  },
  google:{
    type: Boolean,
    default: false
  }
});

usuarioSchema.methods.toJSON= function() {
let user = this;
let userObject = user.toObject();
delete userObject.password;
delete userObject.__v;
userObject.uid= userObject._id;
delete userObject._id
return userObject;
}

usuarioSchema.plugin(uniqueValidator, {message:'{PATH} debe de ser único'});

module.exports = model('Usuario', usuarioSchema);
