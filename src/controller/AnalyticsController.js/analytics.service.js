const {AnalyticsModel} = require('../../model/index.model');

class AnalyticsService {
  async getSummaryByUser(userId) {
    return AnalyticsModel.aggregate([
      { $match: { userId: userId } },
      {
        $group: {
          _id: { caseStudyId: "$caseStudyId", event: "$event" },
          count: { $sum: 1 },
        },
      },
    ]);
  }

  async getCaseStudyStats(caseStudyId) {
    return AnalyticsModel.aggregate([
      { $match: { caseStudyId: caseStudyId } },
      {
        $group: {
          _id: { date: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } }, event: "$event" },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.date": 1 } }
    ]);
  }
}

module.exports = new AnalyticsService();
