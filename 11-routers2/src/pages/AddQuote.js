import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router';
import { addQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';

const QuoteAddPage = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    console.log(quoteData);
  };
  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
};

export default QuoteAddPage;
