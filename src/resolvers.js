import HumanModel from "./models/HumanModel";
import WorkerModel from "./models/WorkerModel";

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bogdanov:123RF4Ru43568@cluster0.i1nqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

const resolvers = {
    // > Query
    Query: {
        
        workers: ()=>
            WorkerModel.find({}),
        worker: (_, { id })=>
            WorkerModel.findById(id),
            
        humans: ()=>
            HumanModel.find({}),
        human: (_, { id })=>
            HumanModel.findById(id),
        humansByData: (_, args)=>
            HumanModel.find(args),

    },
    // > Mutation
    Mutation: {
        // > Add worker 👨✅
        addWorker: (_, args)=>
            new WorkerModel(args).save(),
        // > Add human 👨‍🦳✅
        addHuman: (_, args)=>
            new HumanModel(args).save(),

        // > Update worker 👨⏫
        updateWorker: (_, args)=>
            WorkerModel.findByIdAndUpdate(args.id, { $set: args }, { new: true }),
        // > Update human 👨‍🦳⏫
        updateHuman: (_, args)=>
            HumanModel.findByIdAndUpdate(args.id, { $set: args }, { new: true }),

        // > Remove worker 👨❌
        removeWorker: (_, { id })=>
            WorkerModel.findByIdAndRemove(id),
        // > Remove human 👨‍🦳❌
        removeHuman: (_, { id })=>
            HumanModel.findByIdAndDelete(id),
    },

    // > Types
    Worker: {
        human: (parent)=>
            parent.human_id ? HumanModel.findById(parent.human_id) : null
    },
    Human: {
        workers: (parent)=>
            WorkerModel.find({ human_id: parent.id })
    },
};

export default resolvers;