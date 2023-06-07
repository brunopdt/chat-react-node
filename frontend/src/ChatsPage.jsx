import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = props => {
  const projID = '66002d2f-97d6-4653-892f-23d5daf8e11c'

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
