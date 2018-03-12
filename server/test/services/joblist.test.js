const assert = require('assert');
const app = require('../../src/app');

describe('\'joblist\' service', () => {
  it('registered the service', () => {
    const service = app.service('joblist');

    assert.ok(service, 'Registered the service');
  });
});
