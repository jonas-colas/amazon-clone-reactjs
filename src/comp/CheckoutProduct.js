import React from 'react'
import '../css/checkoutProduct.css'
import {useStateValue} from '../core/StateProvider'

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
	const [{basket, user}, dispatch] = useStateValue()

	const removeFromBasket = () => {
		//remove the item from the basket
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		})
	}

	return (
		<div className="checkoutProduct" >
			<img src={image} alt="" 
			className="checkoutProduct__image"/>

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title" >
					{title}
				</p>
				<p className="checkoutProduct__price" >
					<small>$</small> <strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating" >
					{Array(rating).fill().map((_, i) =>(
							<p key={i}>
								<i className="fa fa-star" />
							</p>
						))
					}
				</div>
				{!hideButton && (
					<button onClick={removeFromBasket} >
						Remove from Basket
					</button>
				)}
			</div>
		</div>
	)
}

export default CheckoutProduct