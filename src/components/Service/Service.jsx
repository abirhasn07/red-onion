import React from 'react'
import './Service.css'
import {BsArrowRightCircleFill} from 'react-icons/bs'

const Service = () => {
  return (
		<section className="service">
			<div className="service-titles">
				<h2>Why you choose us</h2>
				<p>
					Barton Waited twenty always repaired in within we do an delighted
					offending curiosity my is dashboards at boy prosperous increasing
					surrounded.
				</p>
			</div>
			<div className="service-container">
				<div className="service-cart">
					<img
						src="https://ik.imagekit.io/abirhasan/tr:w-300/adult-blur-blurred-background-687824_1EegPviKl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666121038165"
						alt="service-img"
						loading="lazy"
					/>
					<div className="service-info">
						<h4>Fast Delivery</h4>
						<p>
							Keep your systems in sync with automated web hook based
							notification each time link is paid and how we dream about our
							future
						</p>
						<a href="#">
							See More <BsArrowRightCircleFill />
						</a>
					</div>
				</div>
				<div className="service-cart">
					<img
						src="https://ik.imagekit.io/abirhasan/tr:w-300/chef-cook-food-33614_NC1gAnk91.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666121036504"
						alt="service-img"
						loading="lazy"
					/>
					<div className="service-info">
						<h4>Home Delivery</h4>
						<p>
							Keep your systems in sync with automated web hook based
							notification each time link is paid and how we dream about our
							future
						</p>
						<a href="#">
							See More <BsArrowRightCircleFill />{' '}
						</a>
					</div>
				</div>
				<div className="service-cart">
					<img
						src="https://ik.imagekit.io/abirhasan/tr:w-300/architecture-building-city-2047397_b9epDEaxV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666121038273"
						alt="service-img"
						loading="lazy"
					/>
					<div className="service-info">
						<h4>World Class Chefs</h4>
						<p>
							Keep your systems in sync with automated web hook based
							notification each time link is paid and how we dream about our
							future
						</p>
						<a href="#">
							See More <BsArrowRightCircleFill />{' '}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Service