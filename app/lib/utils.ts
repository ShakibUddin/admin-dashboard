import mongoose from 'mongoose';

export const connectToDatabase = async () => {
    try {
        const db = await mongoose.connect(`"mongodb+srv://shakibuddinbhuiyan:gpZIYUUTqZdWCkUW@dashboardcluster.aptakhl.mongodb.net/?retryWrites=true&w=majority`);
        console.log("db", db)
    }
    catch (error) {
        console.log("error", error)
    }
}