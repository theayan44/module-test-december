import React from 'react';
import { useSelector } from 'react-redux';
import Items from '../Components/Items';

const Shop = () => {
  const { loader, data, error } = useSelector(state => state.fetch);

  return (
    <>
      <h1>All Items</h1>
      {loader &&
        <div className="load">
          <h1>Loading...</h1>
        </div>}
      {data && <div className='shop-container'>
        {data.products.map(product => {
          return (
            <Items key={product.id} product={product} />
          );
        })}
      </div>}
      {
        error &&
        <div className="load">
          <h1>{error}</h1>
        </div>
      }
    </>
  )
}

export default Shop;