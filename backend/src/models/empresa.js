const { Schema, model } = require('mongoose');

const empresaSchema = new Schema({
    title: String,
    //number: Number,
    descripcion: {
        type: String,
        required: false
    },
    administrador: String,
    imagen:String,
    telefono1:String,
    telefono2:String,
    telefono3:String,
    logo: String,
    direccion: String,
    email: String,
    facebook:String,
    instagram:String,
    whatsapp:String,
    twitter:String,
    linkedin:String,
    youtube:String,
    horaAm: String,
    horaPm: String,
    intervaloTurnoAleatorio: String,
    diaRenovar: String,
    horaRenovar: String,
    apertura: Boolean,
    aperturaAm: String,
    cierreAm: String,
    aperturaPm: String,
    cierrePm: String,
    solNombre: Boolean,
    solDocumento: Boolean,
    solCodigo: Boolean,
    solDireccion: Boolean,
    solTelefono: Boolean,
    solTelefono2: Boolean,
    solEmail: Boolean,
    solIdFamiliar: Boolean,
    solImagen: Boolean,
    solFechaNacimiento: Boolean,
    solEstatura: Boolean,
    solGenero: Boolean,
    solBarrio: Boolean,
    solPeso: Boolean,
    solCategoria: Boolean,
    solTorneos: Boolean,
    solBrazoDominante: Boolean,
    editNombre: Boolean,
    editDocumento: Boolean,
    editCodigo: Boolean,
    editDireccion: Boolean,
    editTelefono: Boolean,
    editTelefono2: Boolean,
    editEmail: Boolean,
    editIdFamiliar: Boolean,
    editImagen: Boolean,
    editFechaNacimiento: Boolean,
    editEstatura: Boolean,
    editGenero: Boolean,
    editBarrio: Boolean,
    editPeso: Boolean,
    editCategoria: Boolean,
    editTorneos: Boolean,
    editBrazoDominante: Boolean,
    presentacion: Boolean,
    encabezado: Boolean,
    clima: Boolean,
    color: String,
    aleatorio: Boolean,
    cancelar: Boolean
    
    }, {
    timestaps: true
});


module.exports = model('Empresa', empresaSchema);