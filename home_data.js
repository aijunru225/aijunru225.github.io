// home_data.js: everything on the Home page

const homeData = {
    labels: {
        interests: "Research Interests",
        education: "Education",
        exp1: "Research Experience",
        exp2: "AI Safety Industry Experience (China)",
        list1: "Presentations and Conferences",
        list2: "Methods and Skills",
        footer: "For more info"
    },
    header: {
        name: "Junru (Andrea) Ai",
        name_alt: "艾隽如",
        title: "AI Safety & Governance Research · China–West AI Ecosystems · Human–AI Interaction",
        department: "M.S. in Technology, People, and Policy, Northwestern University",
        bio: [
            "Welcome! I'm Junru (Andrea) Ai, an AI governance researcher working at the intersection of AI safety, policy, and human–AI interaction. I recently completed my M.S. in Technology, People, and Policy at Northwestern University (GPA 3.93/4.0), after earning a B.Econ. in Finance from Wuhan University of Technology.",
            "I have worked on both sides of the US–China AI landscape. At StepFun, a Chinese foundation-model developer, I evaluated AI content moderation services and compared safety practices across major Chinese LLM products. At Genius Technology (BBK Electronics group), I worked on content safety for BBK children's learning tablets. I then joined the Brookings Institution as a Capstone Research Fellow with Dr. Nicol Turner Lee, comparing US, EU, and Chinese AI industrial policy, and I continue as a research assistant in two Northwestern labs led by Prof. Yang Qu and Prof. Claudia M. Haase.",
            "I am interested in how AI safety commitments can become workable and credible across institutional and political borders, and in how safety decisions made inside real platforms shape what users, especially young users, actually encounter. As a native Mandarin speaker, I work directly with Chinese-language primary sources and help connect Chinese industry practice with Western policy debates.",
            "If you'd like to talk about AI safety, governance, or collaboration, please feel free to email me."
        ]
    },
    interests: [
        "AI governance and international coordination",
        "US–China AI policy",
        "AI safety evaluation",
        "Trust & safety and safety-by-design",
        "Human–AI interaction and AI companions",
        "Adolescents and generative AI"
    ],
    education: [
        {
            period: "Sep 2025 to Sep 2026",
            school: "Northwestern University",
            degree: "M.S. in Technology, People, and Policy (STEM-designated), School of Education and Social Policy",
            details: [
                "GPA: 3.93/4.0",
                "Relevant coursework: Navigating AI & Data Governance; Data, Ethics & Policy; Foundations of Tech Policy; Technology, Emotion & Social Relationships; Technology, Psychology & Education Across Cultures",
                "University Delegate, IASEAI 2026 Conference (International Association for Safe & Ethical AI), Paris, France"
            ]
        },
        {
            period: "Sep 2021 to Jun 2025",
            school: "Wuhan University of Technology",
            degree: "B.Econ. in Finance",
            details: []
        }
    ],
    exp1: [
        {
            org: "The Brookings Institution",
            role: "Capstone Research Fellow",
            supervisor: "with Dr. Nicol Turner Lee",
            period: "Dec 2025 to Jun 2026",
            details: [
                "Restructured and authored the talent pillar of a US/EU/China AI industrial policy comparison, drawing on Chinese- and English-language sources on immigration, workforce funding, and retention.",
                "Co-authored 2 policy briefs on talent-retention gaps and AI model export controls, plus a comparative blog across data, algorithms, and talent, retained by Brookings as internal research material.",
                "Presented findings at a spring research symposium and as an academic poster at the MTePP graduation showcase, revising the argument in response to Brookings reviewers and faculty feedback."
            ]
        },
        {
            org: "Culture, Brain, and Human Development Lab & Technology and Human Development Lab, Northwestern University",
            role: "Research Assistant",
            supervisor: "PIs: Prof. Yang Qu & Prof. Claudia M. Haase",
            period: "Mar 2026 to Present",
            details: [
                "Led full-text retrieval of 265 references for a systematic review of AI in K-12 education.",
                "Authored a scoping review on influencer–fan psychology and a literature review on adolescents and AI products.",
                "Completed fMRI training and pilot-tested in-scanner tasks for an adolescent neuroimaging study."
            ]
        }
    ],
    exp2: [
        {
            org: "StepFun (Chinese foundation-model developer)",
            role: "AI Safety Intern",
            period: "Dec 2023 to Apr 2024",
            details: [
                "Benchmarked 4 cloud content-moderation vendors across 1M+ test samples in sensitive, high-risk scenarios; computed precision/recall and delivered the vendor-selection recommendation adopted by the team.",
                "Designed scenario-based safety test suites and an edge-case error-log database; diagnosed false positives on AI-generated content and benchmarked safety approaches of peer Chinese labs to refine the safety-label taxonomy."
            ]
        },
        {
            org: "Guangdong Genius Technology (BBK Electronics group)",
            role: "Content Safety / Product Management Intern",
            period: "Jun 2024 to Nov 2024",
            details: [
                "Screened the top 1,000 titles on BBK children's learning tablets via rule-based checks and manual spot review; stood up a recurring QA process with safety specialists to cut child-safety risk.",
                "Analyzed 422 user complaints using pattern recognition to surface recurring harms and latent risks; delivered corrective reports that strengthened content-safety and incident-response workflows."
            ]
        },
        {
            org: "Tencent",
            role: "Product Operations Intern",
            period: "May 2025 to Aug 2025",
            details: [
                "Built a real-time BI dashboard across 1M+ records for a Tencent Cloud product, saving 15+ hours/week."
            ]
        }
    ],
    list1: [
        "<strong>Ai, J.</strong>, et al. (2026). Poster on AI talent mobility and AI model export controls (Brookings capstone). M.S. in Technology, People, and Policy Graduation Showcase, Northwestern University.",
        "Spring research symposium presentation on comparative US/EU/China AI industrial policy (Brookings capstone), Northwestern University, 2026.",
        "Attended the International Association for Safe and Ethical AI conference (IASEAI '26) as a Northwestern delegate, Paris, France, February 2026."
    ],
    list2: [
        "<strong>Research:</strong> comparative policy analysis, Chinese/English primary-source research, policy memo writing, AI safety evaluation (precision/recall, red-team test design), scoping and systematic literature review, semi-structured interviewing",
        "<strong>Technical:</strong> Python, SQL, Tableau, Power BI, Excel (Advanced), Qualtrics, Zotero, prompt engineering",
        "<strong>Languages:</strong> Mandarin (native), English (fluent; IELTS 7.0)"
    ],
    footer: {
        text: "This page offers a glimpse of my work. My full CV is available below, and I'm always happy to hear from you by email.",
        cvText: "Download CV (PDF)",
        cvLink: "pdf/Andrea_Ai_CV.pdf"
    }
};
