const IDatabase = require("../facades/database/Idatabase");

class DatabaseRepository extends IDatabase {
	constructor(client) {
		super();
		this._client = client;
	}

	async connect() {
		try {
			await this._client.connect();
		} catch (error) {
			console.error(e);
		}
	}
	async disconnect() {
		await this._client.close();
	}
}

module.exports = DatabaseRepository;
