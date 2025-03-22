import Title from "./Title";
import { servicestuff } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={"our"} subtitle={"services"} />

      <div className="section-center services-center">
        {servicestuff.map((services) => {
          const { icon, title, paragraph, id } = services;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{paragraph}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
