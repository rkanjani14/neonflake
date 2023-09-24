import mongoose from 'mongoose'
const connectdb = async (DATABASE_URL) => {
    const DB_OPTIONS = {
        dbName:process.env.DB_NAME
    }
    await mongoose.connect(DATABASE_URL,DB_OPTIONS)
}
export default connectdb