import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about__image-container">
        <img
          src="src/assets/images/IMG_0199.png"
          alt="Image of the author"
          className="about__image"
        />
      </div>
      <div className="about__content">
        <h1 className="about__content-title">About the author</h1>
        <p className="about__content-subtitle">
          My name is Jason Cox, and I’m a full-stack developer with a passion
          for building user-friendly, efficient web applications. I specialize
          in JavaScript, React, Node.js, and CSS, and I also have experience
          with MongoDB, Express, Git, and working with third-party APIs.
          <br /> <br />
          During my time at TripleTen, I gained hands-on experience building
          responsive, real-world web applications both independently and in
          collaborative team settings. I learned how to write clean,
          maintainable code, follow best practices, and approach problem-solving
          with a developer’s mindset.
          <br /> <br />
          I’m eager to bring value to potential clients by creating high-quality
          solutions tailored to their goals—whether that means building a new
          app from scratch or enhancing an existing one. I'm confident in my
          ability to deliver results that are both technically sound and
          user-focused.
        </p>
      </div>
    </div>
  );
}

export default About;
