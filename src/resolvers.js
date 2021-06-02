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
    Worker: {
        human: (parent)=>
            HumanModel.findById(parent.human_id)
    },
    Human: {
        workers: (parent)=>
            WorkerModel.find({ human_id: parent.id })
    },
};

export default resolvers;