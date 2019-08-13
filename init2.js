rs.initiate(
   {
     _id : "shardreplica02",
     members: [
       { _id : 0, host : "shard2:27017" },
     ]
   }
 )
