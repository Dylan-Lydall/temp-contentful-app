import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus
            deserunt nemo ut deleniti vero quae ducimus reprehenderit soluta,
            obcaecati impedit aliquam! Voluptate, eligendi molestiae nostrum
            alias consequatur officia nemo?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
