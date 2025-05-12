const analyticsService = require('./analytics.service');

class AnalyticsController {
  async getUserAnalytics(req, res) {
    const userId = req.user._id;
    const summary = await analyticsService.getSummaryByUser(userId);
    res.json(summary);
  }

  async getCaseStudyAnalytics(req, res) {
    const caseStudyId = req.params.id;
    const stats = await analyticsService.getCaseStudyStats(caseStudyId);
    res.json(stats);
  }
}

module.exports = new AnalyticsController();
