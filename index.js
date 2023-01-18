import * as tools from './tools.js';

const npmRoot = await tools.getNpmRoot();
console.log(`The npm root is: [${npmRoot}]`);
