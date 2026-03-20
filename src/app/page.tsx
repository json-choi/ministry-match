import MinistryTest from "@/components/MinistryTest";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col p-4 sm:p-8">
      <div className="flex-1 w-full max-w-3xl mx-auto flex flex-col justify-center py-8">
        <MinistryTest />
      </div>
    </main>
  );
}
