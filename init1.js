rs.initiate(
   {
     _id : "shardreplica01",
     members: [
       { _id : 0, host : "shard1:27017" },
     ]
   }
 )
