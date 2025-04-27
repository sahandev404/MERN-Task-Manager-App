const RegisterForm = ({ user, email, password, setEmail, setPassword, setUser, error, handleSubmit }) => {
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
                <p className="--flex-left" htmlFor="user">Name:</p>
                <input
                    placeholder="Enter your Name"
                    type="text"
                    id="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
            </div>

            <div className="login-field">
                <p className="--flex-left" htmlFor="email">Email:</p>
                <input
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="login-field">
                <p htmlFor="password">Password:</p>
                <input
                    placeholder="Enter your password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="--flex-center">
                {error && <p className="error">{error}</p>}
                <button type="submit">Register</button>
            </div>
        </form>
    )
}
export default RegisterForm;