/**
 *  PROMISES
 *
 *  If the username and password are sapient and sapient, it should
 *  return "Welcome sapient"
 *  ELSE
 *  show the relevant error
 */

const dashboard = user => {
  console.log("Welcome " + user);
};

const loginHandler = function(credentials) {
  return new Promise((resolve, reject) => {
    if (credentials.id === "sapient" && credentials.pwd === "sapient")
      resolve(credentials.id);
    else reject("Login Credentials Mismatch");
  });
};

const getUser = function(userDetails) {
  return new Promise((resolve, reject) => {
    if (!userDetails) {
      reject({ msg: "User Details not Supplied" });
    } else {
      loginHandler(userDetails)
        .then(user => {
          resolve(user);
        })
        .catch(err => {
          reject({ msg: err });
        });
    }
  });
};

/**
 * ****************  TEST CASES  *******************
 */
getUser({ id: "sapient", pwd: "sapient" })
  .then(user => {
    dashboard(user);
  })
  .catch(err => {
    console.log(err.msg);
  });

getUser({ id: "admin", pwd: "admin" })
  .then(user => {
    dashboard(user);
  })
  .catch(err => {
    console.log(err.msg);
  });

  getUser()
  .then(user => {
    dashboard(user);
  })
  .catch(err => {
    console.log(err.msg);
  });
