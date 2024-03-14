const common = [
	'--require-module ts-node/register',
	`--format summary --format progress`,
	'--parallel 2',
	`--format-options '{"snippetInterface":"async-await"}'`,
];

const backoffice_backend = [
	...common,
	'__tests__/apps/backoffice/backend/acceptance/features/**/*.feature',
	'--require __tests__/apps/backoffice/backend/acceptance/step_definitions/*.steps.ts',
].join(' ');

module.exports = {
	backoffice_backend,
};
