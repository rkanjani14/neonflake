import mongoose from 'mongoose'
const uploadSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    image_url:{type:String,required:true},
    video_url:{type:String,required:true}
})
const uploadModel = mongoose.model('upload',uploadSchema)
export default uploadModel