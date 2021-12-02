import { Switch, Route, Redirect } from 'react-router-dom';
import QuoteAddPage from './pages/AddQuote';
import QuoteDetailPage from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NotFound from './pages/NotFound';



function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'></Redirect>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/add'>
            <QuoteAddPage />
          </Route>
          <Route path='/quotes/:id'>
            <QuoteDetailPage />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
