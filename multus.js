const express = require('express');
const os = require('os');

// Get the IP address of a specific interface
const ifaceName = 'eth0'; // or 'en0', 'wlan0', etc.
const interfaces = os.networkInterfaces();
const iface = interfaces[ifaceName];

if (!iface) {
  console.error(`Interface ${ifaceName} not found`);
  process.exit(1);
}

// Find the first IPv4 address (not internal)
const address = iface.find(details => details.family === 'IPv4' && !details.internal);

if (!address) {
  console.error(`No suitable IPv4 address found for interface ${ifaceName}`);
  process.exit(1);
}






const ifaceName2 = 'net1'; // or 'en0', 'wlan0', etc.
const interfaces2 = os.networkInterfaces();
const iface2 = interfaces[ifaceName];

if (!iface2) {
  console.error(`Interface ${ifaceName} not found`);
  process.exit(1);
}

// Find the first IPv4 address (not internal)
const address2 = iface.find(details => details.family === 'IPv4' && !details.internal);

if (!address2) {
  console.error(`No suitable IPv4 address found for interface ${ifaceName}`);
  process.exit(1);
}

// Create two instances of express
const app1 = express();
const app2 = express();

// Define the first server
app1.get('/', (req, res) => {
    res.send('Hello World from interface 1');
});

// Define the second server
app2.get('/', (req, res) => {
    res.send('Hello World from interface 2');
});

console.log(address.address);
console.log(address2.address);

// Start the first server on address 127.0.0.1:3000
app1.listen(3000, address.address, () => {
    console.log('Server 1 running at http://127.0.0.1:3000/');
});

// Start the second server on address 127.0.0.2:3001
app2.listen(3001, address2.address, () => {
   console.log('Server 2 running at http://127.0.0.2:3001/');
});