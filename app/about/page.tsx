import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold mb-4">소개 페이지</h1>
        <p className="text-gray-700 mb-6">이 프로젝트는 Next.js와 Tailwind CSS를 사용하여 만든 React 앱입니다.</p>
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          홈으로 돌아가기
        </Link>
      </main>
    </div>
  )
}