import '../index.css'
import { FaMugSaucer } from 'react-icons/fa6'
import { FaGlobe } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
//useEffect:當組件被啟動後會useEffect會執行一次
let api_url = 'http://localhost:5000/api/blog_61'
const BlogNodePage_61 = () => {
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
    <section class='blogs'>
      <div class='section-title'>
        <h2>latest blogs from Node -- </h2>
        <h2>周浩偉 212410061</h2>
      </div>
      <div class='blogs-center'>
        <article class='blog'>
          <img
            src='./images/photo-1.jpg'
            alt='Coffee photo'
            class='img blog-img'
          />
          <div class='blog-content'>
            <span>
              lifestyle <FaMugSaucer />
            </span>
            <h3>seven reasons why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href='#'>read more</a>
          </div>
        </article>
        <article class='blog'>
          <img
            src='./images/photo-2.jpg'
            alt='Coffee photo'
            class='img blog-img'
          />
          <div class='blog-content'>
            <span>
              lifestyle <FaGlobe />
            </span>
            <h3>travel to paris</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href='#'>read more</a>
          </div>
        </article>
        <article class='blog'>
          <img
            src='./images/photo-3.jpg'
            alt='Coffee photo'
            class='img blog-img'
          />
          <div class='blog-content'>
            <span>
              lifestyle <FaMugSaucer />
            </span>
            <h3>seven reasons why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href='#'>read more</a>
          </div>
        </article>
        <article class='blog'>
          <img
            src='./images/photo-4.jpg'
            alt='Coffee photo'
            class='img blog-img'
          />
          <div class='blog-content'>
            <span>
              lifestyle <FaMugSaucer />
            </span>
            <h3>seven reasons why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a href='#'>read more</a>
          </div>
        </article>
      </div>
    </section>
  )
}
export default BlogNodePage_61
