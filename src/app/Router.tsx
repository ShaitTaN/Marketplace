import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {BrandProfilePage} from '../pages/BrandProfilePage/BrandProfilePage';
import {CartPage} from '../pages/CartPage/CartPage';
import {CheckoutCartPage} from '../pages/CheckoutCartPage/CheckoutCartPage';
import {ErrorPage} from '../pages/Error/ErrorPage';
import {FavouritesPage} from '../pages/FavouritesPage/FavouritesPage';
import {ForbiddenPage} from '../pages/ForbiddenPage/ForbiddenPage';
import {MainPage} from '../pages/MainPage/MainPage';
import {ProductPage} from '../pages/ProductPage/ProductPage';
import {UserProfileChecksPage} from '../pages/UserProfileChecksPage/UserProfileChecksPage';
import {UserProfileDeliveryPage} from '../pages/UserProfileDeliveryPage/UserProfileDeliveryPage';
import {UserProfilePage} from '../pages/UserProfilePage/UserProfilePage';
import {UserProfilePurchasedProductsPage} from '../pages/UserProfilePurchasedProductsPage/UserProfilePurchasedProductsPage';
import {UserProfileReviewsPage} from '../pages/UserProfileReviewsPage/UserProfileReviewsPage';
import {UserProfileSavedPublishsPage} from '../pages/UserProfileSavedPublishsPage/UserProfileSavedPublishsPage';
import {UserProfileSubscriptionsPage} from '../pages/UserProfileSubscriptionsPage/userProfileSubscriptionsPage';
import {AppLayout} from './layouts/AppLayout';
import {UserProfileLayout} from './layouts/UserProfileLayout';
import {routesLinksEnum} from './routes';
import {BrandProfileAllReviewsPage} from '../pages/BrandProfileAllReviewsPage/BrandProfileAllReviewsPage';
import {ProductAllReviewsPage} from '../pages/ProductAllReviewsPage/ProductAllReviewsPage';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: routesLinksEnum.main,
				element: <MainPage />,
			},
			{
				path: routesLinksEnum.baseUserProfile,
				element: <UserProfileLayout />,
				children: [
					{
						path: routesLinksEnum.userProfileMain,
						element: <UserProfilePage />,
					},
					{
						path: routesLinksEnum.userProfileSavedPublishs,
						element: <UserProfileSavedPublishsPage />,
					},
					{
						path: routesLinksEnum.userProfileDelivery,
						element: <UserProfileDeliveryPage />,
					},
					{
						path: routesLinksEnum.userProfileSubscriptions,
						element: <UserProfileSubscriptionsPage />,
					},
					{
						path: routesLinksEnum.userProfileChecks,
						element: <UserProfileChecksPage />,
					},
					{
						path: routesLinksEnum.userProfileReviews,
						element: <UserProfileReviewsPage />,
					},
					{
						path: routesLinksEnum.userProfilePurchasedProducts,
						element: <UserProfilePurchasedProductsPage />,
					},
				],
			},
			{
				path: routesLinksEnum.favourites,
				element: <FavouritesPage />,
			},
			{
				path: routesLinksEnum.product,
				element: <ProductPage />,
			},
			{
				path: routesLinksEnum.productAllreviews,
				element: <ProductAllReviewsPage />,
			},
			{
				path: routesLinksEnum.brandProfile,
				element: <BrandProfilePage />,
			},
			{
				path: routesLinksEnum.brandProfileAllReviews,
				element: <BrandProfileAllReviewsPage />,
			},
			{
				path: routesLinksEnum.cart,
				element: <CartPage />,
			},
			{
				path: routesLinksEnum.checkout,
				element: <CheckoutCartPage />,
			},
		],
	},
	{
		path: '*',
		element: <ForbiddenPage />,
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
