import mongoose from 'mongoose'
const Schema = mongoose.Schema

const creatorSchema = new mongoose.Schema({
id: { type: String },
createdTime: { type: Date },
fields: [{ 
  Name: { type : String}.
  Items: { type: Array},
  Spaces: { type: Array},
}]
})


export default mongoose.model('Creator', creatorSchema)