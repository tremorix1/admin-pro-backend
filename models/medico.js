const { Schema, model } = require('mongoose');

const MedicoSchema = Schema({
  nombre:{
    type: String,
    required: [true,'El nombre es necesario']
  },
  img:{
    type: String,
    required: false
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  hospital: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  },
});

MedicoSchema.methods.toJSON= function() {
let medico = this;
let medicoObject = medico.toObject();
delete medicoObject.__v;
return medicoObject;
}
module.exports = model('Medico', MedicoSchema);
