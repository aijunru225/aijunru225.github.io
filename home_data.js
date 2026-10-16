// home_data.js: everything on the Home page

const homeData = {
    labels: {
        interests: "Research Interests",
        education: "Education",
        exp1: "Research Experience",
        exp2: "Industry Experience in AI Safety and Trust & Safety",
        list1: "Presentations and Conferences",
        list2: "Methods and Skills",
        footer: "For more info"
    },
    header: {
        name: "Junru (Andrea) Ai",
        name_alt: "艾隽如",
        title: "M.S. in Technology, People, and Policy",
        department: "Northwestern University, School of Education and Social Policy",
        bio: [
            "Welcome! I'm Junru (Andrea) Ai. I recently completed my M.S. in Technology, People, and Policy at Northwestern University (GPA 3.93/4.0), after earning a B.Econ. in Finance from Wuhan University of Technology.",
            "I study how people, especially adolescents, experience generative AI products such as chatbots and AI companions, and how design and safety practices can better support their wellbeing. My research draws on qualitative and mixed methods: semi-structured interviews, field observation, survey design, and systematic literature review.",
            "My path into research runs through industry. Before graduate school, I evaluated AI content moderation at StepFun, a large language model company, and worked on content safety for children's smart devices at Genius Technology (imoo). That work showed me how safety decisions made inside real platforms shape what users, and young users in particular, actually encounter. At Northwestern, I was a research assistant in Prof. Yang Qu's Culture, Brain, and Human Development Lab and a Capstone Research Fellow with Dr. Nicol Turner Lee at the Brookings Institution.",
            "I am preparing PhD applications in Human-Computer Interaction and Information Science. If you'd like to talk about research or collaboration, please feel free to email me."
        ]
    },
    interests: [
        "Human-AI interaction",
        "Adolescents and generative AI",
        "AI companions and emotional reliance",
        "Wellbeing in technology use",
        "Trust & safety and safety-by-design",
        "Qualitative and mixed-methods user research"
    ],
    education: [
        {
            period: "Sep 2025 to Sep 2026",
            school: "Northwestern University",
            degree: "M.S. in Technology, People, and Policy (STEM-designated), School of Education and Social Policy",
            details: [
                "GPA: 3.93/4.0",
                "Relevant coursework: Technology in Context; Technology, Emotion, and Social Relationships; Technology, Psychology, and Education Across Cultures; AI and Data Governance; Data Ethics and Policy; Foundations of Science and Technology Policy; Introduction to Artificial Intelligence; Negotiation and Conflict Management"
            ]
        },
        {
            period: "Sep 2021 to Jun 2025",
            school: "Wuhan University of Technology",
            degree: "B.Econ. in Finance",
            details: [
                "Relevant coursework: Statistics, Python Programming, Game Theory, Principles of Management, Corporate Finance"
            ]
        }
    ],
    exp1: [
        {
            org: "Culture, Brain, and Human Development Lab, Northwestern University",
            role: "Research Assistant",
            supervisor: "PI: Prof. Yang Qu",
            period: "Mar 2026 to Aug 2026",
            details: [
                "Completed fMRI training and supported participant recruitment for an adolescent neuroimaging study.",
                "Pilot-tested in-scanner attention tasks, evaluating their usability and procedural flow from the participant's perspective before data collection.",
                "Assisted in developing parallel parent and child surveys for a study of family relationships and adolescent development, focusing on how parents and adolescents perceive each other.",
                "Served as lead research assistant on a three-person search team for a systematic review of AI and digital technologies in K-12 education; identified, retrieved, and archived 265 articles."
            ]
        },
        {
            org: "The Brookings Institution",
            role: "Capstone Research Fellow",
            supervisor: "Supervisor: Dr. Nicol Turner Lee",
            period: "Dec 2025 to Jun 2026",
            details: [
                "Led the talent policy pillar of a comparative study of AI industrial policy in the United States, European Union, and China, analyzing how immigration rules, workforce investment, and retention mechanisms shape national AI competitiveness.",
                "Co-drafted two policy briefs on AI talent mobility and AI model export controls, later presented as an academic poster.",
                "Authored a comparative policy blog post, retained by Brookings as internal research material."
            ]
        }
    ],
    exp2: [
        {
            org: "Genius Technology (imoo, children's smart devices)",
            role: "Content Product Intern",
            period: "Jun 2024 to Sep 2024",
            details: [
                "Analyzed 422 user complaint cases to identify high-frequency content safety risks for child users; authored a remediation report that strengthened risk-handling workflows.",
                "Collected 1,040 user comments from 230 social media accounts with a Python scraper to assess how families evaluate children's learning devices."
            ]
        },
        {
            org: "StepFun (AI unicorn, large language models)",
            role: "AI Product Intern",
            period: "Jan 2024 to Mar 2024",
            details: [
                "Evaluated AI content moderation services from four cloud vendors (including Volcano Engine and Tencent Cloud) on 1M+ samples across political, sexual, and illegal content; measured false-positive rates and led vendor selection.",
                "Diagnosed causes of false-positive blocking of user-generated avatars and compared content safety practices across major Chinese LLM products (Kimi, Zhipu, ERNIE Bot, Doubao), recommending refinements to safety labels."
            ]
        },
        {
            org: "Tencent",
            role: "Product Operations Intern",
            period: "May 2025 to Aug 2025",
            details: [
                "Cleaned and analyzed three years of million-record sales data; produced five channel insight reports presented directly to the department head.",
                "Built a daily-updated sales dashboard connected to the backend system, automatically distributed to the full department."
            ]
        },
        {
            org: "MytePro",
            role: "Project Management Intern",
            period: "Dec 2024 to Apr 2025",
            details: [
                "Integrated 30,000+ real estate project records across contract, payment, and engineering systems into a unified data ledger.",
                "Co-authored a master data management manual covering 508 projects and resolved 80+ client technical issues."
            ]
        }
    ],
    list1: [
        "<strong>Ai, J.</strong>, et al. (2026). Poster on AI talent mobility and AI model export controls (Brookings capstone). M.S. in Technology, People, and Policy Graduation Showcase, Northwestern University.",
        "Attended the International Association for Safe and Ethical AI conference (IASEAI '26) as a Northwestern delegate, Paris, France, February 2026."
    ],
    list2: [
        "<strong>Research methods:</strong> semi-structured interviewing, qualitative coding and thematic analysis, field observation, survey design, usability pilot testing, scoping and systematic literature review, fMRI training",
        "<strong>Technical:</strong> Python (data analysis, web scraping), SQL, Tableau, Excel",
        "<strong>Languages:</strong> Mandarin (native), English (fluent; IELTS 7.0)"
    ],
    footer: {
        text: "This page offers a glimpse of my work. My full academic CV is available below, and I'm always happy to hear from you by email.",
        cvText: "Download Academic CV (PDF)",
        cvLink: "pdf/Junru_Ai_Academic_CV.pdf"
    }
};
