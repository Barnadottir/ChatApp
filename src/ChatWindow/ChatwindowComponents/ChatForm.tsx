import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts'
import { getMessages, postMessage } from '../../databaseQueries'
import { Messages } from '../../types/databaseTypes'

interface ChatFormP {
    receiverEmail: string | null,
}

const ChatForm = ({ receiverEmail }: ChatFormP): JSX.Element => {
    const [currMessage, setCurrMessage] = useState<string>('')
    const [messageData, setMessageData] = useState<Messages[]>([])
    const { currentUser: loggedInUser } = useAuth()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setCurrMessage(e.target.value)
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (loggedInUser?.email && receiverEmail) postMessage(loggedInUser?.email, receiverEmail, currMessage, new Date())
    }

    const getMessageData = async (): Promise<void> => {
        try {
            const messages: Messages[] | void = await getMessages()
            if (messages) setMessageData(messages)
            console.log(messages);
        }
        catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getMessageData()
    },[])
  return (
    <div className='sticky bottom-0'>
        <div id='old messages tag'>
            {
                messageData ? 
                messageData.map((m: Messages,idx: number) => (
                    <div key={idx}>
                        {(m.senderEmail == loggedInUser?.email 
                            && m.receiverEmail == receiverEmail)
                            ? 
                            m.message :
                            null}
                    </div>
                )) :
                null
            }
        </div>
        <form onSubmit={onSubmitHandler}>
            <input type='text' value={currMessage} onChange={handleChange}/>
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default ChatForm
