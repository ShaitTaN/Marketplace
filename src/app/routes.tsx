export enum routesLinksEnum {
	main = '/',
	// product
	product = '/product/:productId',
	productAllreviews = '/product/:productId/all-reviews',
	// brand profile
	brandProfile = '/brand-profile/:brandId',
	brandProfileAllReviews = '/brand-profile/:brandId/all-reviews',
	// cart
	cart = '/cart',
	checkout = '/cart/checkout',
	// user profile
	baseUserProfile = '/user-profile/',
	userProfileMain = 'main',
	userProfileSavedPublishs = 'saved-publishs',
	userProfileDelivery = 'delivery',
	userProfileSubscriptions = 'subscriptions',
	userProfileChecks = 'checks',
	userProfileReviews = 'reviews',
	userProfilePurchasedProducts = 'purchased-products',
	//
	catalog = '/category/:category',
	login = '/login',
	register = '/register',
	favourites = '/favourites',
}
