
# Remote Procedure Call

The system is designed to allow client programs to call functions on the server, even if the client and server are written in different programming languages. To do this, I created our own basic Remote Procedure Call (RPC) route, a way for the client and server to communicate with each other over the network. the protocol used for RPC is JSON-RPC, a widely used format for sending data over a network.

Use Python for the server program and JavaScript for the client program via Node.js, which can run on an OS as well as a web browser.

The client sends a JSON file to the server as a request, and the server returns a JSON file as a response.

### The structure is as follows.

[Request]
```
{
  jsonrpc: '2.0',
  method: 'validAnagram',
  id: 1,
  params: [ 'hello', 'yellow' ]
}
```

[Response]
```
{
  jsonrpc: '2.0',
  result: false,
  id: 1
}
```

### The server provides the following functions to the client.
- floor(double x): Truncates the decimal number x to the nearest integer and returns the result as an integer.
- reverse(string s): takes a string s as input and returns a new string that is the reverse of the input string.
- validAnagram(string str1, string str2): Takes two strings as input and returns a boolean indicating whether the two input strings are anagrams of each other.

## Demo
https://user-images.githubusercontent.com/130334969/236553529-406bfbe6-d726-4ce6-9b85-1d622e945640.mov

## 🛠 Skills
Python, Javascript, Node.js
