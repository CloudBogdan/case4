import HumanModel from "./models/HumanModel";
import WorkerModel from "./models/WorkerModel";

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bogdanov:123RF4Ru43568@cluster0.i1nqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const resolvers = {
    Query: {
        
        workers: ()=>
            WorkerModel.find({}),
        humans: ()=>
            HumanModel.find({}),

    },
    Human: {
        workers: (parent)=>
            WorkerModel.find({ human_id: parent.id })
    }
};

export default resolvers;