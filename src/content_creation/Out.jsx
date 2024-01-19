import React from 'react'
import Home from './Home'
import Community from './Community'
import Creation from './Creation'
import Product from './Product'
import Service from './service'


const Out = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Home />
      <Creation />
      <Product />
      <Service />
      <Community />
      
    </div>
  )
}

export default Out
