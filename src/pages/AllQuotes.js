import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Kosi", text: "Learning react is tough" },
  { id: "q2", author: "Larry", text: "Learning react is not easy" },
];

const AllQuotes = () => {

  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes;