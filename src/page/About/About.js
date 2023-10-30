import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from "react-icons/bs";
import styles from "../Home/Home.style.module.css";
import img4 from "..//..//img/Rectangle 420.png";
import SectionTo from '../../components/SectionTo.js';

function About() {
    return (
        <>
            <div className='about'>
                <div className='imgMain'>
                    <h1 className="title">HAQQIMIZDA MƏLUMAT</h1>
                    <div className='transition'>
                        <Link className='link homeLink' to={'/'}>Ana səhifə</Link>
                        <BsChevronDoubleRight className='icon' />
                        <Link className='link buyLink' to={'/about'}>Haqımızda</Link>
                    </div>
                </div>

                <section className={styles.sectionFour}>
                    <div className={styles.boxTo}>
                        <img src={img4} alt="" />
                        <div className={styles.boxThree}>
                            <h3>Biz kimik <span>?</span></h3>
                            <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.


                                Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.
                                <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.</p> </p>
                        </div>
                    </div>
                    <div className={styles.boxMain}>
                        <div className={styles.boxFour}>
                            <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra. </p>
                            <h5>- Anton Çexov</h5>
                        </div>
                    </div>
                    <SectionTo />
                </section>


            </div>
        </>
    )
}

export default About
