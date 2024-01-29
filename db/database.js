import mongoose from "mongoose";

const Connection = async () => {
    // const URL = "mongodb+srv://uali43924:shani@555@cluster0.wanrnz9.mongodb.net/?retryWrites=true&w=majority";
    // const URL = "mongodb+srv://uali43924:shani@555@cluster0.wanrnz9.mongodb.net/?retryWrites=true&w=majority"
    
    // const URI = "mongodb+srv://uali43924:hgRmT2cUDsJM83nF@cluster0.wanrnz9.mongodb.net/?retryWrites=true&w=majority"
    
    const URI = "mongodb+srv://uali43924:hgRmT2cUDsJM83nF@cluster0.wanrnz9.mongodb.net/?retryWrites=true&w=majority"
    
    try {
        // await mongoose.connect(URL ,{ useNewUrlParser: true } );
        await mongoose.connect(URI, { useNewUrlParser: true });
        console.log("Database connected successfully");

    } catch (error) {
        console.log("Error Occurred", error);
    }
};

export default Connection;




// const Connection = async () => {

//        const URL = "mongodb+srv://uali43924:shani@555@cluster0.wanrnz9.mongodb.net/?retryWrites=true&w=majority"
//     try {
//         await mongoose.connect(URL , {useNewUrlParser: true});
//         console.log("Database connected successfully")
//     } catch (error) {
//         console.log("Error Occur", error)
//     }
// }
// export default Connection