import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import { getSingleQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetailPage = () => {
  const params = useParams();
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote, error
  } = useHttp(getSingleQuote, true);

  const { id } = params;

  useEffect(() => {
    sendRequest(params.id);
  }, [sendRequest, id]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  
  if(error) {
    return <p className='centered focused'>{error}</p>;
  }
  
  if (!loadedQuote.text) {
    return  <p className='centered focused'>No quote found!</p>;
  }

  const showCommentsHandler = () => {};

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} id={loadedQuote.id} />

      <Route path={`${match.path}`} exact>
        <div className='centered'>
          <Link
            to={`${match.url}comments`}
            className='btn--flat'
            onClick={showCommentsHandler}
          >
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetailPage;
