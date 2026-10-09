// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Yassine fliss ',
    image: "images/Yassine.jpg",
    designation: 'AI Engineer | Machine Learning Engineer | Data Scientist',
    view: "Hey everyone! I wanted to take a moment to recommend Mouez Jaafoura for any Ai Engineering opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of Machine Learning and RAG systems concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Mouez is a reliable and dedicated team member who would be a great asset to any AI team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/yassine-fliss-148851250/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
