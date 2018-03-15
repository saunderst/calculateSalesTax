var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  return result = salesData.reduce (function (allData, data) {
    let sales = data.sales.reduce((a, b) => a + b);
    let taxes = sales * taxRates[data.province];
    if (data.name in allData) {
      allData[data.name].totalSales += sales;
      allData[data.name].totalTaxes += taxes;
    } else {
      allData[data.name] = {};
      allData[data.name].totalSales = sales;
      allData[data.name].totalTaxes = taxes;
    }
    return allData;
  }, {});
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log (results);
