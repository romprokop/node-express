const os = require('os');

// info about current user
const user = os.userInfo();
const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	reeMem: os.freemem(),
	hostname: os.hostname(),
	platform: os.platform(),
	version: os.version(),
};

console.log("user", {user, os, currentOS});

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)