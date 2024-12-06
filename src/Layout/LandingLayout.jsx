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

export default LandingLayout;

LandingLayout.PropTypes = {
    children: PropTypes.node.isRequired,
}

