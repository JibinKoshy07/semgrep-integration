// Example of a vulnerable code to trigger Semgrep
const secret = "my_super_secret_key"; // hardcoded secret

function login(userInput) {
  // Unsafe eval (code injection vulnerability)
  eval(userInput); 
}

const axios = require("axios");
axios.get(`https://api.example.com/data?user=${userInput}`); // potential injection
