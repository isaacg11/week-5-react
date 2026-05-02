# ThreadHive Frontend - AI Agent Instructions

## Project Overview

React 19 + Vite frontend application for a social platform (ThreadHive). This is a learning project focusing on modern React patterns, authentication UI, and component architecture.

## Quick Start Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm test         # Run Vitest tests
```

## Architecture & Patterns

### Component Organization

**Feature-based structure** with co-located CSS:

- `src/components/` - Shared UI components (Header, Footer)
- `src/pages/` - Page-level components organized by feature (Auth/)
- Each component has a paired `.css` file in the same directory

**Example**: `Header/Header.jsx` + `Header/Header.css`

### Styling Convention

- **Regular CSS files** (not CSS modules)
- Class naming: descriptive, semantic names (`.header`, `.auth-container`, `.auth-box`)
- Import pattern: `import "./ComponentName.css"` at the top of each component

### State Management

- **No routing library** - Manual page switching via `useState` in `App.jsx`
- **No Redux/Context** - Simple local state with `useState`
- Navigation: Parent component controls page state, passes `onNavigate` callback to Header

**Current navigation pattern**:

```jsx
const [currentPage, setCurrentPage] = useState("login");
{
  currentPage === "login" ? <Login /> : <Register />;
}
```

### Form Handling Patterns

Two approaches currently in use:

1. **Object state pattern** (preferred for scalability) - `Register.jsx`:

   ```jsx
   const [form, setForm] = useState({ name: "", email: "", password: "" });
   const handleChange = (e) =>
     setForm({ ...form, [e.target.name]: e.target.value });
   ```

2. **Individual state variables** - `Login.jsx`:
   ```jsx
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   ```

**When adding forms**: Prefer the object state pattern for forms with 3+ fields.

### Backend Integration

⚠️ **No API integration yet** - Forms currently `console.log` data and show alerts. Backend endpoints will need to be added.

When implementing API calls:

- Add fetch/axios calls in form submit handlers
- Replace `console.log` statements with actual API requests
- Update `isAuthenticated` logic in Header component

## Testing

**Stack**: Vitest + React Testing Library + jsdom

**Setup**: [tests/setup.js](tests/setup.js) imports `@testing-library/jest-dom`

**Conventions**:

- One `describe()` block per component
- Use `screen.getByLabelText()` and `screen.getByRole()` for queries
- Use `@testing-library/user-event` for interactions (not `fireEvent`)
- Test user flows, not implementation details

**Example pattern** from [auth.test.jsx](tests/auth.test.jsx):

```jsx
const user = userEvent.setup();
await user.type(screen.getByLabelText(/email/i), "test@example.com");
await user.click(screen.getByRole("button", { name: /login/i }));
```

## Known Gaps & TODOs

1. **Login validation**: Missing `required` attributes on inputs (present in Register)
2. **Authentication logic**: Header has placeholder `isAuthenticated = false` with TODO
3. **Login tests**: Marked with TODO comments, need completion
4. **Routing**: May need React Router when app grows beyond 2-3 pages
5. **API integration**: No backend communication implemented yet

## Code Style

- React 19 syntax (latest features available)
- ESLint configured - follow linting rules
- Controlled form inputs (all inputs use `value` + `onChange`)
- Functional components only (no class components)

## When Making Changes

- **Adding components**: Create folder with `ComponentName.jsx` + `ComponentName.css`
- **Adding pages**: Place in `src/pages/FeatureName/` directory
- **Adding tests**: Follow existing patterns in `tests/`, use React Testing Library conventions
- **Form validation**: Add both client-side (HTML5 `required`) and future server-side validation
- **Styling**: Keep CSS scoped to component, avoid global styles

## Development Notes

- This is a **learning project** - focus on clean patterns and good practices
- Vite provides fast HMR - changes reflect immediately
- React 19 is cutting edge - be aware of any API differences from React 18
