const { v4: uuid } = require("uuid");
const authenticationService = require("../services/usersServices");
//Comprobación de si el usuario esta logeado o no

//Comprueba que el usuario existe. En caso de existir y no estar logeado le crea una sesión y lo guarda en las cookies.
//En el caso del usuario tener ya una sesión existente solo modificara dicha sessión con otra ID
const authenticateUser = (req, res, next) => {
  const { password, email } = req.body;
  const { cookies } = req;

  console.log(req.body)
  console.log(req.cookies);
  
  if (!password && !email && !cookies.sessionId) {
    res.status(401).send({ message: "No tienes autorización" }).end();
    return;
  }

  if (req.body && password && email) {
    const id = authenticationService.checkUserEmail(email, password);
    if (!id) {
      res.status(401).send({ message: "No tienes autorización" }).end();
      return;
    }

    let sessionId = authenticationService.checkIfSessionExist(id);
    if (!sessionId) {
      sessionId = uuid();
      authenticationService.addSession(id, sessionId);
    }

    res.cookie("sessionId", sessionId, { httpOnly: true ,secure: true, sameSite: 'none'});
    next();
  } else if (cookies.sessionId) {

    const { sessionId } = cookies;
    if (!authenticationService.checkSession(sessionId)) {
      res.status(401).send({ message: "No tienes autorización" }).end();
      return;
    }
    next();
  } else {
    res.status(401).send({ message: "No tienes autorización" }).end();
    throw new Error("Error desconocido");
  }
};

module.exports.authenticateUser = authenticateUser;