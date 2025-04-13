import Nav from '../../components/Navbar/Nav';
import './Home.css';
import Header from '../../components/Header/Header';
import Feature from '../../components/Feature/Feature';
import Multipleproduct from '../Multipleproduct/Multipleproduct';
import Adminhome from '../admin/Home/Adminhome';
import { useContext, useEffect } from 'react';
import { Appcontext } from '../../Context/Appcontext';

const Home = () => {
  const { currUser, user } = useContext(Appcontext);

  useEffect(() => {
    const fetchUser = async () => {
      await currUser();
    };
    fetchUser();
  }, [currUser]);

  const { category } = user;

  if (!category) {
    return <div>Loading user information...</div>;
  }

  return (
    <>
      {
        category === 'Admin' 
          ? <Adminhome /> 
          : (
            <div className="userhome">
              <Nav />
              <Header />
              <Feature />
              <Multipleproduct />
            </div>
          )
      }
    </>
  );
};

export default Home;
