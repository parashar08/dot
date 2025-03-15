import { MongoClient } from "mongodb";

const url = "mongodb+srv://demo:demoPass@democluster.gbs2x.mongodb.net/";

const client = new MongoClient(url);

const dbName = "testDB";

async function main() {

    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());