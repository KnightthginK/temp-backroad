import { externLinks } from "../data";

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {externLinks.map((links) => {
        const { id, href, text } = links;
        return (
          <li key={id}>
            <a href={href} className={childClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
