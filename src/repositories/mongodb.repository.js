import { MongoClient,ObjectId } from "mongodb";

class MongoRepository {

	constructor() {
		this.mongoClient = new MongoClient("mongodb://localhost:27017");
		this.dataBase = null
		this.collection = null
		this.activeConnections = 0
	}

	async connect () {
		try {
			await this.mongoClient.db().command({ping:1})
		} catch (error) {
            await this.mongoClient.connect();
			throw new Error("Connexion à MongoDB...")
		}
		this.activeConnections++
	} 

	async close () {
		this.activeConnections--
		if(this.activeConnections <= 0){
		console.log("Fermeture de la connexion MongoDB...");
		await this.mongoClient.close()
		}
	}

	
	async createDatabase (name) {
		await this.connect()
		if(name) this.database = this.mongoClient.db(name) 
	}

	async createCollection(name) {
		await this.connect()
		if(name && this.database) this.collection = this.database.collection(name);
	}

	async insertOne(entity) {
		this.connect()
		try {
			const response = await this.collection.insertOne(entity)
			return await this.collection.findOne({ _id: response.insertedId });
		} finally {
			await this.close()
		}
	}

	async find() {
		await this.connect()
		try {
			return await this.collection.find().toArray()
		} finally {
			await this.close()
		}
		
	}

	async findOne(id) {
		await this.connect()
		try {
			return await this.collection.findOne({ _id: new ObjectId(String(id)) })
		} finally {
			await this.close()
		}
		
	}

	async delete(id) {
		await this.connect()
		try {
			const user = await this.findOne(id)
			if(!user)return null
			await this.collection.deleteOne({ _id: new ObjectId(String(user._id)) })
			return user
		} finally {
			await this.close()
		}
	}
	
	async update(id, entity) {
		await this.connect()
		try {
			 await this.collection.updateOne( { _id: new ObjectId(String(id)) }, { $set: entity })
			 return await this.findOne(id)
		} finally {
			await this.close()
		}
		
	}
	
}

process.on("SIGINT", async () => {
    await mongoRepository.close();
    process.exit(0);
});

const mongoRepository = new MongoRepository();
export default mongoRepository;