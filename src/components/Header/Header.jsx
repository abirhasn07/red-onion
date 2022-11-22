import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo2.png'
import { useFoodCartContext } from '../../context/RedOnionContext'
import './Header.css'
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
						<AiOutlineShoppingCart size={'1.8rem'} color="#000" />
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
											size={'1.8rem'}
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