import { Schema, model, models } from "mongoose";

const RequestSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'User already exists!'],
        required: [true, 'Email is required!']
    },
    partner: {
        type: String,
        required: [true, 'Partner name is required!']
    },
    success_msg: {
        type: String,
    },
    failure_msg: {
        type: String,
    },
})

const Request = models.Request || model('Request', RequestSchema)

export default Request