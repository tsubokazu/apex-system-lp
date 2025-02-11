"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Zap, BarChart, Lock } from "lucide-react";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">High&Lowツール</h1>
          <p className="text-xl mb-8 text-gray-300">
            効率的な取引を支援する最先端のツール
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gray-800 border-none">
            <CardContent className="p-6">
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="features">主な機能</TabsTrigger>
                  <TabsTrigger value="usage">使用方法</TabsTrigger>
                  <TabsTrigger value="requirements">システム要件</TabsTrigger>
                </TabsList>
                <TabsContent value="features">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    主な機能
                  </h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>リアルタイムの市場分析</li>
                    <li>AIによる取引シグナル生成</li>
                    <li>リスク管理ツール</li>
                    <li>カスタマイズ可能なチャート</li>
                    <li>自動取引機能</li>
                    <li>詳細な取引履歴とレポート</li>
                  </ul>
                </TabsContent>
                <TabsContent value="usage">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    使用方法
                  </h2>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>ツールをダウンロードしてインストール</li>
                    <li>LastBinaryアカウントでログイン</li>
                    <li>取引プラットフォームと連携</li>
                    <li>好みに応じてツールをカスタマイズ</li>
                    <li>市場分析と取引シグナルを確認</li>
                    <li>リスク管理設定を調整</li>
                    <li>必要に応じて自動取引を設定</li>
                  </ol>
                </TabsContent>
                <TabsContent value="requirements">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    システム要件
                  </h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>OS: Windows 10以降 / macOS 10.14以降</li>
                    <li>CPU: Intel Core i5 / AMD Ryzen 5 以上</li>
                    <li>メモリ: 8GB以上</li>
                    <li>ストレージ: 1GB以上の空き容量</li>
                    <li>インターネット接続: 5Mbps以上の安定した接続</li>
                    <li>ディスプレイ解像度: 1920x1080以上</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">ツールの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-none hover:bg-gray-700 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-500 flex items-center">
                  <Zap className="mr-2" />
                  高速処理
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  最新のアルゴリズムにより、ミリ秒単位の高速な市場分析と取引執行を実現します。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-none hover:bg-gray-700 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-500 flex items-center">
                  <BarChart className="mr-2" />
                  高度な分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  機械学習を活用した予測モデルにより、市場動向を正確に分析し、最適な取引機会を特定します。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-none hover:bg-gray-700 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-500 flex items-center">
                  <Lock className="mr-2" />
                  セキュリティ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  最新の暗号化技術を採用し、ユーザーの取引データとアカウント情報を安全に保護します。
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button className="bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 text-lg px-8 py-3 rounded-full transition-colors">
            ツールをダウンロード <Download className="ml-2" />
          </Button>
          <p className="mt-4 text-gray-300">
            ※ダウンロードにはLastBinaryアカウントが必要です。
          </p>
        </motion.section>
      </main>
    </div>
  );
}
