// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

// Best Time to Buy and Sell Stock II

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock.
// You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.

// Note: You may not engage in multiple transactions simultaneously
// (i.e., you must sell the stock before you buy again).

// Find and return the maximum profit you can achieve.
/**
 * @param {number[]} prices
 * @return {number}
*/
// O(n) time | O(1) Space
var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        // Add to the max profit total if the current price is greater than previous
        // We "sell" when the the opposite is true because we will not buy on days that dip.
        if (prices[i] > prices[i - 1])
            // Add the increse in price to our profit
            maxprofit += prices[i] - prices[i - 1];
    }
    return maxprofit;
};


console.log(maxProfit([7,1,5,3,6,4])); // 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

console.log(maxProfit([1,2,3,4,5])); // 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.

console.log(maxProfit([7,6,4,3,1])); // 0