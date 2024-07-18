const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the sytem uptime is seconds
console.log(`System uptime: ${os.uptime()} seconds`);

const curretOS={
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(curretOS);