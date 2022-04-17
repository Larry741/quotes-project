import { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isAscending = queryParams.get('sort') === 'asc';
  
  const changeSorting = () => {
    navigate('/quotes?sort=' + (isAscending ? 'desc' : 'asc'));
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSorting}>Sort {isAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
