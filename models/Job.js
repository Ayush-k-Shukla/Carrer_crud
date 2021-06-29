const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    department:{
        type:String,
        //required:true
    },
    workType:{
        type:String,
        required:true
    },
    remote:{
        type:Boolean,
        default:false
    },
    duration:{
        type:String,
        //required:true
    },
    stipend:{
        type:Number,
        required:true
    },
    applyBy:{
        type :Date,
        //required:true
    },
    startedBy:{
        type:Date,
        //required:true
    },
    skills:{
        type:[String],
        //required:true
    },
    jobDiscription:{
        type:String,
        //required:true
    },
    whoCanApply:{
        type:String,
        //required:true
    },
    totalOpening:{
        type:Number,
        //required:true
    },
    perks:{
        type:[String],
        //required:true
    },
    applications:[
        {
            userName:{type:String,required:true},
            email:{type:String,required:true},
            skills:{type:[String],required:true},
            contactNumber:{type:Number,required:true},
            resume:{type:String,required:true}
        }
    ]
});

jobSchema.pre('save',function(next){
    // console.log('going to save',this)
    const date = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
    console.log(date.toString())
    this.startedBy = date
    next();
})

const Job = mongoose.model("Job",jobSchema)

module.exports = Job