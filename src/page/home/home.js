
import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="/article">去往article页面</Link>
            </div>
        )
    }
}

export default Home