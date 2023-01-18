import { exec } from 'child_process';

const getNpmRoot = (cb) => {
	exec('npm root -g', (error, stdout, stderr) => {
		cb(stdout);
	});
};

let npmRoot = '';
getNpmRoot((result) => {
	npmRoot = result;
	console.log(`inside: ${npmRoot}`);
});

console.log(`outside: ${npmRoot}`);
