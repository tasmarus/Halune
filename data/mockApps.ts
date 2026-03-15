export type AppMeta = {
  id: string;
  name: string;
  creator: string;
  runs: number;
  likes: number;
  description: string;
  image: string;
  tags: string[];
};

export const mockApps: AppMeta[] = [
  {
    id: "ai-writer",
    name: "AI Writer Studio",
    creator: "Halune Labs",
    runs: 18452,
    likes: 3124,
    description: "Generate blog posts, emails, and social content in seconds.",
    image: "https://images.unsplash.com/photo-1526378729074-2570f2410ae4?auto=format&fit=crop&w=1400&q=80",
    tags: ["Writing", "Productivity"],
  },
  {
    id: "vision-insight",
    name: "Vision Insight",
    creator: "DeepFrame",
    runs: 11273,
    likes: 2143,
    description: "Analyze images and generate structured insights quickly.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    tags: ["Vision", "Analysis"],
  },
  {
    id: "chat-crew",
    name: "Chat Crew",
    creator: "ConvAI",
    runs: 9421,
    likes: 1785,
    description: "Deploy a conversational assistant with customizable personas.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee9813?auto=format&fit=crop&w=1400&q=80",
    tags: ["Chat", "Productivity"],
  },
  {
    id: "data-pipeline",
    name: "Data Pipeline",
    creator: "FlowBuild",
    runs: 7340,
    likes: 1237,
    description: "Build ETL workflows with templates and monitored data flows.",
    image: "https://images.unsplash.com/photo-1581091012184-9cd24c40a2ae?auto=format&fit=crop&w=1400&q=80",
    tags: ["Data", "Pipelines"],
  },
  {
    id: "analytics-pro",
    name: "Analytics Pro",
    creator: "Insight Labs",
    runs: 5613,
    likes: 874,
    description: "Track user engagement and conversion metrics across apps.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
    tags: ["Analytics", "Dashboard"],
  },
  {
    id: "code-gen",
    name: "Code Genius",
    creator: "DevMate",
    runs: 3254,
    likes: 416,
    description: "Generate and refactor code snippets for common tasks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    tags: ["Code", "Developer"],
  },
];
