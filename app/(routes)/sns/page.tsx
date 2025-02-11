"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
export default function SNSPage() {
  const snsAccounts = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/Apex System",
      followers: "10.5K",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/Apex System",
      followers: "8.2K",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/Apex System",
      followers: "15.3K",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/Apex System",
      subscribers: "50.1K",
    },
  ];

  const latestPosts = [
    {
      platform: "Twitter",
      content:
        "最新のマーケット分析レポートを公開しました！チェックしてください。 #バイナリーオプション #マーケット分析",
      date: "2時間前",
    },
    {
      platform: "Facebook",
      content:
        "明日のウェビナーの参加登録はお済みですか？トップトレーダーが成功の秘訣を語ります。",
      date: "昨日",
    },
    {
      platform: "Instagram",
      content:
        "トレーダーの日常：デスク周りの設定を公開。あなたのトレード環境はどんな感じ？ #トレーダーの日常",
      date: "2日前",
    },
  ];

  const { user } = useAuth();

  if (!user) {
    return <div>ログインしていません</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">公式SNS</h1>
          <p className="text-xl mb-8 text-gray-300">
            最新情報やコミュニティの活動をチェック
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">SNSアカウント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {snsAccounts.map((account, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-none hover:bg-gray-700 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-500 flex items-center">
                    <account.icon className="mr-2" />
                    {account.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    {account.followers || account.subscribers}{" "}
                    {account.followers ? "フォロワー" : "登録者"}
                  </p>
                  <Button
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 transition-colors"
                  >
                    <Link href={account.url}>フォローする</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">最新の投稿</h2>
          <div className="space-y-6">
            {latestPosts.map((post, index) => (
              <Card key={index} className="bg-gray-800 border-none">
                <CardContent className="p-6">
                  <p className="text-sm text-orange-500 mb-2">
                    {post.platform}
                  </p>
                  <p className="text-gray-300 mb-2">{post.content}</p>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
