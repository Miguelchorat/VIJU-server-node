const usersModel = require("../database/usersModel");
const { v4: uuid } = require("uuid");

const checkUserEmail = (email, password) => {
  const id = usersModel.checkUserEmail(email, password);
  if (!id) return false;
  return id;
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
  if (!user) return false

  usersModel.deleteOneUser(id)
  if (!usersModel.getOneUser(id)) {
    return user
  } else {
    return false
  }
}

const createOneUser = (body) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const currentDate = `${year}-${month}-${day}`;
  
  const newUser = {
    "id": uuid(),
    ...body,
    "created_at": currentDate,
    "updated_at": currentDate
  };
  const message = usersModel.insertUser(newUser)
  return message

}

const updateUser = (newUser) => {
  const user = usersModel.updateUser(newUser)
  if (!user) return false
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

const deleteSession = (userId) => {
  const session = usersModel.checkIfSessionExist(userId)
  if (!session) return false
  usersModel.deleteSession(userId)
  if (!usersModel.checkIfSessionExist(userId)) {
    return session
  } else {
    return false
  }
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
  getOneUser,
  deleteSession
};