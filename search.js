const huejay = require('huejay');
const ip = '10.0.1.2';
const username = '';

const client = new huejay.Client({
  host: ip,
  username: username,
});

const groups = client.groups.getAll().then(groups => {
  const data = groups.map((group) => {
    return {
      title: group.attributes.attributes.name,
      subtitle: group.state.attributes.all_on ? 'On' : 'Off',
      arg: group.attributes.attributes.id,
      icon: {
        path: group.state.attributes.all_on ? 'on.png' : 'off.png',
      },
    };
  });

  console.log(JSON.stringify({
    items: data,
  }));
});
