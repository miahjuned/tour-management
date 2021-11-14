import React, { useEffect, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { AboutOverview, AboutSubTitle, AboutSubTitleBottom, BlogContainer, BlogPost,  BlogPostsCategory, BlogPostsDate, BlogPostsDescription, BlogPostsDescriptionContainer, BlogPostsReading, BlogPostsReadingContainer, BlogPostsShortDescription,  BlogPostTitle, MainContainer, Underline } from '../Style/Style';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
      useEffect(() => {
          fetch(`https://mamar-dukan.herokuapp.com/blogs`)
              .then(res => res.json())
              .then(data => setBlogs(data.blog))
      }, [])
  
      const history = useHistory();
      const handleBlogClick = (id) => {
          history.push(`/blog/${id}`);
      }
  
      function WordCount(str) { 
        const length =  str.split(" ").length;
        return Math.ceil(length/100)
      }
      
    return (
        <div>
            <MainContainer>
                <AboutOverview>
                    <AboutSubTitle> OUR BLOG</AboutSubTitle>
                    <AboutSubTitleBottom>A few words about those who have worked tirelessly</AboutSubTitleBottom>
                    <AboutSubTitleBottom>to make this trip successfully</AboutSubTitleBottom>
                    <Underline style={{marginLeft: "40%"}}/>
                </AboutOverview>

                <BlogContainer>
                    { blogs && blogs.map(blog =>
                        <BlogPost  key={blog._id} >
                            <div style={{position: "relative"}} >
                                
                                <img style={{cursor: "pointer", width: "100%"}} src={blog.img} alt={blog.name} />

                                <BlogPostTitle onClick={() => handleBlogClick(blog._id)}>
                                </BlogPostTitle>

                                <BlogPostsCategory>
                                    {blog.category}
                                </BlogPostsCategory>

                                <BlogPostsDate>
                                    <span className="font-bold">15</span>
                                    <small>March</small>
                                </BlogPostsDate>
                            </div>
                            <BlogPostsDescriptionContainer>
                                <BlogPostsDescription onClick={() => handleBlogClick(blog._id)}>{blog.name}</BlogPostsDescription>
                                <BlogPostsShortDescription>
                                    {blog.description.slice(0, 100)+'...'}
                                </BlogPostsShortDescription>
                            </BlogPostsDescriptionContainer>
                            <BlogPostsReadingContainer>
                                <BlogPostsReading>
                                    <FaClock size={20} style={{marginRight: "10px"}}  />
                                    <span style={{marginLeft: "10px"}}>{WordCount(blog.description)} mins read</span>
                                </BlogPostsReading>
                            </BlogPostsReadingContainer>
                        </BlogPost>
                    )}
                </BlogContainer>


            </MainContainer>
        </div>
    );
};

export default Blogs;

 