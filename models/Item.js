import mongoose from 'mongoose'
const Schema = mongoose.Schema

const itemSchema = new mongoose.Schema({
id: { type: String },
createdTime: { type: Date },
fields: [{ 
  Name: { type : String},
  Creator: { type: Array},
  Spaces: { type: Array},
  Category: { type: Array },
}]
})


export default mongoose.model('Item', itemSchema)