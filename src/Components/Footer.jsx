import styles from './Footer.module.css'
import Dogs2 from '../Assets/dogs-footer.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Dogs2}/>
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  )
}