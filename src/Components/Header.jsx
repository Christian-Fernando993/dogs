import { Link } from 'react-router-dom'
import styles from './Header.module.css'
// import { ReactComponent as Dogs }  from '../Assets/dogs.svg'

import Dogs from '../Assets/dogs.svg'


export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <img src={Dogs}/>
          {/* <Dogs/> */}
        </Link>
        <Link className={styles.login} to='/login'>Login / Criar</Link>
      </nav>
    </header>
  )
}
