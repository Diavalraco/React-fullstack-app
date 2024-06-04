const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://admin:Maths%40123@cluster0.g2yvi3v.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)

module.exports ={
    todo
}