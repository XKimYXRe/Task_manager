import { MongoClient } from "mongodb";

export class UserRepository {
    userList = [];
    db;
    userCollection;

    constructor() {
        this.connectDB();
    }

    async connectDB() {
        try {
        const client = new MongoClient("mongodb://localhost:27017");
        await client.connect();
        this.db = client.db("taskManager");
        this.userCollection = this.db.collection("users");
        
    } catch (err) {
        console.error("Erreur de connexion à MongoDB:", err);
        }
    }

    async save(user) {
        const result = await this.userCollection.insertOne(user);
        user._id = result.insertedId;
        
        return this.findOne(user._id);
    }

    async findAll() {
        return await this.userCollection.find({}).toArray();
    }

    async findOne(id) {
        return await this.userCollection.findOne({ _id: id });
    }

    async delete(id) {
        const userToDelete = await this.findOne(id);
        await this.userCollection.deleteOne({ _id: id });
        
        return userToDelete;
    }

    async update(id, firstName, lastName) {
        const updateData = {};
        if (firstName) updateData._firstName = firstName;
        if (lastName) updateData._lastName = lastName;

        await this.userCollection.updateOne({ _id: id }, { $set: updateData });
        return this.findOne(id);
    }
    }
