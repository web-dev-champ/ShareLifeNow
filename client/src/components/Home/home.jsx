import React, {useEffect, useState} from 'react';
//import Chart from '../Chart/Chart';
//import Cards from '../Cards/Cards';
import { fetchData } from '../../api/index';
import styles from './home.module.css';
//import Footer from '../Footer/footer';
//import SliderHome from '../Slider/SliderHome'


const Index = () => {
    const [data,setData] = useState({})
    useEffect(
      () => {
        async function fetchdata(){
          const response = await fetchData()
          setData({ ...response });
        }
        fetchdata()
      },
    [])
    return (

        <div>
          <div className={styles.container}>
            <p className={styles.para}>
              <h1>ShareLifeNow</h1>
            </p>        
          </div>

        </div>
    
    )
}

export default Index;
