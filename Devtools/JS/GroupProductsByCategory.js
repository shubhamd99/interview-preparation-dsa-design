// https://devtools.tech/questions/s/group-products-by-category---qid---yIfGCWqhyM7TxFu2ZPUj?language=javascript&sort=createdAt

// You are given an array of product objects where each product belongs to a category.

// Your task is to group all products by their category and return an object where:

// Each key represents a category.
// The corresponding value is an array of products belonging to that category.
// The original order of products within each category should be preserved.

const products = [
  { id: 1, category: "Mobile", name: "iPhone" },
  { id: 2, category: "Laptop", name: "MacBook" },
  { id: 3, category: "Mobile", name: "Pixel" },
];

// Output
const output = {
  Mobile: [
    { id: 1, category: "Mobile", name: "iPhone" },
    { id: 3, category: "Mobile", name: "Pixel" },
  ],
  Laptop: [{ id: 2, category: "Laptop", name: "MacBook" }],
};

function groupProductsByCategory(products) {
  if (!Array.isArray(products)) {
    throw new TypeError("Expected an array of products");
  }

  return products.reduce((groupProducts, product) => {
    const { category } = product;

    // Initialize the category if it doesn't exist
    groupProducts[category] ??= [];

    groupProducts[category].push(product);

    return groupProducts;
  }, {});
}
