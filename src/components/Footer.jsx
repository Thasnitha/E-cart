import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-violet-800  text-white'>

    <div style={{height:'250px',marginTop:'20px'}} className='flex w-full p-5 font-bold justify-between'>
        <div className=''>
            <h2><i className='fa-solid fa-truck-fast me-1'></i>E Cart </h2> 
            <p>Designed  and built with all the above in the world by <br />the Luminar team with the help of our contributers. <br />Code licensed Luminar ,docs CC BY 3.0 <br />Currently V5.3.2</p>
        </div>
        <div className=''>
            <h2>Links</h2>
           <ul>
            <li> <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link> 
            </li>
            <li><Link to={''} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          </li>
          <li>  <Link to={''} style={{textDecoration:'none',color:'white'}}> Watch History Page</Link></li>
           </ul>

        </div>
        <div>
            <h2>Guides</h2>
            <ul>
                <li>React</li>
                <li>React Bootstrap</li>
                <li>React Router</li>
            </ul>

        </div>
        <div>
            <h2>Contact us</h2>
            <input placeholder='Enter your Email Here!!!' type="text" className='form-control me-2 rounded p-2'/>
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
            <div className='flex justify-between mt-3'>
              <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-twitter" ></i></i></a>
              <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-instagram" ></i></i></a>
              <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-facebook" ></i></i></a>
              <a href="https://www.linkedin.com/feed/" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-linkedin" ></i></i></a>
              <a href="https://github.com/dashboard" style={{textDecoration:'none',color:'white'}} target='_blank'><i><i class="fa-brands fa-github" ></i></i></a>
              
            </div>
            
        </div>
      


    </div>
    <p style={{marginLeft:'500px'}} className='text-white,'>copyright &copy; June 2024 Batch, E Cart.Built with React Redux </p>
    </div>
  
    
  )
}

export default Footer