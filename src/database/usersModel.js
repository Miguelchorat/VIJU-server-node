const usersData = require("./users.json")
const sessionsData = require("./sessions.json")
const fs = require("fs")
//Modelo de usuario que se conecta con el JSON

//Recibe del JSON el usuario que coincida con el id
const getOneUser = (id) => {
    const oneUser = usersData.users[id]
    return oneUser
}

//Chequea si el correo y password existe en el JSON y de serlo devuelve la id del usuario
const checkUserEmail = (email, password) => {
    let userId = ''
    Object.keys(usersData.users).forEach(function (id) {
        let result = getOneUser(id)
        if (result.email.toLowerCase() === email.toLowerCase() && result.password === password) userId = id    
    })
    return userId
}

//Chequea si el email existe en el JSON
const checkEmail = (email, userId) => {
    let check = false
    Object.keys(usersData.users).forEach(function (id) {
        if (id !== userId) {
            let result = getOneUser(id)
            if (result.email.toLowerCase() === email.toLowerCase()) check = id
        }
    })
    return check
}

//Chequea si el nombre de usuario existe en el JSON
const checkUsername = (username, userId) => {
    let check = false
    Object.keys(usersData.users).forEach(function (id) {
        if (id !== userId) {
            let result = getOneUser(id)
            if (result.username.toLowerCase() === username.toLowerCase()) {
                check = true
            }
        }

    })

    return check
}

//Inserta un usuario en el JSON
const insertUser = (user) => {
    const id = user.id
    const existingEmail = !!checkEmail(user.email,id)
    const existingUsername = checkUsername(user.username,id)
    
    if (existingEmail && existingUsername) {
        return { success: false, errorEmail: true, errorUsername: true }
    } else if (existingEmail) {
        return { success: false, errorEmail: true, errorUsername: false }
    } else if (existingUsername) {
        return { success: false, errorEmail: false, errorUsername: true }
    }
    
    usersData.users[id] = user
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(usersData, null, 2),
        "utf8"
    )

    return { success: true, errorEmail: false, errorUsername: false }
}

//Actualiza el usuario que le llega por parametros en el JSON
const updateUser = (newUser) => {
    const user = usersData.users[newUser.id]
    if (!user) return false

    user.password = newUser.password
    user.date = newUser.date
    user.updated_at = newUser.updated_at

    usersData.users[newUser.id] = user
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(usersData, null, 2),
        "utf8"
    );

    return newUser
}

//Chequea si la sesión existe en el JSON
const checkSession = (sessionId) => {
    return sessionsData.sessions.find(
        (session) => session.sessionId === sessionId
    );
};

//Chequea si la sesión existe ahora por el nombre de usuario
const checkIfSessionExist = (userId) => {
    return sessionsData.sessions.find((session) => session.userId === userId);
};

//Añade al json una nueva sesión
const addSession = (userId, sessionId) => {
    sessionsData.sessions.push({ userId, sessionId });
    fs.writeFileSync(
        "./src/database/sessions.json",
        JSON.stringify(sessionsData, null, 2),
        "utf8"
    );
};

//Elimina una sessión del JSON
const deleteSession = (id) => {
    const index = sessionsData.sessions.findIndex((session) => session.userId === id);

    if (index !== -1) {
        sessionsData.sessions.splice(index, 1);

        fs.writeFileSync(
            "./src/database/sessions.json",
            JSON.stringify(sessionsData, null, 2),
            "utf8"
        );
    } 
}

//Elimina al usuario que coincida con la id del JSON
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
    deleteOneUser,
    deleteSession
}