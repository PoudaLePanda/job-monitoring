'use strict';

var Mongoose = require('mongoose');

/**
 * Each connection object represents a job.
 * Each connection object composed of {userId + socketId}. Both of them together are unique.
 *
 */
var JobSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

var jobModel = Mongoose.model('job', JobSchema);

module.exports = jobModel;