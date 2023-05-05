const axios = require('axios').default;
const readline = require('readline');
const SERVER_URL = 'http://localhost:8000';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('which method? [floor / reverse / validAnagram]: ', (method) => {
  let requestData = {
    jsonrpc: '2.0',
    method: method,
    id: 1,
  };
  
  if (method === 'floor') {
    rl.question('input a number: ', (inputNum) => {
      requestData.params = [Number(inputNum)];
      
      axios.post(SERVER_URL, requestData)
        .then(response => {
          console.log(response.data);
          rl.close();
        })
        .catch(error => {
          console.error(error);
          rl.close();
        });
    });
  } else {
    rl.question('input params (no space comma separated): ', (params) => {
      requestData.params = params.split(',');
      axios.post(SERVER_URL, requestData)
        .then(response => {
          console.log(response.data);
          rl.close();
        })
        .catch(error => {
          console.error(error);
          rl.close();
        });
    });
  }
});
