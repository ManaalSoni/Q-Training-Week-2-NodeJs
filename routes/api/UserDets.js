const createUID = () => {
    const {v4 : uuidv4} = require('uuid')
    return uuidv4()
}

const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = (myPlaintextPassword) => {
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        if (err){
            console.log(err);
        } 
        return hash 
    });
}

const user = [
    {
        id: createUID(),
        username: 'Manaal',
        email: 'abc@xyz.com',
        mobile: 1234567890,
        profilePic: 'propic1.jpg',
        password: hashPassword('abc123')
    }
]

module.exports = {
    user,
    createUID,
    hashPassword
}