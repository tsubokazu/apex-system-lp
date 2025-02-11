"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!data?.user || error) {
        router.push("/login"); // ログインしていない場合はリダイレクト
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [router]);

  return { user };
}
