const user = {
    _name: "Vrezh",
    _surname: "Oganisyan",
    getFullName: () => {
      return `${user._name} ${user._surname}`;
    },
    get name() {
      console.log("hello from get");
      return `Mr. ${user._name}`;
    },
    set name(value = "Guest") {
      console.log("Set is WORKING!!!");
      if (typeof value === "string" && value.length > 3) {
        user._name = value;
      }
    },
  };
  user.name = "Ar"
  console.log(user.name);
  
//   console.log(user.name);
//   console.log(user.name);
//   console.log(user.name);