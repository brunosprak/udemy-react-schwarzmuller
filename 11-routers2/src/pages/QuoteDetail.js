import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Author 1', text: 'text 2' },
  { id: 'q2', author: 'Author 2', text: 'text 2' },
];

const QuoteDetailPage = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.id);

  if(!quote) {
    return <NoQuotesFound/>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} id={quote.id}/>
      <Route path={`/quotes/${params.id}/comments`}>
          <Comments />
      </Route>
    </>
  );
};

export default QuoteDetailPage;
