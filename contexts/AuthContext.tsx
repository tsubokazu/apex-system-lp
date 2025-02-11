"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!data?.user || error) {
        router.push("/login"); // 未ログインならリダイレクト
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [router]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
