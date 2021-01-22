const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({
  nombre:{
    type: String,
    required: [true,'El nombre es necesario']
  },
  img:{
    type: String,
    required: false
  },
  usuario: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  }
}, { collection: 'hospitales'});

HospitalSchema.methods.toJSON= function() {
let hospital = this;
let hospitalObject = hospital.toObject();
delete hospitalObject.__v;
return hospitalObject;
}


module.exports = model('Hospital', HospitalSchema);
