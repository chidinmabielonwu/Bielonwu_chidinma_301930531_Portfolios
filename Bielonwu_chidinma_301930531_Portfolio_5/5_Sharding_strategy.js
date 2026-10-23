*File 5: `5_Sharding_Strategy.js`*

// Sharding Strategy Shop Didi
sh.enableSharding("ShopDidiDB");
sh.shardCollection("ShopDidiDB.customers", { "customer_id": "hashed" });
sh.shardCollection("ShopDidiDB.orders", { "customer_id": 1, "order_date": 1 });
sh.shardCollection("ShopDidiDB.Products", { "category": 1 });
sh.status();
db.customers.getShardDistribution();
sh.addShardTag("shard0001", "NG_EU");
sh.addShardTag("shard0002", "DIASPORA_US");
sh.addTagRange("ShopDidiDB.customers", { "address.country": "Nigeria", customer_id: MinKey }, { "address.country": "Nigeria", customer_id: MaxKey }, "NG_EU");
sh.isBalancerRunning();
sh.startBalancer();
