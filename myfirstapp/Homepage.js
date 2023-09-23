import React, { useEffect, useState } from 'react';
import './Homepage.css';
import WorkoutSlogans from './WorkoutSlogans';

const Homepage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [showBackgroundChange, setShowBackgroundChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const infoSection = document.querySelector('.info');
      const infoSectionBottom = infoSection.offsetTop + infoSection.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollTop > infoSectionBottom - windowHeight && shouldAnimate) {
        setShouldAnimate(false);
        setShowBackgroundChange(true);
      } else if (scrollTop < infoSectionBottom - windowHeight && !shouldAnimate) {
        setShowBackgroundChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldAnimate]);

  return (
    <div>
      <header>
        <div className="container">
          <div className="left-section">
            <h1>Workout Lightwork</h1>
          </div>
          <div className="right-section">
            <button className="button">Login</button>
            <button className="button">Signup</button>
          </div>
        </div>
      </header>
      
      <section className="image-section">
        <div className="image-container">
          <img src="https://www.infiniterecovery.com/wp-content/uploads/2019/11/AdobeStock_273600078-1536x1024.jpeg" alt="Fitness Image" className='fitness-image'/>
          <div className="image-overlay">
            <h2>Track, Train, Transform</h2>
            <p>Your Journey to Fitness</p>
          </div>
        </div>
      </section>

      <section className="info">
        <div>
          <h2>About Us</h2>
          <p>Welcome to Workout Lightwork, your ultimate fitness destination! We are passionate about helping you achieve your fitness goals through effective workouts and dedication to a healthy lifestyle. Whether you're a gym enthusiast or prefer home workouts, we've got you covered. Our mission is to provide you with the best workout routines and tips to enhance your fitness journey. We believe that a consistent workout regimen is key to a strong, healthy body and mind.</p>
          <br/>
          <p>Looking to build muscle, shed those extra pounds, or improve your overall well-being? 
            <br/>Explore our workout routines and get started on your path to a fitter you.</p>
          <p>Our team of experienced trainers and nutritionists is here to guide you every step of the way. Join us on this exciting fitness journey!</p>
        </div>
        <br/>
        <br/>
        
      </section>
      <WorkoutSlogans/>

      <div className={showBackgroundChange ? 'change-bg-color' : ''}>
      <section className="workout-routines">
        <h2 className="carousel-heading">Popular Workouts <br/> and Routines</h2>
        <div className="container">
          <div className="carousel">
      {/* Workout cards go here */}
          <div className="workout-card">
              <img src="https://www.health.com/thmb/8otAZglU9PONAQ_yH_GmWGpzTyI=/500x333/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1336700535-9ef0d2f2dc8d466aa7346d1bfd79aa98.jpg" alt="Workout 1" />
              <h3>Cardio Blast</h3>
              <p>A high-intensity cardio workout to get your heart pumping and calories burning.</p>
            </div>
            <div className="workout-card">
              <img src="https://aminoco.com/cdn/shop/articles/FeaturedImage_StrengthTraining.jpg?v=1593102095" alt="Workout 2" />
              <h3>Strength Training</h3>
              <p>Build muscle and increase strength with this effective strength training routine.</p>
            </div>
            <div className="workout-card">
              <img src="https://th.bing.com/th/id/OIP.0w55Vzr8NidcZgKOC1UCiAHaE8?pid=ImgDet&rs=1" alt="Workout 3" />
              <h3>Yoga Flow</h3>
              <p>Relax and rejuvenate with this calming yoga routine.</p>
              </div>
            <div className="workout-card">
              <img src="https://www.welcometotheonepercent.com/wp-content/uploads/2017/09/HIIT2.png" alt="Workout 4" />
              <h3>HIIT Workout</h3>
              <p>High-Intensity Interval Training for maximum calorie burn.</p>
            </div>
    </div>
  </div>
</section>

</div>
      <footer>
        <div className="container">
          <p>&copy; 2023 Fitness Website</p>
        </div>
      </footer>
<div/>
      <script src="script.js"></script>
    </div>
  );
};


export default Homepage;
