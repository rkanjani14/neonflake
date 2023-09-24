import dotenv from 'dotenv'
dotenv.config()
import cloudinary from 'cloudinary'
cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
export default cloudinary