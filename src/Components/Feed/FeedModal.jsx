import React from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import {Error} from '../Helper/Error'
import {Loading} from '../Helper/Loading'
import styles from './FeedModal.module.css'

export const FeedModal = () => {
  
  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options)
  }, [photo, request])
  
  return (
    <div className={styles.modal}>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
      <img src={photo.src} alt="" />
    </div>
  )
}
