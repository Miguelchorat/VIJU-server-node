const usersModel = require("../database/usersModel");
const { v4: uuid } = require("uuid");

const checkUserEmail = (email, password) => {
  const user = usersModel.checkUserEmail(email, password);
  if (!user) return false;
  return user.id;
}

const getOneUser = (id) => {
  const oneUser = usersModel.getOneUser(id)
  return oneUser
}

const checkEmail = (email) => {
  return usersModel.checkEmail(email);
}

const checkUsername = (username) => {
  return usersModel.checkUsername(username);
}

const deleteOneUser = (id) => {
  const user = usersModel.getOneUser(id)
  if(!user) return false
  
  usersModel.deleteOneUser(id)
  if(!usersModel.getOneUser(id)){
    return user
  } else {
    return false
  } 
}

const createOneUser = (body) => {
  const newUser = {    
        ...body,
        "id": uuid(),
        "created_at": new Date().toLocaleDateString,
        "updated_at" : new Date().toLocaleTimeString
    };
    const user = usersModel.insertUser(newUser)
    if(!user) return false
    return user
  
}

const updateUser = (newUser) => {
    const user = usersModel.updateUser(newUser)
    if(!user) return false
    return user
  
}

const addSession = (userId, sessionId) => {
  if (!usersModel.checkSession(sessionId)) {
    usersModel.addSession(userId, sessionId);
  }
};

const checkSession = (sessionId) => {
  const session = usersModel.checkSession(sessionId);
  if (!session) return false;
  return session.sessionId;
};

const checkIfSessionExist = (userId) => {
  const session = usersModel.checkIfSessionExist(userId);
  if (!session) return false;
  return session.sessionId;
}

module.exports = {
  checkUserEmail,
  addSession,
  checkSession,
  checkIfSessionExist,
  createOneUser,
  checkEmail,
  checkUsername,
  updateUser,
  deleteOneUser,
  getOneUser
};