import { Navigate, useParams } from "react-router-dom"

const MessageDetail = ({messageList}) => {
    const params = useParams()
    console.log(params)

    const getMessage = (id) => {
        return messageList.find(m => m.id === parseInt(id))
    }

    const message =  getMessage(params.messageId)//{text: "test message", user: "testuser"}
    return (
        <> 
            { message ? 
            <>
                <h4>{message.text}</h4>
                <p>{message.user}</p>
            </>
            :
                <Navigate to="NotFound" />
            }
        </>
    )

}

export default MessageDetail