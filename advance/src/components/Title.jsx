import styles from './Title.module.css'

const Title = () => {
  return (
    <div>
        <h1 className={styles['my-title']}>Título do Módulo (NÃO FAZER)</h1>
        <h1 className={styles.my_title}>Título do Módulo (FAZER)</h1>
    </div>
  )
}

export default Title
