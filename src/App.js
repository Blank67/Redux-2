import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const loginStatus = useSelector((state) => (state.auth.isLogin));

  return (
    <Fragment>
      <Header />
      {loginStatus ? <UserProfile /> : <Auth />}
      {loginStatus && <Counter />}
    </Fragment>
  );
}

export default App;
