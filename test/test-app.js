var request = require("supertest");
var express = require("express");
var should = require("should");
var fs = require("fs");

// Start app in test environment
process.env.NODE_ENV = 'test';
var app = require("../app/app.js");

before(function() {
	// Bring the ruckus
})

describe('Test static paths', function() {
	describe('Says hello', function() {
		it('responds with plain text', function(done) {
			request(app)
				.get('/hello')
				.expect(200, done);
		});
	});

	describe('Root redirects to /hello', function() {
		it('responds with 302', function(done) {
			request(app)
				.get('/')
				.expect(302, done);
		});
	});
});

after(function() {
	// Teardown some shit
});
