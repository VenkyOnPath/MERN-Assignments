/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let priceByCategory = [];

  for (transaction of transactions){
    let check = priceByCategory.findIndex(obj => obj.category === transaction.category);

    if(check === -1){
      priceByCategory.push({category: transaction.category, totalSpent: transaction.price });
    } else {
      priceByCategory[check].totalSpent += transaction.price;
    }
  }
  return priceByCategory;
}

module.exports = calculateTotalSpentByCategory;
