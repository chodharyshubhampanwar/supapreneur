import GlobalRouterProvider from "./routes/routerProvider";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <GlobalRouterProvider />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
