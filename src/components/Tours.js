import Title from "./Title";
import { toursstuff } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={"featured"} subtitle={"tours"} />

      <div className="section-center featured-center">
        {toursstuff.map((tours) => {
          const { title, date, img, paragraph, location, days, price, id } =
            tours;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{paragraph}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
