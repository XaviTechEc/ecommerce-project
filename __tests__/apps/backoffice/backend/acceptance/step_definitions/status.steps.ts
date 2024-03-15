import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import { BackOfficeBackendApp } from '../../../../../../src/apps/BackOffice/backend/BackOfficeBackendApp';

let _request: request.Test;
let app: BackOfficeBackendApp;

BeforeAll(async () => {
  app = new BackOfficeBackendApp();
  await app.start();
});

AfterAll(async () => {
  await app.stop();
});

Given('I send a GET request to {string}', function (route: string) {
  _request = request(app.httpServer!).get(route);
});

Then('the response status code should be {int}', async function (status: number) {
  await _request.expect(status);
});
