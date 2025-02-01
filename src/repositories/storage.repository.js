import path from 'path';
import fs from 'fs';

export class StorageRepository {
  dataBase;
  collection;

  createDatabase(name) {
    const dataBaseName = name ? name : "dataBase";
    this.dataBase = path.join(process.cwd(), dataBaseName);
    if (!fs.existsSync(this.dataBase)) {
      fs.mkdirSync(this.dataBase, { recursive: true });
    }
  }

  createCollection(name) {
    const collectionName = name ? name : "data";
    this.collection = path.join(this.dataBase, `${collectionName}.json`);
    if (!fs.existsSync(this.collection)) {
      fs.writeFileSync(this.collection, JSON.stringify([], null, 2));
    }
  }

  read() {
    const data = fs.readFileSync(this.collection, "utf-8");
    return JSON.parse(data);
  }

  write(data) {
    fs.writeFileSync(this.collection, JSON.stringify(data, null, 2));
  }


}


