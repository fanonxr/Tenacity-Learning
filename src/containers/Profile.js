import React from 'react';
import { connect } from 'react-redux';


class Profile extends React.PureComponent {
/** profile class to hold user profile data and display it */

    render() {
        return (
            <div>
                <p>{this.props.username}</p>
            </div>
        );

    }
}

// map the states fromt he request to class props
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        username: state.auth.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // TODO: deal with suer graded assignments
    }
}


export default connect(mapStateToProps)(Profile);