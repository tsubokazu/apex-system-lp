"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">規約・禁止事項</h1>
          <p className="text-xl mb-8 text-gray-300">
            LastBinaryのサービス利用に関する重要な情報
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
              <Tabs defaultValue="terms" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="terms">利用規約</TabsTrigger>
                  <TabsTrigger value="privacy">
                    プライバシーポリシー
                  </TabsTrigger>
                  <TabsTrigger value="prohibited">禁止事項</TabsTrigger>
                </TabsList>
                <TabsContent value="terms">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    利用規約
                  </h2>
                  <p className="text-gray-300 mb-4">
                    1. サービスの利用:
                    LastBinaryのサービスを利用することにより、ユーザーは本規約に同意したものとみなされます。
                  </p>
                  <p className="text-gray-300 mb-4">
                    2. アカウント:
                    ユーザーは自身のアカウント情報の機密性を保持する責任があります。
                  </p>
                  <p className="text-gray-300 mb-4">
                    3. コンテンツ:
                    ユーザーが投稿するコンテンツに関する全ての責任はユーザーにあります。
                  </p>
                  <p className="text-gray-300">
                    4. 変更:
                    LastBinaryは、事前の通知なしに本規約を変更する権利を有します。
                  </p>
                </TabsContent>
                <TabsContent value="privacy">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    プライバシーポリシー
                  </h2>
                  <p className="text-gray-300 mb-4">
                    1. 情報収集:
                    当社は、サービス提供に必要な個人情報を収集します。
                  </p>
                  <p className="text-gray-300 mb-4">
                    2. 情報利用:
                    収集した情報は、サービス改善とユーザーエクスペリエンス向上のために使用されます。
                  </p>
                  <p className="text-gray-300 mb-4">
                    3. 情報保護:
                    ユーザーの個人情報は、適切なセキュリティ対策により保護されます。
                  </p>
                  <p className="text-gray-300">
                    4. 第三者提供:
                    法的要請がある場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
                  </p>
                </TabsContent>
                <TabsContent value="prohibited">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    禁止事項
                  </h2>
                  <p className="text-gray-300 mb-4">
                    1. 違法行為:
                    法律に違反する行為、または違法行為を助長する行為。
                  </p>
                  <p className="text-gray-300 mb-4">
                    2. なりすまし: 他者になりすましてサービスを利用する行為。
                  </p>
                  <p className="text-gray-300 mb-4">
                    3. ハッキング:
                    システムやネットワークに不正にアクセスする行為。
                  </p>
                  <p className="text-gray-300 mb-4">
                    4. スパム:
                    大量のメッセージを送信する、または不適切な広告を行う行為。
                  </p>
                  <p className="text-gray-300">
                    5. 知的財産権侵害:
                    著作権や商標権などの知的財産権を侵害する行為。
                  </p>
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
          <Card className="bg-gray-800 border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                法的免責事項
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                LastBinaryは、提供する情報やツールの正確性、完全性、有用性を保証するものではありません。ユーザーは自己責任でサービスを利用するものとし、
                取引に関連して発生した損失や損害について、LastBinaryは一切の責任を負いません。
              </p>
              <p className="text-gray-300">
                バイナリーオプション取引には高いリスクが伴います。投資は自己資金の範囲内で行い、十分な知識と経験を積んだ上で慎重に判断してください。
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}
