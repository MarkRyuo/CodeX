import PropTypes from 'prop-types'; // ES6

function LandingLayout({children}) {
    return (
        <div>
            
            
            <div className="LandingContainer">
                {children}
            </div>
        </div>
    )
}

LandingLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LandingLayout;


