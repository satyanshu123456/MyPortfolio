import test from 'node:test';
import assert from 'node:assert/strict';
import { submitContact, contactHealth } from '../src/controllers/contactController.js';

// Helper to mock Express req and res
function createMockRes() {
  const res = {
    statusCode: 200,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.body = data;
      return this;
    },
  };
  return res;
}

test('contactHealth returns service status and diagnostic flags', () => {
  const req = {};
  const res = createMockRes();

  contactHealth(req, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.status, 'ok');
  assert.equal(typeof res.body.databaseConnected, 'boolean');
  assert.equal(typeof res.body.smtpConfigured, 'boolean');
  assert.ok(res.body.timestamp);
});

test('submitContact fails with 400 when required fields are missing', async () => {
  const req = { body: {} };
  const res = createMockRes();
  let nextCalled = false;

  await submitContact(req, res, () => {
    nextCalled = true;
  });

  assert.equal(res.statusCode, 400);
  assert.equal(res.body.success, false);
  assert.equal(res.body.message, 'Validation failed');
  assert.ok(Array.isArray(res.body.errors));
  assert.ok(res.body.errors.length >= 3);
  assert.equal(nextCalled, false);
});

test('submitContact rejects invalid email format with 400', async () => {
  const req = {
    body: {
      name: 'Satyanshu Gautam',
      email: 'invalid-email-string',
      subject: 'Interview Call',
      message: 'Hello Satyanshu, this is a test message.',
    },
  };
  const res = createMockRes();

  await submitContact(req, res, () => {});

  assert.equal(res.statusCode, 400);
  assert.equal(res.body.success, false);
  assert.ok(res.body.errors.some((err) => err.includes('email')));
});

test('submitContact rejects message that is too short', async () => {
  const req = {
    body: {
      name: 'Satyanshu Gautam',
      email: 'satyanshu@example.com',
      subject: 'Job Opportunity',
      message: 'Hi', // Less than 5 characters
    },
  };
  const res = createMockRes();

  await submitContact(req, res, () => {});

  assert.equal(res.statusCode, 400);
  assert.equal(res.body.success, false);
  assert.ok(res.body.errors.some((err) => err.includes('Message must be at least 5 characters')));
});

test('submitContact succeeds with valid data and handles unconfigured SMTP safely', async () => {
  const req = {
    body: {
      name: 'Recruiter Contact',
      email: 'recruiter@techcorp.com',
      subject: 'Frontend Engineer Opportunity',
      message: 'We are impressed with your SATYANSHU.DEV portfolio and would like to schedule an interview.',
    },
  };
  const res = createMockRes();

  await submitContact(req, res, (err) => {
    if (err) throw err;
  });

  assert.equal(res.statusCode, 201);
  assert.equal(res.body.success, true);
  assert.ok(res.body.data.id);
  assert.equal(typeof res.body.data.emailNotificationSent, 'boolean');
  assert.ok(res.body.message.includes('Thank you for reaching out'));
});
