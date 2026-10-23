*File 6: `6_Availability_Consistency.md`*

# Availability Consistency Deployment - Shop Didi

1. Availability 99.9%+:
Replica Set failover <10 sec Primary AZ1 fails Secondary AZ2 becomes Primary.
Production M10+ Multi-Region Primary eu-west-1 Secondary eu-central-1 Read replica us-east-1 diaspora.
App retry retryWrites=true. Circuit breaker queue Redis if down.
Evidence Atlas Metrics Uptime 100% 7 days replSetGetStatus healthy.

2. Consistency Tunable:
Strong writeConcern majority readConcern majority readPreference primary for Orders Payments Stock decrement prevents overselling.
Eventual writeConcern 1 readConcern local readPreference secondaryPreferred for Product views reviews.
Transaction: startTransaction majority, update stock inc -qty, insert order, commit. If fails rollback no half-order.

3. Architecture:
Customers Mobile Web -> Frontend Vercel -> Backend Render -> Atlas Cloud AWS Replica Set 3 nodes Backups S3 Future Shards Nigeria Diaspora

4. Why Cloud vs On-Premise:
No server maintenance Lagos power issues, pay-as-grow Free start, global reach 200ms Nigeria EU acceptable, security encryption IP whitelisting 2FA.

5. Checklist:
- Atlas Cluster overview screenshot AWS Region Replica Set
- ShopDidiDB collections screenshot Portfolio 4 reused as cloud proof
- Connection string screenshot blur password
- Metrics screenshot
- This docs explaining replication sharding availability consistency deployment evidence
