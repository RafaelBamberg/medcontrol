import { useEffect, useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import * as H from './styles'
import type { Screen } from '../../types/types'

export const HomeScreen = (props: Screen) => {
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1200)
    return () => window.clearTimeout(timeout)
  }, [])

  const handleAccess = (text: string) => {
    if (!email.trim() || !password.trim()) {
      setMessage('Preencha e-mail e senha para acessar.')
      return
    }

    setMessage(text)
    window.setTimeout(() => props.setPage(4), 450)
  }

  const handleGov = () => {
    window.setTimeout(() => props.setPage(4), 450)
  }

  if (loading) {
    return (
      <H.Box>
        <H.LogoLoading>MC</H.LogoLoading>
        <H.LoadingText>MedControl</H.LoadingText>
      </H.Box>
    )
  }

  return (
    <H.Home>
      <H.Header>
        <H.Logo>MC</H.Logo>
        <H.HeaderText>MedControl</H.HeaderText>
      </H.Header>

      <H.Login>
        <H.Tabs>
          <H.TabButton className={mode !== 'register' ? 'selected' : ''} onClick={() => setMode('login')}>Entrar</H.TabButton>
          <H.TabButton className={mode === 'register' ? 'selected' : ''} onClick={() => setMode('register')}>Criar conta</H.TabButton>
        </H.Tabs>
        <H.Label>Email</H.Label>
        <H.Input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Digite o seu email" type="email" />
        <H.Label>Senha</H.Label>
        <H.Input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Digite a sua senha" type="password" />
        {mode === 'register' && (
          <>
            <H.Label>Confirmar Senha</H.Label>
            <H.Input placeholder="Digite novamente a sua senha" type="password" />
          </>
        )}
        {message && <H.Message className={message.includes('Preencha') ? 'error' : ''}>{message}</H.Message>}
        <H.ButtonLogin onClick={() => handleAccess(mode === 'register' ? 'Conta criada em modo demonstração.' : 'Login realizado em modo demonstração.')}>
          {mode === 'register' ? 'Criar conta' : 'Entrar'}
        </H.ButtonLogin>
        <H.GovButton onClick={handleGov}>
          <img src="/gov.png" alt="gov.br" />
          Entrar com gov.br
        </H.GovButton>
      </H.Login>

      <H.Footer>
        <H.FooterText>Dados protegidos por LGPD</H.FooterText>
        <LockOutlinedIcon sx={{ width: 22, height: 22 }} />
      </H.Footer>
    </H.Home>
  )
}
