'use strict';

const logger = require('pino')();

const config = require('../config');

class HealthCheckController {
  constructor() {}

  static healthCheck(req, res, next) {
    logger.info('healthcheck');

    const response = {
      health_check: true,
      deployed_at: config['DEPLOYED_AT'],
    };
    res.json(response);
  }
}

module.exports = {
  HealthCheckController,
};
