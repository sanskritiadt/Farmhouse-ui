import React, { useState, useEffect } from 'react'
import { fetchPropertyDetails } from '../../utils/api'
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard/PropertyCard'

const PropertyList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPropertyDetails();
        setList(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="card-list">
      {list.map((card) => (
        <Link style={{ textDecoration: 'none' }} to={`/PropertyList/${card.id}`} key={card.id}>
          <PropertyCard key={card.propertyId} name={card.propertyName} address={card.address} price={card.price} image={card.img} />
        </Link>
      ))}
    </div>
  )
}

export default PropertyList;
