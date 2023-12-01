import {Routes, Route} from 'react-router-dom'
import { UserHeader } from './UserHeader'
import { Feed } from '../Feed/Feed'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStatus } from './UserStatus'

export const User = () => {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="postar" element={<UserPhotoPost />}/>
        <Route path="estatisticas" element={<UserStatus />} />
      </Routes>
    </section>
  )
}