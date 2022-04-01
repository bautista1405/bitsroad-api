const { Schema, model } = require("mongoose");
// ts_create, ts_update, idCreate, enable. se usan para temas de auditoría
//ts_create: para saber cuál fue el último producto creado
//ts_update: para saber cuál fue el último producto actualizado
//idCreate: para saber quién fue el usuario que realizó la última inserción
//enable: para manejar los datos de forma lógica, ya no se eliminan datos, sino que son dados de baja

const ProductSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    default: [],
  },
  enable: {
    type: Boolean,
    default: true,
  },
  stock: {
    type: Number,
    required: true,
  },
},{timestamps: true},);

module.exports = model("products", ProductSchema);