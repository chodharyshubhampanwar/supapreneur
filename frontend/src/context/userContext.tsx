import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useAuth } from "./AuthContext";
import { getUser } from "../api/api";

interface User {
  id: string;
  email: string;
  name: string | null;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user: authUser } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      if (!authUser?.uid) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await getUser(authUser.uid);
        setUser(response.user);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to fetch user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [authUser]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
