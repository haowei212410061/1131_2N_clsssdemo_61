import '../index.css'
import { FaMugSaucer } from 'react-icons/fa6'
import { FaGlobe } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
//useEffect:當組件被啟動後會useEffect會執行一次
let api_url = 'http://localhost:5000/api/blog_61'
const BlogNodePage_61 = () => {
  const [name, setName] = useState('周浩偉')
  const [id, setId] = useState(212410061)
  const [blogs, setBlogs] = useState([])

  async function fetchBlogsFromNodeServer(url) {
    try {
      let response = await fetch(url)
      const data = await response.json()
      console.log('blogs', data)
      setBlogs(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchBlogsFromNodeServer(api_url)
  }, [])

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>latest blogs from Node -- </h2>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          {name} {id}
        </h2>
      </div>
      <div className='blogs-center'>
        {blogs?.map((blog) => {
          const { id, title, category, img, description } = blog
          return (
            <article className='blog' key={id}>
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
        })}
      </div>
    </section>
  )
}
export default BlogNodePage_61
