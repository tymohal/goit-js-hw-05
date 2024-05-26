const getTotalBalanceByGender = (users, gender) => {
    return users
      .filter(user => user.gender === gender)
      .reduce((totalBalance, user) => totalBalance + parseFloat(user.balance.replace("$", "").replace(",", "")), 0);
  };
  
    const allUsers = [
    { name: "Moore Hensley", gender: "male", balance: "2811" },
    { name: "Sharlene Bush", gender: "female", balance: "3821" },
    { name: "Ross Vazquez", gender: "male", balance: "3793" },
    { name: "Elma Head", gender: "female", balance: "2278" },
    { name: "Carey Barr", gender: "male", balance: "3951" },
    { name: "Blackburn Dotson", gender: "male", balance: "1498" },
    { name: "Sheree Anthony", gender: "female", balance: "2794" }
    ];
  
  const totalBalanceMale = getTotalBalanceByGender(allUsers, "male");
  const totalBalanceFemale = getTotalBalanceByGender(allUsers, "female");
  
  const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863

  