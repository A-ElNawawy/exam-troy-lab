import Empty from "./Empty/Empty";
import Result from "./Result/Result";

import SquareButton from "./../UIs/SquareButton/SquareButton";

import nounUser from "./assets/nounUser.svg";
import searchByNumber from "./assets/searchByNumber.svg";
import search from "./assets/search.svg";

import styles from "./SearchResults.module.css";

const SearchResults = () => {
  return (
    <div className={styles.SearchResults}>
      <div className={styles.controls}>
        <div className={styles.inputField}>
          <label>
            <input type='text' placeholder='اسم الطالب' />
          </label>

          <button className={styles.search}>
            <img src={search} alt='' />
          </button>
        </div>

        <SquareButton bgColor='yellow'>
          <img src={searchByNumber} alt='' />
        </SquareButton>

        <SquareButton bgColor='blue'>
          <img src={nounUser} alt='' />
        </SquareButton>
      </div>

      {false ? <Empty /> : <Result />}
    </div>
  );
};

export default SearchResults;
