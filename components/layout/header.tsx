"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 py-6 w-full bg-gradient-to-br from-gray-900 to-black">
      <nav className="flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"
        >
          Apex System
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/support"
            className="text-gray-300 hover:text-orange-500 transition-colors"
          >
            受講サポート
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-orange-500 transition-colors"
          >
            お問い合わせ
          </Link>
          <Link
            href="/sns"
            className="text-gray-300 hover:text-orange-500 transition-colors"
          >
            公式SNS
          </Link>
          <Link
            href="/terms"
            className="text-gray-300 hover:text-orange-500 transition-colors"
          >
            規約・禁止事項
          </Link>
          <Link
            href="/tools"
            className="text-gray-300 hover:text-orange-500 transition-colors"
          >
            High&Lowツール
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-300" />
          </Button>
        </div>
        <div className="hidden md:flex space-x-2">
          <Button
            variant="outline"
            className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
          >
            <Link href="/login">ログイン</Link>
          </Button>
          <Button className="bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 transition-colors">
            <Link href="/signup">新規登録</Link>
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-gray-800 rounded-lg p-4"
          >
            <Link
              href="/support"
              className="block py-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              受講サポート
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link
              href="/sns"
              className="block py-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              公式SNS
            </Link>
            <Link
              href="/terms"
              className="block py-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              規約・禁止事項
            </Link>
            <Link
              href="/tools"
              className="block py-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              High&Lowツール
            </Link>
            <Button
              variant="outline"
              className="w-full mt-2 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
            >
              <Link href="/login">ログイン</Link>
            </Button>
            <Button className="w-full mt-2 bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 transition-colors">
              <Link href="/signup">新規登録</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
