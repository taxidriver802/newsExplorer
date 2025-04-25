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
          My name is Jason Cox, and I am a full-stack developer with a passion
          for creating user-friendly and efficient web applications. I
          specialize in JavaScript, React, Node.js, and CSS, and I have
          experience working with modern development tools and frameworks.
          <br /> <br />
          During my time at TripleTen, I gained hands-on experience in building
          responsive web applications, collaborating with teams, and solving
          real-world problems. I learned how to write clean, maintainable code
          and implement best practices in software development.
          <br /> <br />I am eager to help potential customers by leveraging my
          skills to create high-quality solutions tailored to their needs.
          Whether it's building a new project from scratch or improving an
          existing one, I am confident in my ability to deliver results that
          exceed expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
