class ShopService {
	// shops
	addShop = async ({
		userID,
		shopName,
		shopCategory,
		shopDescription,
		shopTags,
		shopStatus,
	}) => {
		// creates a shop with passed variables
	};

	getShop = async ({ shopID }) => {
		// returns the shop with the given ID
	};

	updateShop = async ({
		shopID,
		shopName,
		shopCategory,
		shopDescription,
		shopTags,
		shopStatus,
	}) => {
		// updates the shop with passed variables
	};

	removeShop = async ({ shopID }) => {
		// removes the shop with the given ID
	};
}

module.exports = ShopService;
