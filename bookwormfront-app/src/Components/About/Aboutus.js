import React from 'react';
import './Aboutus.css';
import BookImage1 from './images/welcome.jpg';
import BookImage2 from './images/img2.jpg';
import CommunityImage from './images/community_img.jpg';
import TeamMember1 from './images/imp.jpg';
import TeamMember2 from './images/imp.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="about-us-content">
        <img src={BookImage1} alt="Books" className="about-us-image" />
        <b>Welcome to BookWorm, your go-to destination for all things e-books! 📚</b>
        <img src={BookImage2} alt="More Books" className="about-us-image" />
        <b> <p>At BookWorm, we believe in making reading accessible and enjoyable for everyone. Our mission is to provide a vast selection of e-books across various genres, ensuring that there's something for every reader.</p></b>
        <img src={CommunityImage} alt="Our Community" className="about-us-image" />
        <b>  <p>Our team is passionate about books and dedicated to offering the best reading experience. We constantly update our collection and strive to provide excellent customer service.</p></b>
       <p1> <b><i>Thank you for choosing BookWorm. Happy reading!</i></b> </p1>
      </div>
      <div className="additional-info">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide variety of genres and titles 📚</li>
          <li>Easy-to-use interface for a seamless reading experience 👩‍💻</li>
          <li>Regular updates with the latest releases 📅</li>
          <li>Dedicated customer support 🙋‍♀</li>
        </ul>
      </div>
      <div className="team-members">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src={TeamMember1} alt="Team Member 1" className="team-member-image" />
          <h3>Prashant Gaour</h3>
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-image" />
          <h3>Sanket Paithankar</h3>
          
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-image" />
          <h3>Sumit Mathankar</h3>
          
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-image" />
          <h3>Ankit Korde</h3>
         
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-image" />
          <h3>Swapnali Morbale</h3>
        
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-image" />
          <h3>Abhishek Mishra</h3>
    
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-image" />
          <h3>Asim </h3>
         
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-image" />
          <h3>Vishalsinh Chandel</h3>
         
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-image" />
          <h3>Aryan Bisht </h3>
         
        </div>

      </div>
      <div className="user-feedback">
        <h2>What Our Users Say</h2>
        <blockquote>
          "BookWorm has transformed my reading experience! The selection is amazing and the interface is so user-friendly."
        </blockquote>
        <blockquote>
          "I love the variety of genres available on BookWorm. There's always something new to discover!"
        </blockquote>
      </div>
      <div className="community-info">
        <h2>Our Community</h2>
        <p>EleBook is the largest and most well-known online library of eBooks, with a growing community of more than ONE THOUSAND readers & hundreds of rising authors.</p>
        <p>Join us and be part of a thriving community where readers and authors connect, share, and grow together. Discover new books, participate in discussions, and make new friends!</p>
      </div>
    </div>
  );
};

export default AboutUs;