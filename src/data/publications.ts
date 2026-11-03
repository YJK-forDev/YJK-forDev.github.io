import type { ImageMetadata } from "astro";
import chiworkTeaser from "../assets/images/teasers/chiwork.png";
import delegationTeaser from "../assets/images/teasers/author-struggling-brown.png";
import evaluatorsTeaser from "../assets/images/teasers/educators-purple.png";
import noviceTeaser from "../assets/images/teasers/novice.png";
import repairTeaser from "../assets/images/teasers/repair.png";
import salsaTeaser from "../assets/images/teasers/salsa.png";
import vrTeaser from "../assets/images/teasers/vr.png";
import screensTeaser from "../assets/images/teasers/screens.png";

export type Publication = {
    title: string;
    keywords?: string[];
    year: number;
    venue: string;
    authors: string[];
    authorNote?: string;
    paperUrl?: string;
    teaser?: ImageMetadata;
    researchQuestions?: string;
    questionsLabel?: string;
};

// Newest first. The site owner's name is highlighted on the Publications page.
export const publications: Publication[] = [
    {
        title: "Educators as Evaluators: Designing for Educator-Led Evaluation of GenAI in Education",
        keywords: ["AI for Education", "AI Evaluation", "Human-Centered AI"],
        year: 2027,
        venue: "In submission",
        authors: ["Yujin Kim", "Xinyi Lu", "Yan Tao", "Zoe Kaputa", "Pragati Maheshwary", "Chenyang Wang", "Kenneth Holstein", "Hariharan Subramonyam", "Luke Guerdan", "Advait Sarkar", "Xu Wang", "Shamya Karumbaiah", "Devansh Saxena"],
        teaser: evaluatorsTeaser,
        researchQuestions: "Q1. What should educators evaluate when GenAI enters the classroom, and how, given their limited time?\nQ2. Rather than placing the full burden of evaluation on individual educators, how can GenAI and its surrounding environment be designed to make educator-led evaluation possible?",
        questionsLabel: "Workshop Questions"
    },
    {
        title: "SALSA: Supporting Instructors in Shaping Appropriate Student–AI Interaction for Learning in Assignments",
        keywords: ["AI for Education", "Human-AI Interaction", "Interactive AI Systems"],
        year: 2027,
        venue: "In submission",
        authors: ["Yujin Kim", "Pragati Maheshwary", "Shamya Karumbaiah", "David McHugh", "Devansh Saxena"],
        teaser: salsaTeaser,
        researchQuestions: "RQ1. How do higher education instructors shape student–AI interaction in assignments, and what challenges and needs do they have?\nRQ2. How can a tool be designed to help instructors shape this interaction?\nRQ3. How does SALSA support this process, and what sociotechnical gaps emerge?"
    },
    {
        title: "Empowering Teachers to Design AI Roles for Work: An Empirical Study of Teachers' AI Role Design Practices",
        keywords: ["AI for Education", "Human-AI Collaboration", "AI Role Design"],
        year: 2026,
        venue: "Proceedings of the 5th Annual Symposium on Human-Computer Interaction for Work (CHIWORK'26)",
        authors: ["Yujin Kim", "Yaxuan Yin", "Shamya Karumbaiah", "Devansh Saxena"],
        paperUrl: "https://dl.acm.org/doi/pdf/10.1145/3808045.3808094",
        teaser: chiworkTeaser,
        researchQuestions: "RQ1. What AI roles do teachers imagine for lesson planning, and what do they expect from each?\nRQ2. What barriers and opportunities affect teachers’ ability to design and adapt these roles?"
    },
    {
        title: "When AI Breaks, Teachers Repair: Pedagogical Repair Work in Situated Classroom Practice",
        keywords: ["AI for Education", "Responsible AI", "AI Governance"],
        year: 2026,
        venue: "ACM Conference on Fairness, Accountability, and Transparency (ACM FAccT'26)",
        authors: ["Yaxuan Yin", "Shamya Karumbaiah", "Yujin Kim", "Devansh Saxena"],
        paperUrl: "https://dl.acm.org/doi/pdf/10.1145/3805689.3812281",
        teaser: repairTeaser,
        researchQuestions: "How do K–12 teachers anticipate AI breakdowns in the classroom, and how do they repair their teaching practice in response?"
    },
    {
        title: "Speaking with Screens: Design Space and Guidelines for Informational Robot Screens",
        keywords: ["Human-Robot Interaction", "Multimodal Interaction", "Robot Interface Design"],
        year: 2026,
        venue: "Proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction (ACM/IEEE HRI'26)",
        authors: ["Yujin Kim", "Christine P. Lee", "Bilge Mutlu"],
        paperUrl: "https://dl.acm.org/doi/pdf/10.1145/3757279.3785557",
        teaser: screensTeaser,
        researchQuestions: "RQ1. What is the design space for robot screens?\nRQ2. Which elements of this design space do users prefer?\nRQ3. How do robot screens affect user experience?"
    },
    {
        title: "“I’m not thinking anymore, just following the path.”: Investigating Task Delegation Trend of Author-AI Co-Creation with Generative AIs",
        keywords: ["Generative AI", "Human-AI Co-Creation", "Task Delegation", "Trust in AI"],
        year: 2025,
        venue: "arXiv preprint arXiv:2502.16740",
        authors: ["Yujin Kim", "Suhyun Kim", "Yeojin Kim", "Soyeon Lee", "Uran Oh"],
        paperUrl: "https://arxiv.org/pdf/2502.16740",
        teaser: delegationTeaser,
        researchQuestions: "RQ1. How do authors delegate their creation tasks to generative AI?\nRQ2. How does AI use vary with the level of delegation?\nRQ3. Does the level of delegation change during author–AI co-creation?"
    },
    {
        title: "Understanding Novice's Annotation Process For 3D Semantic Segmentation Task With Human-In-The-Loop",
        keywords: ["Human-in-the-Loop", "Human-AI Collaboration", "AI-Assisted Annotation"],
        year: 2024,
        venue: "Proceedings of the 29th International Conference on Intelligent User Interfaces (ACM IUI'24)",
        authors: ["Yujin Kim", "Eunyeoul Lee", "Yunjung Lee", "Uran Oh"],
        paperUrl: "https://dl.acm.org/doi/pdf/10.1145/3640543.3645150",
        teaser: noviceTeaser,
        researchQuestions: "RQ1. How does AI assistance affect novices’ performance and experience when annotating 3D point clouds in HITL?\nRQ2. How does the number of classes shown at once in the model’s result affect their performance and experience in HITL?"
    },
    {
        title: "The design space of the auditory representation of objects and their behaviours in virtual reality for blind people",
        keywords: ["Accessibility", "Virtual Reality", "Auditory Interfaces"],
        year: 2023,
        venue: "IEEE Transactions on Visualization and Computer Graphics (IEEE TVCG'23)",
        authors: ["João Guerreiro", "Yujin Kim", "Rodrigo Nogueira", "SeungA Chung", "André Rodrigues", "Uran Oh"],
        paperUrl: "https://techandpeople.github.io/downloads/guerreiro2023_ieeeVR.pdf",
        teaser: vrTeaser,
        researchQuestions: "What is the design space for using audio to represent objects’ locations and behaviours to blind people in immersive VR?"
    }
];
