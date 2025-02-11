"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp } from "@/utility/animations";
export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにニュースレター登録のロジックを追加
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <motion.section {...fadeInUp} className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4 text-white">
        ニュースレターに登録
      </h2>
      <p className="mb-8 text-gray-300">最新の情報とお得な情報をお届けします</p>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <Input
          type="email"
          placeholder="メールアドレスを入力"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="max-w-xs mr-2 bg-gray-700 text-white placeholder-gray-400"
          required
        />
        <Button
          type="submit"
          className="bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 transition-colors"
        >
          登録
        </Button>
      </form>
    </motion.section>
  );
}
