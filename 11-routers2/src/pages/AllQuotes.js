import QuoteList from '../components/quotes/QuoteList';


const DUMMY_QUOTES = [
  { id: 'q1', author: 'Author 1', text: 'text 2' },
  { id: 'q2', author: 'Author 2', text: 'text 2' },
];

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
