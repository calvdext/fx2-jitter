import { Link, useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material'

const Navigation = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store
    
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()

        dispatch({
            type: "setLoggedInUser",
            data: ""
          })
        navigate("messages")
    }
    
    return (
        <AppBar position="sticky">
            <Typography variant="h3">Jitter</Typography>
            <Toolbar>
                <Tabs value={false}>
                    <Tab label="Home" value='/messages' component={Link} to="/messages"/>
                    <Tab label="About" component={Link} to="/about"/>
                    { loggedInUser && <Tab label="New Message" component={Link} to="/messages/new"/>}
                    { loggedInUser && <Tab label="Logout" onClick={logout} component={Link} to="/messages"/>}
                    { !loggedInUser && <Tab label="Login" component={Link} to="/login"/>}
                    { !loggedInUser && <Tab label="Signup" component={Link} to="/login"/>}
                </Tabs>
            </Toolbar>
       
        </AppBar>
    )

}

export default Navigation