const User = require("./user");

users = [new User("Uma"), new User("Josh"), new User("Ollie")];

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => {
      return user.getName();
    });
  }

  getIntroductions() {
    return this.users.map((user) => {
      return user.getIntroduction();
    });
  }
}

module.exports = UserBase;
