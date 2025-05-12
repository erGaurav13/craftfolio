// models/Analytics.js
const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  caseStudyId: { type: mongoose.Schema.Types.ObjectId, ref: 'CaseStudy' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  visitorIP: String,
  timestamp: { type: Date, default: Date.now },
  event: { type: String, enum: ['view', 'click'] },
  additionalData: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model('Analytics', analyticsSchema);
