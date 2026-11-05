// home_data.js: everything on the Home page

const homeData = {
    labels: {
        interests: "Research Interests",
        education: "Education",
        exp1: "Research Experience",
        exp2: "Industry Experience (China)",
        list1: "Presentations and Conferences",
        list2: "Methods and Skills",
        footer: "For more info"
    },
    header: {
        name: "Junru (Andrea) Ai",
        name_alt: "艾隽如",
        title: "Human–AI Interaction · Emotional AI · AI Safety",
        department: "M.S. in Technology, People, and Policy, Northwestern University",
        bio: [
            "I'm Junru (Andrea) Ai. I study how people get attached to AI systems, how they come to rely on them, and how they let go.",
            "I first saw this from inside product teams. At StepFun, a Chinese foundation-model developer, I read through user conversations on an AI companion app to find where safety rules broke down, and benchmarked four content-moderation vendors on a million test samples. At Genius Technology (BBK Electronics group), I worked on content safety for learning tablets widely used by Chinese students. The logs showed me what people say to AI in their most private moments. They didn't tell me why.",
            "At Northwestern, where I completed an M.S. in Technology, People, and Policy (GPA 3.93/4.0), I went looking for the why. I interviewed AI companion users about intimate conversations with AI and kept hearing the same cycle: loneliness, brief relief, then shame. I also work as a research assistant in Prof. Yang Qu's labs on adolescents and technology, and spent six months on comparative AI industrial policy at the Brookings Institution with Dr. Nicol Turner Lee.",
            "The question I care most about now is one that safety evaluations rarely ask: what a healthy ending looks like for emotional AI. Content filters catch harmful outputs, but dependence builds through relational patterns no single message reveals. I want to study, design, and evaluate for that. I'm currently applying to PhD programs in HCI and human–AI interaction.",
            "If you work on related questions, I'd be glad to hear from you by email."
        ]
    },
    interests: [
        "Human–AI interaction and AI companions",
        "Emotional reliance, boundaries, and healthy exits in emotional AI",
        "Youth well-being and online safety in generative AI",
        "Trust & safety and safety-by-design",
        "Content moderation and AI safety evaluation",
        "Cross-cultural HCI and Chinese AI products"
    ],
    education: [
        {
            period: "Sep 2025 to Sep 2026",
            school: "Northwestern University",
            degree: "M.S. in Technology, People, and Policy (STEM-designated), School of Education and Social Policy",
            details: [
                "GPA: 3.93/4.0",
                "Relevant coursework: Technology in Context; Technology, Emotion, and Social Relationships; Technology, Psychology, and Education Across Cultures; Navigating AI and Data Governance; Data, Ethics, and Policy",
                "University Delegate, IASEAI '26 (International Association for Safe and Ethical AI), Paris, France"
            ]
        },
        {
            period: "Sep 2021 to Jun 2025",
            school: "Wuhan University of Technology",
            degree: "B.Econ. in Finance",
            details: [
                "Quantitative coursework: Econometrics; Probability Theory and Mathematical Statistics; Statistics (SPSS); Linear Algebra; Calculus; Python Programming; Game Theory"
            ]
        }
    ],
    exp1: [
        {
            org: "Culture, Brain, and Human Development Lab & Technology and Human Development Lab, Northwestern University",
            role: "Research Assistant",
            supervisor: "PI: Prof. Yang Qu",
            period: "Mar 2026 to Present",
            details: [
                "Authored a literature review on how AI-driven products and short-form video influencers shape adolescents' online experiences and well-being, informing the labs' research on adolescent digital well-being.",
                "Led full-text retrieval for a three-RA systematic review of AI and technology in K-12 education, securing 251 of 265 records (95%); audited DOI metadata and built a Python workflow to deliver an analysis-ready corpus.",
                "Pilot-tested in-scanner attention paradigms for an adolescent fMRI study after MRI safety training, flagging protocol issues before data collection.",
                "Contributed to parallel parent- and child-report survey instruments on family relationships and adolescent development."
            ]
        },
        {
            org: "The Brookings Institution",
            role: "Capstone Research Fellow",
            supervisor: "with Dr. Nicol Turner Lee",
            period: "Dec 2025 to Jun 2026",
            details: [
                "Restructured and authored the talent pillar of a US/EU/China comparison of AI industrial policy, analyzing immigration, workforce, and retention policy through Chinese- and English-language sources.",
                "Co-authored two policy briefs (AI talent retention; AI model export controls) and a blog post, Beyond the Chip Race, retained by Brookings as internal research; presented at a spring symposium and the MTePP Showcase."
            ]
        }
    ],
    exp2: [
        {
            org: "StepFun (Chinese foundation-model developer)",
            role: "AI Product Intern, AI companion app safety",
            period: "Jan 2024 to Mar 2024",
            details: [
                "Analyzed sexually explicit user–AI chats from an AI companion app to identify filter-evasion patterns and classification ambiguities, helping refine a 15-category, three-tier sexual-content taxonomy and its prohibited-term lexicon.",
                "Benchmarked four content-moderation vendors on 1M multimodal test samples (text, images, and AI-generated avatars; about 30% sexual content), measuring correct-block and false-block rates; the team adopted my recommendation.",
                "Built scenario-based safety evaluation suites and an edge-case error-log database; diagnosed false positives on AI-generated avatars and benchmarked safety practices across Chinese LLM products."
            ]
        },
        {
            org: "Guangdong Genius Technology (BBK Electronics group; children's smart devices)",
            role: "Content Safety / Product Management Intern",
            period: "Jun 2024 to Nov 2024",
            details: [
                "Analyzed 422 user complaints on content-safety risks for child users and screened the top 1,000 books on BBK learning tablets through automated and manual review, setting up recurring checks on third-party apps and links.",
                "Scraped 1,040 comments from 230 social media accounts with Python and analyzed how families evaluate children's learning devices, informing product iteration."
            ]
        },
        {
            org: "Tencent",
            role: "Product Data Analyst Intern",
            period: "May 2025 to Aug 2025",
            details: [
                "Built automated Python and SQL pipelines integrating 1M+ order and payment records, cutting manual reporting by 15+ hours a week; analyzed user behavior and conversion funnels in Power BI and Tableau."
            ]
        },
        {
            org: "MytePro",
            role: "Data Governance Intern",
            period: "Dec 2024 to Apr 2025",
            details: [
                "Wrote Python cleaning and validation workflows for 30,000+ real estate project records and ran exploratory statistical analysis in R and SPSS."
            ]
        }
    ],
    list1: [
        "<strong>Ai, J.</strong>, et al. (2026). Poster on AI talent mobility and AI model export controls (Brookings capstone). M.S. in Technology, People, and Policy Graduation Showcase, Northwestern University.",
        "Spring research symposium presentation on comparative US/EU/China AI industrial policy (Brookings capstone), Northwestern University, 2026.",
        "Attended the International Association for Safe and Ethical AI conference (IASEAI '26) as a Northwestern delegate, Paris, France, February 2026."
    ],
    list2: [
        "<strong>Research methods:</strong> semi-structured interviewing, qualitative coding and thematic analysis, field observation, survey design, usability pilot testing, scoping and systematic literature review, AI safety evaluation design, fMRI safety training",
        "<strong>Tools:</strong> Python, R, SQL, SPSS, NVivo, Qualtrics, Figma, Tableau, Power BI, Zotero",
        "<strong>Languages:</strong> Mandarin (native), English (advanced; IELTS 7.0)"
    ],
    footer: {
        text: "This page offers a glimpse of my work. My full CV is available below, and I'm always happy to hear from you by email.",
        cvText: "Download CV (PDF)",
        cvLink: "pdf/Andrea_Ai_CV.pdf"
    }
};
