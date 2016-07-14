import { Wit } from 'node-wit';
const client = new Wit({accessToken: 'Y26YDILORJAO7EWMCHECGKDZLLPUVDBX'});

const stdin = process.openStdin();

stdin.addListener("data", function(d) {
  client.converse('my-user-session-42', d.toString().trim(), {})
  .then((data) => {
    console.log(`> Robot says: ${data.msg}`);
  })
  .catch(console.error);
});
