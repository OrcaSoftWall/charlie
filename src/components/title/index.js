import styles from './index.module.css'
// import '../../fonts/WhiteAngelica.ttf'

const Title = ({ title }) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

export default Title