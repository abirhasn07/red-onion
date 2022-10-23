import React from 'react'
import logo from '../../assets/images/logo2.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import './Header.css'
import { useFoodCartContext } from '../../context/RedOnionContext'
import {Link} from 'react-router-dom'
const Header = ({path}) => {
    const { contextValue} = useFoodCartContext();
    const { cartQuantity, userName, handleLogout } = contextValue
    // console.log(path);

  return (
		<header>
			<div className="header-container container">
				<Link to="/" className="logo">
					<img src={logo} alt="" width={'150px'} />
				</Link>
				<nav>
					<Link to={'/cart'} className="cart-icon">
						<AiOutlineShoppingCart size={'1.2rem'} color="#000" />
						<span className="cart-value">{cartQuantity}</span>
					</Link>

					<div className="user-container">
						{userName ? (
							<div className="login-info">
								<p className="user-name">{userName.displayName}</p>
								<button onClick={handleLogout} className="logout-btn">
									{' '}
									Logout
								</button>
							</div>
						) : (
							<>
								{!path ? (
									<Link to={'/login'} className="">
										<FaUserCircle
											size={'1.5rem'}
											style={{ color: '#F91944' }}
										/>
									</Link>
								) : (
									<></>
								)}
							</>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header