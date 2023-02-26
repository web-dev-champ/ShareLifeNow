import React, {useEffect, useState} from 'react';
//import Chart from '../Chart/Chart';
//import Cards from '../Cards/Cards';
import { fetchData } from '../../api/index';
import styles from './home.module.css';
import './homestyle.css'
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
              <h2 className='subh'> Are you the blood donar, who saved my life? </h2>
            </p>        
          </div>
          <div className='arti'>
            <div className='art'>
              <h1>Blood donation</h1>
              <p>Blood donation is an act of kindness that has the potential to save many lives. Every year, millions of people require blood transfusions due to various reasons such as surgeries, accidents, and medical conditions. Blood donation is a crucial process that ensures a sufficient supply of blood for patients in need. In this blog post, we will discuss the importance of blood donation and why you should consider donating blood.</p>
              <p>Secondly, blood donation has numerous health benefits for the donor. When you donate blood, your body produces new blood cells to replace the ones you have donated. This process helps stimulate the production of new red blood cells, which can improve your overall health. Donating blood also helps reduce the risk of certain health conditions such as heart disease, stroke, and cancer. Moreover, blood donation can also help you check your health status, as your blood will be tested for various diseases such as HIV, hepatitis B, and C.</p>
              <p>Thirdly, blood donation is a crucial process that requires regular donations to maintain an adequate blood supply. The demand for blood is constant, and blood banks require a sufficient supply of blood to meet the needs of patients. Blood donation is the only way to obtain blood, and it is essential to donate blood regularly to ensure that there is enough blood available for patients in need.</p>
              <p>Finally, blood donation is a rewarding experience that can give you a sense of satisfaction and accomplishment. Knowing that you have helped save someone's life can be a fulfilling experience. Additionally, many blood banks offer incentives such as free health checkups and snacks to donors, which can be an added bonus.</p>
              <p>In conclusion, blood donation is a selfless act that can have a profound impact on someone's life. It is a simple and safe process that offers numerous health benefits to the donor. Regular blood donation is essential to maintain an adequate blood supply for patients in need. If you are eligible to donate blood, we encourage you to consider donating blood and help save a life today.</p>
            </div>
             <br /><br />
             <div className='art'>
             <h1>Heart diseases</h1>
             <p><b>Coronary Artery Disease(CAD):</b>CAD is the most common type of heart disease, caused by a buildup of plaque in the arteries that supply blood to the heart. Plaque buildup can cause chest pain (angina) or a heart attack. Prevention: You can prevent CAD by maintaining a healthy weight, quitting smoking, eating a healthy diet that is low in saturated and trans fats, and exercising regularly.</p>
             <p><b>Arrhythmias:</b>Arrhythmias are irregular heartbeats that can cause the heart to beat too fast, too slow, or irregularly. This can lead to dizziness, fainting, and in some cases, sudden cardiac arrest. Prevention: You can prevent arrhythmias by avoiding excessive alcohol and caffeine consumption, managing stress, and maintaining a healthy weight.</p>
             <p><b>Heart Failure:</b>Heart failure is a condition in which the heart cannot pump enough blood to meet the body's needs. This can cause shortness of breath, fatigue, and swelling in the legs and feet. Prevention: You can prevent heart failure by maintaining a healthy weight, managing high blood pressure, controlling diabetes, and avoiding excessive alcohol consumption.</p>
             <p><b>Valve disease: </b>Valve disease occurs when the heart's valves do not work properly, causing blood to flow backward or not flow properly. This can lead to fatigue, shortness of breath, and chest pain. Prevention: You can prevent valve disease by managing high blood pressure, avoiding tobacco use, and maintaining a healthy weight</p>
             </div>
             <br /><br />
             <div className='art'>
             <p><b>Prevention of Heart Disease:</b>Overall, preventing heart disease involves making healthy lifestyle choices. Here are some additional steps you can take to prevent heart disease:
               <ol>
                <li>Get regular check-ups and screenings to monitor your blood pressure, cholesterol levels, and blood sugar levels.</li>
                <li>Quit smoking or never start smoking</li>
                <li>Manage stress through exercise, meditation, or other relaxation techniques.Eat a healthy diet that is low in saturated and trans fats, cholesterol, salt, and added sugars.</li>
                <li>Engage in regular physical activity, aiming for at least 150 minutes of moderate-intensity exercise per week.</li>
               </ol>
               In conclusion, heart disease is a serious health condition that can be prevented by making healthy lifestyle choices. By maintaining a healthy weight, quitting smoking, managing stress, and engaging in regular physical activity, you can reduce your risk of developing heart disease and improve your overall health and well-being

               </p>
               </div>
            </div>
        </div>
    
    )
}

export default Index;
