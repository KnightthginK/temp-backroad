import { socallinks } from "../data";
import PageLinks from "./PageLinks";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass={"footer-links"} childClass={"footer-link"} />

      <ul className="footer-icons">
        {socallinks.map((socal) => {
          return (
            <li key={socal.id}>
              <a
                href={socal.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={socal.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
