import { TagIcons } from "../Icons/TagIcons";
import SearchBox from "../SearchBox/SearchBox";

interface UserObj {
  portfolio?: String;
  buyingPwr?: String;
  image?: React.ReactNode;
}



const Header = ({ portfolio, buyingPwr, image }: UserObj) => {
  return (
    <div className="pina-top-header">
      <div className="pina-header-left">
        <SearchBox />
        <div className="pina-persdata-text">
          <div className="subtitle">Portfolio</div>
          <div className="value">{portfolio}</div>
        </div>
        <div className="pina-persdata-text">
          <div className="subtitle">Buying Power</div>
          <div className="value">{buyingPwr}</div>
        </div>
      </div>
      <div className="pina-header-right">
        {TagIcons.mail}
        {image}
      </div>
    </div>
  );
};

export default Header;
