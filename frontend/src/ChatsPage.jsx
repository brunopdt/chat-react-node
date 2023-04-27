import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = props => {
  const projID = '49637c7c-ab39-4dcc-9ad8-3da99ba9daac'

  return (
    <div className="background">
      <PrettyChatWindow
        projectId={projID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  )
}

export default ChatsPage
