const { CaseStudyModel } = require('../../model/index.model');

class CaseStudyService {
  async createCaseStudy(data, userId) {
    return await CaseStudyModel.create({ ...data, userId });
  }

  async getAllCaseStudies(userId) {
    return await CaseStudyModel.find({ userId });
  }

  async getCaseStudyById(id, userId) {
    const caseStudy = await CaseStudyModel.findOne({ _id: id, userId });
    if (!caseStudy) throw new Error('Case study not found');
    return caseStudy;
  }

  async updateCaseStudy(id, userId, updates) {
    const updated = await CaseStudyModel.findOneAndUpdate(
      { _id: id, userId },
      updates,
      { new: true }
    );
    if (!updated) throw new Error('Case study not found or not authorized');
    return updated;
  }

  async deleteCaseStudy(id, userId) {
    const deleted = await CaseStudyModel.findOneAndDelete({ _id: id, userId });
    if (!deleted) throw new Error('Case study not found or not authorized');
    return { message: 'Deleted successfully' };
  }
}

module.exports = new CaseStudyService();
