import { Header } from "@/components/layout/Header";
import AppCard from "@/components/ui/AppCard";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white">

      <Header />

      <div className="w-full max-w-6xl mx-auto px-6 py-6">
        
        {/* MOST POPULAR */}
        <h2 className="text-2xl mb-6">Most Popular</h2>

        <div className="grid grid-cols-3 gap-6">
          <AppCard
            title="AI Writer Studio"
            author="Halune Labs"
            description="Generate blog posts, emails, and social content."
            clicks={18500}
            likes={3100}
          />

          <AppCard
            title="Vision Insight"
            author="DeepFrame"
            description="Analyze images quickly."
            clicks={11300}
            likes={2100}
          />

          <AppCard
            title="Chat Crew"
            author="ConvAI"
            description="Build AI assistants."
            clicks={9400}
            likes={1800}
          />
        </div>

        {/* RECOMMENDED FOR YOU */}
        <h2 className="text-2xl mt-12 mb-6">
          Recommended for you
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <AppCard
            title="Prompt Genius"
            author="AI Tools Co"
            description="Craft better prompts instantly."
            clicks={7200}
            likes={1500}
          />

          <AppCard
            title="Ad Copy Pro"
            author="MarketAI"
            description="Generate high-converting ads."
            clicks={6800}
            likes={1200}
          />

          <AppCard
            title="Email Wizard"
            author="InboxAI"
            description="Write emails that get replies."
            clicks={5400}
            likes={900}
          />
        </div>

      </div>
    </main>
  );
}