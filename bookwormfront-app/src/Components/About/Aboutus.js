import React from "react";
import "./Aboutus.css";
import BookImage from "./images/img2.jpg";
import CommunityImage from "./images/community_img.jpg";
import TeamMember from "./images/imp.jpg";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about">
        <img src={BookImage} alt="Books" className="pic" />
        <div className="text">
          <h2>About Us</h2>
          <h5>Your Go-To Destination for <span>eBooks & More</span></h5>
          <p>
            Welcome to BookWorm, the largest online library for book lovers! 📚 Immerse yourself in a
            world of endless stories and adventures. Whether you're into thrillers, romance, fantasy, or non-fiction,
            we've got it all. Our mission is to make reading accessible and enjoyable for everyone.
          </p>
        </div>
      </div>
      <div className="about about-reverse">
        <div className="text">
          <h5>Why <span>Choose Us?</span></h5>
          <ul>
            <li>📖 Wide variety of genres and titles</li>
            <li>💻 Easy-to-use interface for a seamless reading experience</li>
            <li>📅 Regular updates with the latest releases</li>
            <li>🙋‍♂️ Dedicated customer support</li>
          </ul>
        </div>
        <img src={CommunityImage} alt="Our Community" className="pic" />
      </div>
      <div className="about">
        <img src={TeamMember} alt="Our Team" className="pic" />
        <div className="text">
          <h5>Meet <span>Our Team</span></h5>
          <p>
            Our passionate team of book lovers and tech enthusiasts work together to bring you the
            best reading experience. From curating amazing titles to ensuring smooth access, we're here to make your
            reading journey enjoyable!
          </p>
        </div>
      </div>
      <div className="about about-reverse">
        <div className="text">
          <h5>What Our <span>Users Say</span></h5>
          <blockquote>
            "BookWorm has transformed my reading experience! The selection is amazing and the interface is so
            user-friendly."
          </blockquote>
          <blockquote>
            "I love the variety of genres available on BookWorm. There's always something new to discover!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
