const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $group: {
      _id: "$category",
      points: {
        $addToSet: "$points"
      }
    }
  },
  {
    $out: "Category"
  }
];

MongoClient.connect(
  "mongodb+srv://Iglooworks:Bigmilly1@cluster0-wafkz.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Isolated%20Edition&ssl=true",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db("test").collection("questions");
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  }
);
