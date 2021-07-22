import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Cafe Shares</h1>
      <div className='serach'>
        <input type='text' />
      </div>
      <div className='main'>
        <div className='cafe-card'>
          <img src='' alt='' />
          <h2>cafe name</h2>
          <p>description</p>
        </div>
      </div>
    </div>
  );
}
