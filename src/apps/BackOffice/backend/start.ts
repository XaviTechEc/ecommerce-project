import { BackOfficeBackendApp } from './BackOfficeBackendApp';

void (async () => {
  await main();
})();

async function main() {
  try {
    const server = new BackOfficeBackendApp();
    await server.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
    process.exit(1);
  });
}
