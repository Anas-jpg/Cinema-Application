import Button from 'react-bootstrap/Button';
import collage from './collage.jpg';
import { BsFillBellFill } from 'react-icons/bs';
import './Header.css';
import { useEffect } from 'react';

function Header() {

    useEffect(() => {

        window.scrollTo(0, 0); // scroll to top of page
    }, []);

    return (
        <div className='collagge'>
            <div id="carouselExampleSlidesOnly" class="carousel slide overlay" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={collage} alt="" />
                        <div className="centered">
                            <h1> <b>ScreenSizzle</b></h1>
                            <div className='d-grid mt-4'>
                                <Button className='bCustom'>
                                    <BsFillBellFill style={{ marginRight: '10px' }} /><small>SUBSCRIBE US</small>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Link to="/"></Link> */}
            {/* <Outlet /> */}
        </div>
    );
}

export default Header;