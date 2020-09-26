const userName = 'echo';
const avatar = 'echo.png';

const user = {
  userName,
  avatar,
  setUserName (userName) {
    this.userName = userName;
    return this;
  }
};

console.log(user.setUserName('Foo').userName);