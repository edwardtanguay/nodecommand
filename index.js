import { exec } from 'child_process';


const getNpmRoot = () => {
	let r = '';
	exec('npm root -g', (error, stdout, stderr) => {
		r = stdout;
	});
	return r;
};

const npmRoot = getNpmRoot();

console.log(npmRoot);