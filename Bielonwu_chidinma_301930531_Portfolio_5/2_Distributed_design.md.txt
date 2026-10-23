*File 2: `2_Distributed_Design.md`*

# Distributed Design - Shop Didi

1. Replication:
Atlas Cluster0 Replica Set 1 Primary 2 Secondary across 3 AZs. Factor 3.
Primary writes Orders Payments, Secondary reads Products.
Failover <10s zero downtime.
Read Preference: primaryPreferred Orders/Payments, secondaryPreferred Products.

2. Sharding for Scale:
Customers: shard by customer_id hashed -> even distribution. Or region for locality.
sh.shardCollection("ShopDidiDB.customers", {"customer_id":"hashed"})
Orders: shard by customer_id + order_date -> all orders of customer same shard fast my orders.
sh.shardCollection("ShopDidiDB.orders", {"customer_id":1, "order_date":1})
Products: not sharded initially later by category.
Benefits: Horizontal scaling add shards festive season.

3. CAP Theorem:
Shop Didi needs AP with tunable consistency.
Orders/Payments CP strong consistency no double charge.
Catalog AP eventual OK site remains available.
MongoDB tunable w:majority for orders.

4. Consistency:
Strong for money (majority), Eventual for catalog (local).
WriteConcern majority ReadConcern majority critical.

5. Partition Tolerance:
If partition Lagos<>AWS, replica set continues. App queues orders locally sync when heals.