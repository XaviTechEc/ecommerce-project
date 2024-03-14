const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

function getCurrentYear() {
	return new Date().getFullYear();
}

let _year: number;
let _currentYear: number;

Given('The current year is {int}', async function (year: number) {
	_year = year;
});

When('I ask for the year', async function () {
	_currentYear = getCurrentYear();
});

Then(
	'I should be told {string}',
	async function (_expectedCurrentYear: string) {
		assert.strictEqual(_year, _currentYear);
		assert.strictEqual(_currentYear.toString(), _expectedCurrentYear);
	}
);
