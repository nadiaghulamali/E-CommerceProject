const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        const conn = mongoose.connect (process.env.MONGODB_URL);
        console.log("DB Connected");
    }
    catch(error){
        throw new Error(error);
    }

}
module.exports = dbConnect;
