import { Link } from "react-router-dom"

const NotFound = () => {

    return(
        <>
            <h2>404 ERROR</h2>
            <p>Sorry, page not found</p>
            <Link to="/">Go Back</Link>
        </>
    )
}

export default NotFound