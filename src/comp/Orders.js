import React, {useState, useEffect} from 'react'
import '../css/Orders.css'
import {db} from '../core/firebase'
import {useStateValue} from '../core/StateProvider'
import SingleOrder from './SingleOrder'

function Orders() {
	const [{basket, user}, dispatch] = useStateValue()
	const [orders, setOrders] = useState([])


	useEffect(() => {

		if(user){
			db.collection('users').doc(user?.uid)
			.collection('orders').orderBy('created', 'desc')
			.onSnapshot(snapshot => (

				setOrders(snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
				})))
			))
		}else{
			setOrders([])
		}
		
	}, [user])

	return (
		<div className="orders">
			<h1>Mi Orders</h1>

			<div className="orders__order">
				{orders?.map((order, i) => (
						<SingleOrder key={i} order={order} />
					)
				)}
			</div>
		</div>
	)
}

export default Orders