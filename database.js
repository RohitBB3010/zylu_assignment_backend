import { MongoClient} from "mongodb";

let _db;

export const connectMongodb = async () => {
    try{
        
        console.log("attempting to connect");
        
        const client = new MongoClient('mongodb+srv://rohit:Rohit123%40@cluster0.ha5sq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        
        await client.connect();
        
        _db = client.db('zylu_assignment');

        console.log("Database connected");

    } catch (err){
        console.log(err);
        throw err;
    }
}

export const getDb = () => {
    if(!_db){
        throw new Error('No database found');
    } 
    return _db;
}