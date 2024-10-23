import React from 'react'
import { FaMugSaucer } from 'react-icons/fa6'
import { FaGlobe } from 'react-icons/fa6'
const Blog_61 = ({ id, title, category, img, description }) => {
  return (
    <article key={id} className='blog'>
      <img src={img} alt='Coffee photo' className='img blog-img' />
      <div className='blog-content'>
        <span>
          {category}{' '}
          {category === 'lifestyle' ? (
            <FaMugSaucer />
          ) : category === 'travel' ? (
            <FaGlobe />
          ) : (
            ''
          )}
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href='#'>read more</a>
      </div>
    </article>
  )
}

export default Blog_61
