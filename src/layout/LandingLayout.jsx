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
    //* .node, .array, .boolean, .string, .number
}

export default LandingLayout;


