const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
  };
  
  const users = [
    { id: 1, name: "Moore Hensley", friends: ["Sharron Pace"] },
    { id: 2, name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
    { id: 3, name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"] },
    { id: 4, name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
    { id: 5, name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
    { id: 6, name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] },
    { id: 7, name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }
  ];
  const allUsers = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  
  console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
  // [
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]
  
  console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
  // [
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"]
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"]
  //   }
  // ]
  
  console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
  