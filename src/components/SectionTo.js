import React from 'react';
import styles from "../page/Home/Home.style.module.css";
import img4 from "..//img/Rectangle 420 (1).png";
import { useTranslation } from 'react-i18next';
function SectionTo() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.sectionTo}>
                <div className={styles.boxTo}>
                    <div className={styles.boxThree}>
                        <h3>{t('aboutUs.titleTo')}</h3>
                        <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.


                            Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.
                            <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.</p> </p>
                    </div>
                    <img src={img4} alt="" />
                </div>

                <div className={styles.boxFour}>
                    <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. </p>
                    <h5>- Anton Çexov</h5>
                </div>
            </div>
        </>
    )
}

export default SectionTo;
