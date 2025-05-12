const AnalyticsModel = require('../models/Analytics');

const trackAnalytics = (eventType) => {
  return async (req, res, next) => {
    try {
      const caseStudyId = req.params.id;
      const visitorIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

      await AnalyticsModel.create({
        caseStudyId,
        userId: null, // For public views, or set req.user._id if auth
        visitorIP,
        event: eventType,
        additionalData: req.body || {},
      });
    } catch (err) {
      console.error('Analytics tracking failed:', err.message);
    } finally {
      next();
    }
  };
};

module.exports = trackAnalytics;
