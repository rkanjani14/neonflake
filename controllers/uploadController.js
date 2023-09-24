import cloudinary from "../cloudinary/cloudinary.js"
import uploadModel from "../models/upload.js"
class uploadController{
    static homeController = (req,res) => {
        res.render("home")
    }

    static homeController_process = async (req,res) => {
        const { thumbnail, video } = req.files
        const { title, description } = req.body
        try{

            const resultThumbnail = await cloudinary.v2.uploader.upload(thumbnail[0].path)
            const resultVideo = await cloudinary.v2.uploader.upload(video[0].path,{resource_type:"video"})
            const doc = new uploadModel({
                title:title,
                description:description,
                image_url:resultThumbnail.secure_url,
                video_url:resultVideo.secure_url
            })
            const result = await doc.save()
        }catch(error){
            console.log(error)
        }
        res.redirect("/")
    }

    static detailController = async (req,res) => {
        const data = await uploadModel.find()
        res.render('detail',{"data":data})
    }

    static videoController = async (req,res) => {
        const video_item_id = req.params.id 
        const doc = await uploadModel.findById(video_item_id)
        const video_url = doc.video_url
        res.render('video', {"video_url":video_url})
    }
}

export default uploadController