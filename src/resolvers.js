const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bogdanov:123RF4Ru43568@cluster0.i1nqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const resolvers = {
    Query: {
        
        workers: ()=> "Hi"

    },
};

export default resolvers;