import PropTypes from 'prop-types'; // ES6
import NavBarV1 from '../components/Navbar/NavbarV1'

function LandingLayout({children}) {
    return (
        <div>
            
            <NavBarV1 />
            <div className="LandingContainer">
                {children}
            </div>
        </div>
    )
}

LandingLayout.propTypes = {
    children: PropTypes.node.isRequired,
    //* .node, .array, .boolean, .string, .number
}

export default LandingLayout;


