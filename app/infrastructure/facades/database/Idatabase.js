const strings = require("../../../domain/value_objects/strings");

/*
    @abstract:	Class [IDatabase]
	@desc:		Returns an abstract class that defines a contract for all Database classes	
*/

class IDatabase {
	constructor() {
		if (this.constructor == IDatabase) {
			throw new Error(strings.abstract_classes_error);
		}
	}

	async connect() {
		// connect to the database drivers
	}

	disconnect() {
		// disconnect from the database driver
	}
}

module.exports = IDatabase;
