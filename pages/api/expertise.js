const expertise = [
    {
        id: 0,
        title: 'R\&D Systems \& ML Engineering Intern',
        desc: 'Developed a real-time telemetry dashboard for a custom Linux kernel module, combining a C LD_PRELOAD library to profile memory allocations with a Node.js/WebSocket backend streaming kernel metrics.'
    },
    {
        id: 1,
        title: 'Machine Learning Engineer Intern',
        desc: 'Built a relational database for sea-turtle field data and developed predictive models to estimate turtle populations using Python, Pandas, and PyTorch.'
    }
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
