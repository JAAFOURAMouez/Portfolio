const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'ENSIMAG - Grenoble INP',
                degree: 'Engineering Degree, Information Systems (ISI) - Dual Degree in Artificial Intelligence',
                detail: "Third-year engineering student. Coursework includes Generative & Multimodal AI, Mathematical Foundations of Machine Learning, Computer Graphics and Large-Scale Data Management.",
                year: '2023 - Present'
            },
            {
                id: 1,
                title: 'EISINE - URCA',
                degree: 'CUPGE, Mathematics and Physics',
                detail: "Intensive undergraduate studies in Mathematics and Physics. Ranked first in my cohort (major de promotion).",
                year: '2021 - 2023'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'KRACKOS / LIG',
                role: 'R&D Systems & ML Engineering Intern',
                url: 'no website',
                desc: 'I built a real-time telemetry dashboard for a custom Linux kernel module, using a C LD_PRELOAD library to profile memory allocations and a Node.js/WebSocket backend to stream kernel metrics. I also integrated ML-based anomaly detection and forecasting, with a Next.js/React interface deployed behind an Apache reverse proxy.',
                year: '01/2025 - Present',
                location: 'Grenoble, France'
            },
            {
                id: 2,
                title: 'Notre Grand Bleu',
                role: 'Machine Learning Engineer Intern',
                url: 'no website',
                desc: 'I built a relational database for sea-turtle field data and developed predictive models with Python, Pandas and PyTorch to estimate turtle populations, after cleaning and analyzing the ecological data.',
                year: '06/2024 - 08/2024',
                location: 'Monastir, Tunisia'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
