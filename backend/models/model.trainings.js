const mongoose = require('mongoose');


const trainingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now
    },
    tipoSesion: {
        type: String,
        enum: ['gimnasio','cancha','campo','partido','recuperacion'],
        required: true
    },
    duracion: { // en minutos
        type: Number,
        required: true
    },
    rpe: { // Esfuerzo percibido 1-10
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    casstAu: { // Duracion x RPE
        type: Number,
        required: true
    },
    trabajoPrincipal: {
        type: String,
        enum: ['técnica','resistencia','fuerza','potencia','movilidad/flexibilidad'],
    },
    suenoHoras: {
        type: Number,
        min: 1,
        max: 12
    },
    suenoCalidad: {
        type: Number,
        min: 1,
        max: 5
    },
    dolorMuscular: {
        type: Number,
        min: 1,
        max: 5
    },
    estres: {
        type: Number,
        min: 1,
        max: 5
    },
    animo: {
        type: Number,
        min: 1,
        max: 5
    },
    motivacion: {
        type: Number,
        min: 1,
        max: 5
    },
    calidadAlimentacion: {
        type: Number,
        min: 1,
        max: 5
    },
    hidratacion: {
        type: Number,
        min: 1,
        max: 5
    },
    cumplimientoObjetivo: {
        type: Boolean,
        default: false
    },
    notas: {
        type: String
    }

}, {timestamps:true})

const Training = mongoose.model("Training", trainingSchema);

module.exports = Training;