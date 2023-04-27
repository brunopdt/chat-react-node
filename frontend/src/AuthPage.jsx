const AuthPage = props => {
  const onSubmit = e => {
    e.preventDefault()
    const { value } = e.target[0]
    props.onAuth({ username: value, secret: value })
  }

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Bem vindo! 👋</div>

        <div className="form-subtitle">
          Selecione seu nome de exibição para começar
        </div>

        <div className="auth">
          <div className="auth-label">Nome</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default AuthPage
