let accounts = [
  {
      firstName: "Joshua",
      lastName: "Alexander",
      balance: 250000,
  },
  {
    firstName: "Matea",
    lastName: "Alexander",
    balance: 500000,
  },
  {
    firstName: "Vashti",
    lastName: "Davis",
    balance: 100,
  },
  {
    firstName: "Glen",
    lastName: "Head",
    balance: 200,
  }
];

// Filtering Methods

// Find
console.log(accounts.find(function(i) {
  return i.balance === 250000
}))

// Filter
console.log(accounts.filter(function(i) {
  return i.lastName.charAt(0) === "A"
}))