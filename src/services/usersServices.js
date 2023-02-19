const usersModel = require("../database/usersModel");
const { v4: uuid } = require("uuid");

//Conecta el controlador con el modelo de usuarios

//Manda a chequear el correo y contraseña para ver si son válidos
const checkUserEmail = (email, password) => {
  const id = usersModel.checkUserEmail(email, password);
  if (!id) return false;
  return id;
}

//Manda a pedir un usuario que coincida con la id
const getOneUser = (id) => {
  const oneUser = usersModel.getOneUser(id)
  return oneUser
}

//Manda a chequear un correo para ver si existe
const checkEmail = (email) => {
  return usersModel.checkEmail(email);
}

//Manda a chequear un nombre de usuario para ver si existe
const checkUsername = (username) => {
  return usersModel.checkUsername(username);
}

//Manda a eliminar un usuario que coincida con la id
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

//Manda a crear un nuevo usuario con la información que le llega
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

//Manda a actualizar un usuario con la información que le llega
const updateUser = (newUser) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const currentDate = `${year}-${month}-${day}`;

  newUser = {
    ...newUser,
    "updated_at": currentDate
  };
  const user = usersModel.updateUser(newUser)
  if (!user) return false
  return user

}

//Manda a crear una nueva sesión de un usuario
const addSession = (userId, sessionId) => {
  if (!usersModel.checkSession(sessionId)) {
    usersModel.addSession(userId, sessionId);
  }
};

//Manda a chequear si la sesión existe por su id
const checkSession = (sessionId) => {
  const session = usersModel.checkSession(sessionId);
  if (!session) return false;
  return session.sessionId;
};

//Manda a chequear si la sesión existe por el id del usuario
const checkIfSessionExist = (userId) => {
  const session = usersModel.checkIfSessionExist(userId);
  if (!session) return false;
  return session.sessionId;
}

//Manda a eliminar una sesión de un usuario
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