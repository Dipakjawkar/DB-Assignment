![image](https://github.com/Dipakjawkar/DB-Assignment/assets/120739704/85ba5206-c780-4747-a48c-2bec06b5b159)

Questions

1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram. =>
On the website, there are different kinds of products belonging to specific categories. Therefore, two different models or schemas are needed: one for storing products and another for storing catering names. Each product category can belong to many products, indicating a one-to-many relationship.

3. How could you ensure that each product in the "Product" table has a valid category assigned to it? =>
First, we check if the category ID exists in the database. If it's found, we apply it to the product. If it doesn't exist, we create it and then apply it to the product.

4. Create schema in any Database script or any ORM (Object Relational Mapping). =>
I have created a schema using Mongoose in Node.js.




