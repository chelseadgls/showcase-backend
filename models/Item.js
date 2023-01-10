import mongoose from 'mongoose'
const Schema = mongoose.Schema

const itemSchema = new mongoose.Schema({
id: { type: String },
createdTime: { type: Date },
fields: [{ 
  Category: { type: Array },
  Creator: { type: Array },
  Description: { type: String },
  Images: [{
    url: { type: String },
  }],
  Name: { type: String },
  Spaces: { type: Array},
}]
})


export default mongoose.model('Item', itemSchema)