import { Fragment } from "react";

import { useParams, Route, Routes, Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Kosi", text: "Learning react is tough" },
  { id: "q2", author: "Larry", text: "Learning react is not easy" },
];

const QuoteBtn = (props) => {

  return (
    <div className={"centered"}>
      <Link className="btn--flat" to={`/quotes/${props.id}/comments`}>Load comments</Link>
    </div>
  );
}

const QuoteDetail = () => {
  const params = useParams();
  
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p className="centered">No quotes found</p>
  } 

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path={`/`} element={<QuoteBtn id={params.quoteId} />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
