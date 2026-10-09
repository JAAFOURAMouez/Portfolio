const portfolio = [
    {
        id: 0,
        projectName: "arXiv Research Companion (RAG)",
        url: "https://github.com/JAAFOURAMouez/arxiv_research_companion", 
        image: "projects/arxiv-rag.png",
        projectDetail: "A research assistant for arXiv papers built on embeddings, vector search and hybrid BM25 retrieval. It generates LLM-based insights on retrieved papers and comes with an interface that supports incremental updates of the knowledge base.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "Sentence Transformers" },
            { tech: "ChromaDB" },
            { tech: "Gradio" }
        ]
    },
    {
        id: 1,
        projectName: "Multimodal AI Video Creator (Gemini & Veo)",
        url: "https://github.com/JAAFOURAMouez/MultiModelIaAgent", 
        image: "projects/video-creator.png",
        projectDetail: "A desktop application that combines Gemini for media analysis and Veo for AI video generation, across image, audio and video inputs. It includes asynchronous generation polling and prompt enrichment for style and duration.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "Gemini API" },
            { tech: "Veo" }
        ]
    },
    {
        id: 2,
        projectName: "AI Code Review & Improvement System",
        url: "git@github.com:JAAFOURAMouez/code_review_system.git", 
        image: "projects/code-review.png",
        projectDetail: "A multi-agent code-review workflow that combines static-analysis tools with LLMs to suggest code improvements, generate tests and write documentation. It runs automatically when files change.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "LLM APIs" },
            { tech: "Ollama" }
        ]
    }
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}