import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../componantes/ProductItem';
import Title from '../componantes/Title';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy =  productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0) {
      productsCopy =  productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
   
    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
    
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;  
    }

  }

  useEffect(() => {
    applyFilter();  // Apply filters first
  }, [category, subCategory, products]);
  
  useEffect(() => {
    sortProduct();  // Then sort products after filters
  }, [sortType]);

  return (
  <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
    {/* Filter Options */}
    <div className='min-w-60'>
      <p
        onClick={() => setShowFilter(!showFilter)}
        className='my-2 text-xl flex items-center cursor-pointer gap-2'
      >
         FILTERS
        <img
          className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          src={assets.dropdown}
          alt=''
        />
              </p>
       category Filter 
      <div
        className={`border border-gray-300 pl-5 py-3 mt-6 ${
          showFilter ? '' : 'hidden'
        } sm:block`}
      >
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory}/>Women
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value={'Kides'} onChange={toggleCategory}/>Kides
          </p>
        </div>
      </div>
      {/* SubCategory Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 my-5 ${
          showFilter ? '' : 'hidden'
        } sm:block`}
      >
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value={'Dresses'} onChange={toggleSubCategory}/>Dresses
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value={'Jumpsuits'} onChange={toggleSubCategory}/>Jumpsuits
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value={'Sets'} onChange={toggleSubCategory}/>Sets
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' value={'Jackets'} onChange={toggleSubCategory}/>Jackets
          </p>
        </div>
      </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
           {/* product sort */}
           <select onChange={(e)=>setSortType(e.target.value)} className ='border-2  border-gray-300 text-sm px-2'>
            <option value="Relavent">Sort: Relavent</option>
            <option value="low-high">Sort: Low to High</option>
            <option value="high-low">Sort: High to Low</option>
        </select>
        </div>
        {/* map product */} 
          <div className ='grid  grid-cols-2  mb:grid-cols-3  lg:grid-cols-4  gap-4  gap-y-6 '>
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index}  name={item.name} id={item._id} price={item.price} image={item.image}></ProductItem>
              ))
            }
          </div>
      </div>
    </div>
  );
};

export default Collection;
