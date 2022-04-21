import React, {useState, useEffect} from 'react'
import Link from 'next/link';

function Header(){

    const [cheader, setCheader] = useState(false);

    const changeOpacity = () =>{
            if(window.scrollY >= 100)
            {
                    setCheader(true)
            }
            else
            {
                    setCheader(false)
            }
    }
    
    useEffect(() => {
        changeOpacity()
        window.addEventListener('scroll' , changeOpacity);
    },[])

    return(
        <nav style={{position:'fixed'}} className={cheader ? "cheader active navbar navbar-expand-md" : "cheader navbar navbar-expand-md"}>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <i className="fas fa-bars"></i>
            </button>
                    
            <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href='/'>
                            <a className="nav-link" ><h2>Home</h2></a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href = '/about'>
                            <a className="nav-link" ><h2>About</h2></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header