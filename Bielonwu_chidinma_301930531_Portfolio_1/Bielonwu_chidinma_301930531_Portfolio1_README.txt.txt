SHOP DIDI E-COMMERCE PLATFORM- MIT8103 Portfolio 1
Name- BIELONWU CHIDINMA
School ID- 301930531

CASE STUDY- Shop Didi, An online marketplace in Nigeria.

1. ORGANISATION DESCRIPTION:
Shop Didi is a luxury fashion e-commerce platform that caters to premium clients who are intentional about neatly tailored unique pieces and designs, customed made by us.
Our users are Customers(fashion buyers), Designers (vendors), Store Admins and Delivery partners.
We handle inventory, curated product listing, client orders & preorders, secured payment options, verified delivery and customer reviews and ratings.
The goal and standard is to provide unique tailored and luxury Nigeria owned pieces to our premium clients.
 

2. ENTITIES AND ATTRIBUTES:
- Customers (customer_id, full_name, email, phone, address, measurements)
- Designers (designer_id, designer_name, brand_name)
- Categories (category_id, category_name - e.g., Agbada, Kaftan, Gowns)
- Products (product_id, product_name, price, fabric_type, size, stock_qty, is_custom)
- Orders (order_id, customer_id, order_date, total_amount, order_status)
- Order_Items (order_item_id, order_id, product_id, quantity, custom_measurements)
- Payments (payment_id, order_id, payment_method, payment_status)
- Deliveries (delivery_id, order_id, delivery_address, delivery_status)
- Reviews (review_id, customer_id, product_id, rating, comment)

3. RELATIONSHIPS:
- A Customer can place many Orders (1 to Many)
- A Designer can create many Products (1 to Many)
- A Category has many Products (1 to Many)
- An Order contains many Order_Items (1 to Many)
- A Product appears in many Order_Items (1 to Many)
- An Order has one Payment (1 to 1)
- An Order has one Delivery (1 to 1)

4. ER DIAGRAM:
See attached file:
Bielonwu_Chidinma_301930531_ER_Diagram.png

5. RELATIONAL SCHEMA:
- Customers(customer_id PK, full_name, email, phone, address, measurements)
- Designers(designer_id PK, designer_name, brand_name)
- Categories(category_id PK, category_name)
- Products(product_id PK, product_name, price, fabric_type, size, stock_qty, is_custom, designer_id FK, category_id FK)
- Orders(order_id PK, customer_id FK, order_date, total_amount, order_status)
- Order_Items(order_item_id PK, order_id FK, product_id FK, quantity, custom_measurements)
- Payments(payment_id PK, order_id FK, payment_method, payment_status)
- Deliveries(delivery_id PK, order_id FK, delivery_address, delivery_status)
- Reviews(review_id PK, customer_id FK, product_id FK, rating, comment)

6. KEYS AND CONSTRAINTS:
- Primary Keys: customer_id, designer_id, category_id, product_id, order_id, order_item_id, payment_id, delivery_id, review_id ensure each record is unique.
- Foreign Keys: Products.designer_id references Designers, Products.category_id references Categories, Orders.customer_id references Customers, Order_Items references Orders and Products, Payments and Deliveries reference Orders, Reviews references Customers and Products. This enforces referential integrity.
- Constraints:
* NOT NULL for full_name, email, product_name, price
* UNIQUE for email to avoid duplicate customers
* CHECK for price > 0, stock_qty >= 0, rating between 1 and 5
* DEFAULT for order_status = 'Pending', payment_status = 'Pending'

7. NORMALISATION EXPLANATION:
- 1NF: All attributes contain atomic values. No repeating groups. For example, measurements and custom_measurements are stored as single values per record, and product categories are separated into Categories table.
- 2NF: All tables have single-column primary keys, so all non-key attributes fully depend on the whole primary key. No partial dependencies. Product details depend only on product_id, not on category.
- 3NF: No transitive dependencies. For example, designer_name and brand_name are moved to Designers table, not in Products. Category_name is in Categories table. Customer details are not duplicated in Orders; Orders only stores customer_id.
- The database is in 3NF, suitable for Shop Didi to avoid data redundancy and ensure luxury inventory accuracy.
