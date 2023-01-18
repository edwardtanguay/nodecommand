import { exec } from 'child_process';

/**
 * getNpmRoot
 * 
 * returns the directory of where node_modules is stored on Linux, Mac and Windows
 * 
 * const npmRoot = await tools.getNpmRoot();
 */
export const getNpmRoot = () => {
	return new Promise((resolve) => {
		exec('npm root -g', (error, stdout, stderr) => {
			resolve(stdout);
		});
	});
};