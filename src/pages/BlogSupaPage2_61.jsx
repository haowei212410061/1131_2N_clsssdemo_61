import '../index.css'
import { FaMugSaucer } from 'react-icons/fa6'
import { FaGlobe } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { supabase } from '../db/clientSupabase'
import Blog_61 from '../components/Blog_61'
//useEffect:當組件被啟動後會useEffect會執行一次
let api_url = 'http://localhost:5000/api/blog_61'
const BlogSupaPage2_61 = () => {
  const [name, setName] = useState('周浩偉')
  const [id, setId] = useState(212410061)
  const [blogs, setBlogs] = useState([])

  async function fetchBlogsFromSupaServer() {
    try {
      let { data, error } = await supabase.from('blog_61').select('*')
      //let response = await fetch(url)
      //const data = await response.json()
      console.log('supabase blogs', data)
      setBlogs(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchBlogsFromSupaServer(api_url)
  }, [])

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>latest blogs from supabase -- </h2>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          {name} {id}
        </h2>
      </div>
      <div className='blogs-center'>
        {blogs?.map((blog) => {
          const { id, title, category, img, description } = blog
          return (
            <Blog_61
              id={id}
              title={title}
              category={category}
              img={img}
              description={description}
            />
          )
        })}
      </div>
    </section>
  )
}
export default BlogSupaPage2_61
