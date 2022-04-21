import logo from './logo.svg';
import Image from 'next/image'

function Loader() {
  return (
    <div className="container-fluid loader">
      <h2>Please Wait</h2>
      <Image 
          src={logo}
          alt="logo"
          width='100%'
      />
      <h2>Fetching Your Data</h2>
    </div> 
  );
}

export default Loader;