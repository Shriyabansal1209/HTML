const userAndPassword = 'pepito2017,12345';
const username = userAndPassword.substr(0, 10);
const password = userAndPassword.substr(11);
const template = `The user ${username} has ${password} as password`
console.log(template);