import React, {useState, useEffect} from 'react'
import ArticleSection from '../../../components/article/ArticleSection'
import { API_KEY_ARTICLE } from '../../../env/env'
import Loading from '../../../components/loader/Loading'
import axios from 'axios'
import Footer from '../../../components/footer/Footer'

function Article() {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ article, setArticle ] = useState([]);

  useEffect( () => {
      window.scrollTo(0, 0);
      getApiArticle(API_KEY_ARTICLE).then( data => {
          setArticle(data);
          setIsLoading(false);
      } )
  }, [] );

  const getApiArticle = async (api) => {
      const response = await axios.get(api);
      const result = response.data;
      return result;
  }
  return (
    <>
      <Navigation/>
        <div className='bg-virus bg-soft-light'>
            { isLoading ? (
              <Loading/>
            ) : (
            <ArticleSection article={article}/>
            ) }
        </div>
      <Footer/>
    </>
  )
}

export default Article
