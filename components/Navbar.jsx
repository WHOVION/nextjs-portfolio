// import Link from next
import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <Link href='/'>
                {/* links take any child components */}
                Home
            </Link>

            <Link href='about'>
                About me
            </Link>

            {/* outside sources use regular a tags */}
            {/* blank code opens new tab */}
            <a href='#' target='_blank'>balh balh</a>
        </nav>
     );
}
 
export default Navbar;