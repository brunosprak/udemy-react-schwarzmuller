import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>
      <Route path='/welcome/new-user'><p>Hello</p></Route>
    </section>
  );
};

export default Welcome;
