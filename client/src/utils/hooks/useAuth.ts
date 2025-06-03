import { useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
  name: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost/server/router.php?action=me', {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) throw new Error();

        const data = await res.json();
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const isAuth = !!user;

  return { user, isAuth, loading };
}
