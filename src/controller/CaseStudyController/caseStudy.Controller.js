const caseStudyService = require('./caseStudy.service');

class CaseStudyController {
  async create(req, res) {
    try {
      const result = await caseStudyService.createCaseStudy(req.body, req.user.id);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const results = await caseStudyService.getAllCaseStudies(req.user.id);
      res.status(200).json(results);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const result = await caseStudyService.getCaseStudyById(req.params.id, req.user.id);
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const result = await caseStudyService.updateCaseStudy(req.params.id, req.user.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await caseStudyService.deleteCaseStudy(req.params.id, req.user.id);
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new CaseStudyController();
