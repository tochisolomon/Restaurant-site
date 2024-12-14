import React from 'react';
import Layout from '../components/Layout/Layout';
import {Link} from 'react-router-dom';
// import Banner from '../images/banner.jpg'
import IMAGES from '../images/Images';
import '../styles/HomeStyles.css'


const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${IMAGES.image1})`}} >
          <div className="headerContainer">
            <h1>Master Chef</h1>
            <p>Experience the best foods in Nigeria...!</p>
            <Link to='/menu'>
            <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home