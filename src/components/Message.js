import { Link } from "react-router-dom"
import { Card, CardContent, Typography } from '@mui/material'

const Message = ({message}) => {
    return (
        <Link to={`${message.id}`} style={{textDecoration: 'none'}}>
            <Card>
                <CardContent>
                    <Typography variant="h5">{message.text}</Typography>
                    <Typography variant="p">{message.user}</Typography>
                </CardContent>
            </Card>
        </Link>
    )

}

export default Message