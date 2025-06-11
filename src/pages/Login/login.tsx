import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, senha);
            alert('Login realizado com sucesso!');
            navigate('/');
        } catch (error) {
            console.error('Erro no login:', error);
            alert('Erro ao fazer login. Verifique suas credenciais.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>

                <form className="login-form" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="login-label">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="login-input"
                            placeholder="Digite seu e-mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <label htmlFor="senha" className="login-label">
                            Senha
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="senha"
                            className="login-input"
                            placeholder="Digite sua senha"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            style={{ paddingRight: '80px' }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="toggle-password"
                        >
                            {showPassword ? 'Ocultar' : 'Mostrar'}
                        </button>
                    </div>

                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </div>
    );
}