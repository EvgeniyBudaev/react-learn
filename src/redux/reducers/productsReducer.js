import {normalizedProducts} from '../../fixtures'

// Массив нормализированных продуктов разворачиваем в объект
const defaultProducts = normalizedProducts.reduce(
	(acc, product) => ({...acc, [product.id]: product}),
	{}
)

// { [productId]: product}
const productsReducer = (products = defaultProducts, action) => {
	const {type} = action

	switch (type) {
		default:
			return products
	}
}

export default productsReducer
