const usersData = require("./users.json")
const sessionsData = require("./sessions.json")
const fs = require("fs")

const getOneUser = (id) => {
    const oneUser = usersData.users[id]    
    return oneUser
}

const checkUserEmail = (email, password) => {
    return usersData.users.find(
        (user) => user.email === email && user.password === password
    )
}

const checkEmail = (email) => {
    let check = false
    Object.keys(usersData.users).forEach(function(id) {
        let result = getOneUser(id)
        if(result.email.toLowerCase() === email.toLowerCase()) check = true       
    })
    return check
}

const checkUsername = (username) => {
    let check = false
    Object.keys(usersData.users).forEach(function(id) {
        let result = getOneUser(id)
        if(result.username.toLowerCase() === username.toLowerCase()) check = true       
    })    
    return check
}

const insertUser = (user) => {
    const id = user.id
    usersData.users[id] = user

    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(usersData, null, 2),
        "utf8"
    );

    return user;
}

const updateUser = (newUser) =>{
    const user = usersData.users[newUser.id]
    if(!user) return false

    usersData.users[newUser.id] = newUser
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(usersData, null, 2),
        "utf8"
    );

    return newUser
}

const checkSession = (sessionId) => {
    return sessionsData.sessions.find(
        (session) => session.sessionId === sessionId
    );
};

const checkIfSessionExist = (userId) => {
    return sessionsData.sessions.find((session) => session.id === userId);
};

const addSession = (userId, sessionId) => {
    sessionsData.sessions.push({ userId, sessionId });
    fs.writeFileSync(
        "./src/database/sessions.json",
        JSON.stringify(sessionsData, null, 2),
        "utf8"
    );
};

const deleteOneUser = (id) => {
    delete usersData.users[id]
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(usersData, null, 2),
        "utf8"
    );
}

module.exports = {
    getOneUser,
    checkUserEmail,
    insertUser,
    checkIfSessionExist,
    checkSession,
    addSession,
    checkEmail,
    checkUsername,
    updateUser,
    deleteOneUser
}