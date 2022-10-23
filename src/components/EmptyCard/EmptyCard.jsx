import React from 'react'
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './EmptyCard.css';
const EmptyCard = () => {
	return (
		<section className="empty-card">
			<Header />
			<div className="container">
				<div>
					<BsCart2 size={'10rem'} className="empty-cart-icon" />
				</div>
				<div className="empty-cart-content">
					<h3 className="empty-cart-title">
						uh- oh ! your cart appears to be empty please try buy somethings
					</h3>
					<Link to={'/'} className="empty-cart-btn">
						Shop Now
					</Link>
				</div>
			</div>
		</section>
	);
};

export default EmptyCard;