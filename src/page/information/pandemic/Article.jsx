import React, {useState, useEffect} from 'react'
import ArticleSection from '../../../components/article/ArticleSection'
import { API_KEY_ARTICLE } from '../../../env/env'
import Loading from '../../../components/loader/Loading'
import axios from 'axios'

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
    <div className='bg-virus bg-soft-light'>
        { isLoading ? (
          <Loading/>
        ) : (
        <ArticleSection article={article}/>
        ) }
    </div>
  )
}

export default Article
