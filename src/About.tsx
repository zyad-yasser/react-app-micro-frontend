import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className='About'>
        If you can see this in customer UI it means that routing works in the
        sub app
      </div>
      <Link to='/'>Home</Link>
    </>
  );
}

export default About;
