import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = (props) => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest(getAllQuotes);
  }, [sendRequest]);

  if(error) {
    return <p className='centered focused'>Something went wrong: {error}</p>;
  }

  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
    return <NoQuotesFound />;
  }

  return (
    <>
      {!loadedQuotes  &&  <div className='centered'><LoadingSpinner /></div> }
      {loadedQuotes && <QuoteList quotes={loadedQuotes || []} />}
    </>
  );
};

export default AllQuotes;
