# Portfolio 5: Distributed and Cloud Database - Shop Didi
Student: Bielonwu Chidinma - 301930531 - MIT 8103
Case Study: Shop Didi - Luxury Nigerian fashion e-commerce 
Users: Customers, Admin, Delivery riders
Data: Products (custom measurements), Customers, Orders, Payments, Delivery
Operations: Add product, place order with custom measurements, update stock, track delivery

Why Distributed & Cloud?
Single-server fails during December Owambe season. Needs HA 24/7, Scalability 10x promo, Durability no order loss, Low Latency Lagos Abuja UK diaspora.
Solution: MongoDB Atlas (already deployed Portfolio 4) - Replica Set 3 nodes across 3 AZs - inherently distributed & cloud.

Deliverables in this portfolio:
- Replication (Replica Set 3 nodes, failover <10s)
- Sharding (design for 1M orders, shard key customer_id)
- Availability (99.995% SLA, backups)
- Consistency (tunable: majority for orders, eventual for catalog)
- Deployment Evidence (Atlas Cluster0 AWS eu-west-1 ShopDidiDB)

Cloud: Atlas AWS eu-west-1 Cluster0 ShopDidiDB Products customers Orders
