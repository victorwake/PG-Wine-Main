import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { getWineDetail, getWinesByName } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

export const ShoppingCart = ({
	allWines,
	setAllWines,
	total,
	countWines,
	setCountWines,
	setTotal,
}) => {

    const dispatch = useDispatch();
    const wine = useSelector((state) => state.wine);
    const clase = useSelector((state) => state.clase);
    const {id} = useParams();

    console.log(id)

    useEffect(() => {
        dispatch(getWinesByName(id))
    }, [dispatch, id])
	const [active, setActive] = useState(false);

	const onDeleteProduct = wine => {
		const results = allWines.filter(
			item => item.id !== wine.id
		);

		setTotal(total - wine.price * wine.quantity);
		setCountWines(countWines - wine.quantity);
		setAllWines(results);
	};

	const onCleanCart = () => {
		setAllWines([]);
		setTotal(0);
		setCountWines(0);
	};
    const onAddProduct = wine => {
		if (allWines.find(item => item.id === wine.id)) {
			const wine = allWines.map(item =>
				item.id === wine.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + wine.price * wine.quantity);
			setCountWines(countWines + wine.quantity);
			return setAllWines([...wine]);
		}

		setTotal(total + wine.price * wine.quantity);
		setCountWines(countWines + wine.quantity);
		setAllWines([...allWines, wine]);
	};

	return (
		<header>
			<h1>Tienda</h1>

			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-wine'>
						<span id='contador-wine'>{countWines}</span>
					</div>
				</div>

				<div
					className={`container-cart-wine ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allWines.length ? (
						<>
							<div className='row-wine'>
								{allWines.map(wine => (
									<div className='cart-wine' key={wine.id}>
										<div className='info-cart-wine'>
											<span className='cantidad-wine-carrito'>
												{wine.quantity}
											</span>
											<p className='titulo-wine-carrito'>
												{wine.nameProduct}
											</p>
											<span className='precio-wine-carrito'>
												${wine.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(wine)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
                <div className='container-items'>
			{wine.map(wine => (
				<div className='item' key={wine.id}>
					<figure>
						<img src={wine.img} alt={wine.wineName} />
					</figure>
					<div className='info-wine'>
						<h2>{wine.wineName}</h2>
						<p className='price'>${wine.price}</p>
						<button onClick={() => onAddProduct(wine)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
			</div>
		</header>
	);
};
