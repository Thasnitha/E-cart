// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// const Header = ({insideHome}) => {
//   const userWishlist=useSelector(state=>state.whishListReducer)
//   return (
//     <nav className='flex bg-violet-800 fixed w-full p-5 text-white font-bold '>
//         <Link className='text-2xl font-bold' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i>Daily Cart </Link>
//         <ul className='flex-1 text-right'>
//           {  insideHome &&<li className='list-none inline-block px-5'><input type='text' placeholder='Search Products Here !' style={{width:'300px'}} className='rounded p-2'/></li>
//         }
//             <li className='list-none inline-block px-5' ><Link to={'/wishlist'}> <i className='fa-solid fa-heart text-red-600'></i>Wishlist <span className='bg-black text-white rounded p-1'>{userWishlist?.length}</span></Link></li>
//             <li className='list-none inline-block px-5'> <Link to={'/cart'}><i className='fa-solid fa-cart-plus text-green-600'></i>Cart <span className='bg-black text-white rounded p-1'>10</span></Link></li>

//         </ul>
//     </nav>
//   )
// }

// export default Header
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch=useDispatch()
  const userCart=useSelector(state=>state.cartReducer)
  const userwishlist=useSelector(state=>state.wishlistReducer)
  return (
    <nav className='flex bg-violet-700 p-5 fixed w-full text-white font-bold'>
        <Link className='text-2xl font-bold' to={'/'}><i className="fa-solid fa-truck-fast me-1"></i>Daily Cart</Link>
       <ul className='flex-1 text-right'>

          {insideHome&&<li className='list-none inline-block px-5'><input style={{width:'300px'}} className='rounded p-1 text-black' onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} type="text" placeholder='Search Product Here!!!'/></li>}
  
           <li className='list-none inline-block px-5'><Link to={'/Wishlist'}><i className='fa-solid fa-heart text-red-600'></i>Wishlist <span className='bg-black text-white rounded p-1'>{userwishlist?.length}</span></Link></li>
            <li className='list-none inline-block px-5'><Link to={'/Cart'}><i className='fa-solid fa-cart-plus text-green-600'></i>Cart <span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link></li>
       </ul>

    </nav>
  )
}

export default Header