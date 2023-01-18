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
			stdout = 'WARN: this is a warning\n' + stdout;
			// resolve(stdout);

			//remove any warnings that might come with output
			stdout = stdout.trim('\n');
			const lines = stdout.split('\n');
			console.log(lines)
			if (lines.length > 1) {
				stdout = lines[lines.length - 1];
			}

			// stdout = stdout.trim();

			resolve(stdout);
		});
	});
};