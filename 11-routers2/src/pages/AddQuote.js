import QuoteForm from '../components/quotes/QuoteForm';

const QuoteAddPage = () => {

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    };
  return <QuoteForm onAddQuote={addQuoteHandler}/>;
};

export default QuoteAddPage;
