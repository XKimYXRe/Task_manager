import { MongoClient } from "mongodb";

class MongoRepository {

	constructor() {
		this.mongoClient = new MongoClient("mongodb://localhost:27017");
		this.dataBase = null
		this.collection = null

	}

	async connect () {
		await this.mongoClient.connect()
	} 

	close () {
		this.mongoClient.close()
	}

	
	createDatabase (name) {
		this.database = this.mongoClient.db(name) 
	}

	createCollection(name) {
		this.collection = this.database.collection(name);
	}

	insertOne(entity) {
		try {
			this.connect()
			return this.collection.insertOne(entity)
		} catch (error) {
			throw error
		} finally {
			this.close()
		}
		
	}

	find() {
		try {
			this.connect()
			return this.collection.find()
		} catch (error) {
			throw error
		} finally {
			this.close()
		}
		
	}

	findOne(id) {
		try {
			this.connect()
			return this.collection.findOne(id)
		} catch (error) {
			throw error
		} finally {
			this.close()
		}
		
	}

	delete(id) {
		try {
			this.connect()
			return this.collection.delete(id)
		} catch (error) {
			throw error
		} finally {
			this.close()
		}
		
	}
	
	update(id, entity) {
		try {
			this.connect()
			return this.collection.updateOne(id, entity)
		} catch (error) {
			throw error
		} finally {
			this.close()
		}
		
	}


	
}

export default new MongoRepository()