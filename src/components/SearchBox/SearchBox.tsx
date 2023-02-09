import { TagIcons } from "../Icons/TagIcons";

const SearchBox = () => {
    return(
        <div className="pina-searchbox">
            <input name="search-value" placeholder="Ketik nama atau simbol saham" />
            {TagIcons.search}
        </div>
    );
}

export default SearchBox;