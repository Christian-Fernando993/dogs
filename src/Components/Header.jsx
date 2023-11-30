import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
// import { ReactComponent as Dogs }  from '../Assets/dogs.svg'

import Dogs from '../Assets/dogs.svg'
import { UserContext } from '../UserContext'

export const Header = () => {
  const { data } = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <img src={Dogs}/>
          {/* <Dogs/> */}
        </Link>
        { data && data.email}
          {data}
            <Link className={styles.login} to='/login'>
          {context.usuario}
          Login / Criar
        
        </Link>
      </nav>
    </header>
  )
}
