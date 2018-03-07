const huejay = require('huejay');
const ip = '10.0.1.2';
const username = '';

const client = new huejay.Client({
  host: ip,
  username: username,
});

client.groups.getById(process.argv.pop()).then((group) => {
  group.on = !group.on;
  return client.groups.save(group);
});
