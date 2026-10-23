*File 4: `4_Replication_Config.js`*

// Replication Config Shop Didi
rs.initiate({
_id: "ShopDidiRS",
members: [
{ _id: 0, host: "primary:27017", priority: 2 },
{ _id: 1, host: "secondary1:27017", priority: 1 },
{ _id: 2, host: "secondary2:27017", priority: 0.5 }
]
});
rs.status();
db.isMaster();
db.Orders.insertOne({ order_id: "ORD002", customer_id: "CUST002", total_amount: 85000 }, { writeConcern: { w: "majority", wtimeout: 5000, j: true } });
db.Orders.find({ customer_id: "CUST001" }).readPref("primary");
db.Products.find({ category: "Agbada" }).readPref("secondaryPreferred");
// Atlas connection: mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
