import styles from './Header.module.scss';
import recette from '../assets/images/Logo_recettes_en_famille.png'
function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i class="fa-solid fa-bars mr-15"></i>
      <div className='flex-fill'>
        <img src={recette} alt="logo" />
      </div>
      <ul>
        <button className='btn btn-reverse-primary mr-5'><i class="fa-solid fa-basket-shopping mr-5"></i><span>Panier</span></button>
        <button className='btn btn-primary mr-5'>Connexion</button>
      </ul>
    </header>
  )
}
export default Header