import React from 'react';
import { useFoodCartContext } from '../../context/RedOnionContext';
import './Hero.css';

const Hero = () => {
	const { contextValue } = useFoodCartContext();
	const { query, setQuery, onSubmitData } = contextValue;

	return (
		<section className="hero">
			<img
				src="https://ik.imagekit.io/abirhasan/tr:w-1200/bannerbackground_gV2WJIBvf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666118551909"
				alt=""
				className="banner"
			/>
			<div className="banner-info">
				<h1>Eat & Enjoy The true test</h1>
				<form className="search-food" onSubmit={onSubmitData}>
					<input
						type="text"
						name=""
						id="search"
						placeholder="Search food items..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						required
					/>
					<input type="submit" value="Search" className="search-btn" />
				</form>
			</div>
		</section>
	);
};

export default Hero;
