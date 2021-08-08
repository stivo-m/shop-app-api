class ProductService {
	addProduct = async ({
		userID,
		shopID,
		productName,
		productImages,
		productFeaturedImage,
		productCategory,
		productSubCategory,
		productPrice,
		productStock,
		productDescription,
		productType,
		productSize,
		productColor,
	}) => {
		// adds the product from the database
	};

	updateProduct = async ({
		userID,
		shopID,
		productName,
		productImages,
		productFeaturedImage,
		productCategory,
		productSubCategory,
		productPrice,
		productStock,
		productDescription,
		productType,
		productSize,
		productColor,
	}) => {
		// adds the product from the database
	};
	getProduct = async ({ productID }) => {
		// returns details of product from the database
	};
	removeProduct = async ({ productID }) => {
		// removes this product from the database
		// use soft deletes
	};
}

module.exports = ProductService;
