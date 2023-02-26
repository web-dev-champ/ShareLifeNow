import React from "react";
import styles from "./plasma.module.css";
import plasma from "./images/plasma.jpg";
import donation from "./images/donation.png";
import validate from "./images/youcan.png";
import notable from "./images/youcannot.png";
import remember from "./images/remember.jpg";

export default function PlasmaInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.flipcard}>
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <p className={styles.heading}>What is Blood</p>
            <img src={plasma} className={styles.image} alt="Avatar" />
          </div>
          <div className={styles.flipcardback}>
            <p className={styles.content}>
              Blood is a specialized bodily fluid that delivers necessary
              substances to the body's cells—such as nutrients and oxygen—and
              transports waste products away from those same cells. It is
              composed of blood cells suspended in a liquid called plasma. Blood
              plays a critical role in the body's defense against infection and
              disease. Blood cells are of mainly three types RBC,WBC &
              platelets.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.flipcard}>
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <p className={styles.heading}>Importance of Donation</p>
            <img src={donation} className={styles.image} alt="Avatar" />
          </div>
          <div className={styles.flipcardback}>
            <p className={styles.content}>
              "<span className={styles.quote}> DONATE BLOOD SAVE LIVES❤️ </span>
              "<br></br>
              Blood donation is a selfless act of donating blood to those in
              need, and it can make a huge difference in the lives of those who
              receive it. It also helps to reduce the risk of certain diseases,
              such as anemia and hemophilia. Additionally, donating blood can
              help to reduce stress levels and improve overall health. Finally,
              donating blood can be a great way to give back to the community
              and help those in need.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className={styles.flipcard}>
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <p className={styles.heading}>You can donate blood if</p>
            <img src={validate} className={styles.image} alt="Avatar" />
          </div>
          <div className={styles.flipcardback}>
            <p>
              <ul className={styles.ulcontent}>
                <li className={styles.licontent}>
                  ✅ if you are 18 years and above some countries amy allow 16
                  year olds to donate blood
                </li>
                <li className={styles.licontent}>
                  ✅ donors must weigh at least 50 kg
                </li>
                <li className={styles.licontent}>
                  ✅ donors must be in good health.
                </li>
                <li className={styles.licontent}>
                  ✅ donors must have a minimum hemoglobin level.
                </li>
                <li className={styles.licontent}>
                  ✅ blood donation centers must be informed about any
                  medications.
                </li>
                <li className={styles.licontent}>
                  ✅donors may be asked about recnet ravel to certain areaa that
                  have a higher risk of transmitting infectious diseases
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className={styles.flipcard2}>
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <p className={styles.heading}>
              Precautions that should be taken while blood Donation
            </p>
            <img src={remember} className={styles.image} alt="Avatar" />
          </div>
          <div className={styles.flipcardback}>
            <p>
              <ul>
                <li className={styles.licontent}>
                  <b>Check your eligibility:</b> Before donating blood, make
                  sure that you meet the eligibility criteria set by the blood
                  bank or donation center. Common factors that can affect
                  eligibility include age, weight, recent illness or
                  vaccination, medications, and recent travel to certain
                  countries.
                </li>
                <li className={styles.licontent}>
                  <b>Eat and drink well:</b> Eat a healthy, balanced meal and
                  drink plenty of fluids (preferably water) before donating
                  blood. This can help prevent dizziness or fainting during the
                  donation process.
                </li>
                <li className={styles.licontent}>
                  <b> Get a good night's sleep:</b>Get a good night's sleep
                  before donating blood to help you feel alert and energized
                  during the process.
                </li>
                <li className={styles.licontent}>
                  <b>Wear appropriate clothing:</b>Wear clothing with sleeves
                  that can be rolled up above the elbow and a shirt that allows
                  easy access to the arm for the blood draw.
                </li>
                <li className={styles.licontent}>
                  <b>Rest after donation: </b>After donating blood, rest for a
                  few minutes and have a snack and drink. Avoid strenuous
                  physical activity or heavy lifting for the next 24 hours.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
