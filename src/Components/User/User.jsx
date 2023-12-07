import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { UserHeader } from './UserHeader'
import { Feed } from '../Feed/Feed'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStatus } from './UserStatus'
import { UserContext } from '../../UserContext'
import { NotFound } from '../NotFound'

export const User = () => {

  const { data } = React.useContext(UserContext)

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />}/>
        <Route path="postar" element={<UserPhotoPost />}/>
        <Route path="estatisticas" element={<UserStatus />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </section>
  )
}