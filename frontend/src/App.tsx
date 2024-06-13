import GlobalRouterProvider from "./routes/routerProvider";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <GlobalRouterProvider />
    </AuthProvider>
  );
}

export default App;
