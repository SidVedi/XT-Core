/**
 *  If the username and password are sapient and sapient, it should
 *  return "Welcome sapient"
 *  ELSE
 *  show the relevant error
 */

const dashboard = user => {
  console.log("Welcome " + user);
};

const loginHandler = function(credentials, reject, resolve) {
  if (credentials.id === "sapient" && credentials.pwd === "sapient")
    resolve(credentials.id);
  else reject({ msg: "Login Credentials Mismatch" });
};

const getUser = function(userDetails, reject, resolve) {
  if (!userDetails) {
    reject({ msg: "User Details not Supplied" });
  } else {
    loginHandler(userDetails, reject, resolve);
  }
};

/**
 * ****************  TEST CASES  *******************
 */

getUser(
  { id: "sapient", pwd: "sapient" },
  err => {
    console.log(err.msg);
  },
  user => {
    dashboard(user);
  }
);

getUser(
  { id: "admin", pwd: "admin" },
  err => {
    console.log(err.msg);
  },
  user => {
    dashboard(user);
  }
);

getUser(
  null,
  err => {
    console.log(err.msg);
  },
  user => {
    dashboard(user);
  }
);
