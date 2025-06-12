import './register.css';
import { useState } from 'react';
import { auth, db } from '../../services/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const uid = userCredential.user.uid;

            await setDoc(doc(db, 'users', uid), {
                nome: nome,
                email: email,
                createdAt: new Date()
            });

            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            alert('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="register-title">Cadastro</h2>

                <form className="register-form" onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="nome" className="register-label">
                            Nome completo
                        </label>
                        <input
                            type="text"
                            id="nome"
                            className="register-input"
                            placeholder="Digite seu nome"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="register-label">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="register-input"
                            placeholder="Digite seu e-mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="senha" className="register-label">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            className="register-input"
                            placeholder="Digite sua senha"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmar" className="register-label">
                            Confirmar senha
                        </label>
                        <input
                            type="password"
                            id="confirmar"
                            className="register-input"
                            placeholder="Confirme sua senha"
                            required
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                    </div>
                        <div className='container-NoHave'>
                            <p>Já tem uma conta?</p>
                            <Link to="/login" className='LinkNoHave'>
                                <p>Fazer Login</p>
                            </Link>
                        </div>

                    <button type="submit" className="register-button" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>
            </div>
        </div>
    );
}