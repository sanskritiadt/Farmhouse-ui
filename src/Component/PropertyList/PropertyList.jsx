import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard/PropertyCard'

const PropertyList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('/alpha-homes/property/allPropertyDetails')
      .then((response) => {
        console.log(response.data);
       
        setList(response.data);
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="card-list">
      {list.map((card) => (
        <Link style={{ textDecoration: 'none' }} to={`/PropertyList/${card.propertyId}`} key={card.propertyId}>
          <PropertyCard key={card.propertyId} name={card.propertyName} address={card.address} price={card.price} image={card.img} />
        </Link>
      ))}
    </div>
  )
}

export default PropertyList;
