const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ToDoSchema = new Schema(
{
title: {type: String, required: true},
description: {type: String, required: true,},
dateCreated:{type:Date,default:Date.now},
complete:{type:Boolean,default:false},
dateCompleted:{type:Date},
author: {type: Schema.Types.ObjectId, ref: 'User'}
}
);

module.exports = mongoose.model('ToDo', ToDoSchema);
