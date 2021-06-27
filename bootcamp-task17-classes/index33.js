const user = {
    _name: "Vrezh",
    _surname: "Oganisyan",
    getFullName: () => {
      return `${user._name} ${user._surname}`;
    },
    getName() {
      return `Mr. ${user._name}`;
    },
    getRawName() {
      return user._name;
    },
    setName(value) {
      if (typeof value === "string" && value.length > 3) {
        user._name = value;
      }
    },
    // getFullName() {
    //   return `${user.name} ${user.surname}`;
    // },
  };
  
  user._name = 121;
  console.log(user.setName(3232));
  console.log(user.getName());