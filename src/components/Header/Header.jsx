import "./Header.css";

function Header({ onNavigate }) {
  const isAuthenticated = false;

  // Dummy authentication variable. Will be eventually replaced with actual authentication logic.
  // Todo: define respective functions

  return (
    <header className="header">
      <div>
        <button onClick={() => onNavigate("login")}>Login</button>
        <button onClick={() => onNavigate("register")}>Register</button>
        <button onClick={() => onNavigate("reset password")}>
          Reset Password
        </button>
        {isAuthenticated && (
          <button onClick={() => onNavigate("login")}>Logout</button>
        )}
      </div>
    </header>
  );
}

export default Header;
