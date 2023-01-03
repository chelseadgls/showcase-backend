import mongoose from 'mongoose'
const Schema = mongoose.Schema

const spaceSchema = new mongoose.Schema({
id: { type: String },
createdTime: { type: Date },
fields: [{ 
  Category: { type: Array },
  Description: { type : String},
  Location: { type: String }, 
  Name: { type: String },
}]
})


export default mongoose.model('Space', spaceSchema)