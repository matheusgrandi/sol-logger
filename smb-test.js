const smb = require('samba-client');

let client = new smb({
  address: '\\\\10.0.0.3\\dados',
  username: 'laboratorio',
  password: 'Tecnicos455'
});

async function getData(){
  await client.dir();
}

getData('/');




