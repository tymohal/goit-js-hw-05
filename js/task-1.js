const getUserNames = (users) => {
    return users.map(user => user.name);
  };
  
   const users = [
    { id: 1, name: "Moore Hensley" },
    { id: 2, name: "Sharlene Bush" },
    { id: 3, name: "Ross Vazquez" },
    { id: 4, name: "Elma Head" },
    { id: 5, name: "Carey Barr" },
    { id: 6, name: "Blackburn Dotson"},
    { id: 7, name: "Sheree Anthony"}

  ];
  console.log(
    getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764
    },
  ])
  ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
  