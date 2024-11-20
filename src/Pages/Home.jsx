import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch=useDispatch()
  const{allProducts,loading, errorMsg} = useSelector(state=>state.productReducer)
  console.log(allProducts,loading, errorMsg);
  const[currentPage,setCurrentPage]=useState(1)
  const productPerPage=8
  const totalPages=Math.ceil(allProducts?.length/productPerPage)
  const currentPageProductLastIndex=currentPage * productPerPage
  const currentPageProductFirstIndex=currentPageProductLastIndex-productPerPage
  const visibleAllProducts=allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

  

  useEffect(()=>{
    dispatch(fetchproducts())
  },[])//page load

  const navigatetoNext=()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }

  }
  const navigatetoPrevious=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'> 
   {
    loading?
    <div className='flex justify-center items-center my-5 text-lg'>
      <img width={'70px'} height={'70px'} src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="" />
      Loading.....
    </div>
    :
    <>
      <div className='grid grid-cols-4 gap-4'>
          
           {
            allProducts?.length>0?
            visibleAllProducts?.map(products=>(
            <div key={products.id} className=" rounded border p-2 shadow">
                <img width={'100%'} height={'200px'} src={products?.thumbnail} alt="" />
                <div className='text-center'>
                    <h1 className='text-xl font-bold'>{products?.title}</h1>
                    <Link to={`/${products?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
                </div>
            </div>
            ))
            :
            <div className='flux justify-center items-center font-bold text-red-600 my-5 text-lg'>
              Product not found
            </div>

            }
          
  
      </div>
      <div className='text-2xl text-center font-bold mt-20'>
        <span onClick={navigatetoPrevious} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
        <span>{currentPage} of  {totalPages} </span>
        <span onClick={navigatetoNext} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>

      </div>
   </>}
   </div>

</>
    
  )
}

export default Home