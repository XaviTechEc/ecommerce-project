import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';

function getCurrentYear() {
  return new Date().getFullYear();
}

let _year: number;
let _currentYear: number;

Given('The current year is {int}', function (year: number) {
  _year = year;
});

When('I ask for the year', function () {
  _currentYear = getCurrentYear();
});

Then('I should be told {string}', function (_expectedCurrentYear: string) {
  assert.strictEqual(_year, _currentYear);
  assert.strictEqual(_currentYear.toString(), _expectedCurrentYear);
});
