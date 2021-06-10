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
        worker: (parent, { id })=>
            WorkerModel.findById(id),
            
        humans: ()=>
            HumanModel.find({}),
        human: (parent, { id })=>
            HumanModel.findById(id),

    },
    // > Mutation
    Mutation: {
        // > Add worker 👨✅
        addWorker: (parent, args)=>
            new WorkerModel(args).save(),
        // > Add human 👨‍🦳✅
        addHuman: (parent, args)=>
            new HumanModel(args).save(),

        // > Update worker 👨⏫
        updateWorker: (parent, args)=>
            WorkerModel.findByIdAndUpdate(args.id, { $set: args }, { new: true }),
        // > Update human 👨‍🦳⏫
        updateHuman: (parent, args)=>
            HumanModel.findByIdAndUpdate(args.id, { $set: args }, { new: true }),

        // > Remove worker 👨❌
        removeWorker: (parent, { id })=>
            WorkerModel.findByIdAndRemove(id),
        // > Remove human 👨‍🦳❌
        removeHuman: (parent, { id })=>
            HumanModel.findByIdAndDelete(id),
    },

    // > Types
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