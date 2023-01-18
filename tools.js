import { exec } from 'child_process';

export const getNpmRoot = () => {
	return new Promise((resolve) => {
		exec('npm root -g', (error, stdout, stderr) => {
			resolve(stdout);
		});
	});
};