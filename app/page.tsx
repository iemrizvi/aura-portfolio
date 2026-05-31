// app/page.tsx
import dynamic from "next/dynamic";
import styles from "./page.module.css";

const AuraChat = dynamic(() => import("@/components/AuraChat"), { ssr: false });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>

        {/* ── HEADER ─────────────────────────────── */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.nameBlock}>
              <h1 className={styles.name}>
                Sakina <em>Rizvi</em>
              </h1>
              <p className={styles.role}>CS Student &amp; Developer · Karachi, Pakistan</p>
            </div>
            <div className={styles.headerLinks}>
              <a href="https://github.com/iemrizvi" target="_blank" rel="noopener noreferrer" className={styles.linkPill}>
                <GitHubIcon /> GitHub
              </a>
              <a href="https://linkedin.com/in/iemrizvi" target="_blank" rel="noopener noreferrer" className={styles.linkPill}>
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>
          <p className={styles.tagline}>
            CS student building at the intersection of AI automation, backend systems, and business operations.
            Currently in my 6th semester of BSCS.
          </p>
        </header>

        {/* ── EDUCATION ──────────────────────────── */}
        <section id="education" className={styles.section}>
          <p className={styles.sectionLabel}>Education</p>
          <div className={styles.eduRow}>
            <div>
              <p className={styles.eduSchool}>Millennium Institute of Technology &amp; Entrepreneurship</p>
              <p className={styles.eduDegree}>BS Computer Science · 6th Semester</p>
            </div>
            <span className={styles.eduDate}>Sep 2023 — Present</span>
          </div>
          <div className={styles.eduRow} style={{ marginTop: "1rem" }}>
            <div>
              <p className={styles.eduSchool}>St. Joseph&apos;s College for Women</p>
              <p className={styles.eduDegree}>Intermediate — Computer Science</p>
            </div>
            <span className={styles.eduDate}>2021 — 2023</span>
          </div>
        </section>

        {/* ── EXPERIENCE ─────────────────────────── */}
        <section id="experience" className={styles.section}>
          <p className={styles.sectionLabel}>Experience</p>

          <div className={styles.expItem}>
            <div className={styles.expHeader}>
              <div>
                <span className={styles.expTitle}>Odoo ERP Implementator Intern</span>
                <span className={styles.expCompany}> · Times Group Ltd</span>
              </div>
              <span className={styles.expDate}>Jan 2026 — Apr 2026</span>
            </div>
            <div className={styles.tags}>
              {["Python","PostgreSQL","Odoo","SQL","QWeb","XML","ERP Implementation","Business Workflows"].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.expItem}>
            <div className={styles.expHeader}>
              <div>
                <span className={styles.expTitle}>Social Media &amp; Shopify Manager</span>
                <span className={styles.expCompany}> · We-360</span>
              </div>
              <span className={styles.expDate}>Jan 2024 — Oct 2024</span>
            </div>
            <div className={styles.tags}>
              {["Shopify","SEO","Meta Business Suite","Content Strategy","PR Cordination/Management"].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.expItem}>
            <div className={styles.expHeader}>
              <div>
                <span className={styles.expTitle}>Customer Service Intern</span>
                <span className={styles.expCompany}> · We-360</span>
              </div>
              <span className={styles.expDate}>Oct 2023 — Dec 2023</span>
            </div>
          </div>
        </section>

        {/* ── SKILLS ─────────────────────────────── */}
        <section id="skills" className={styles.section}>
          <p className={styles.sectionLabel}>Skills</p>
          <div className={styles.skillsGrid}>
            {[
              { title: "AI & Automation", items: "LangChain · LangGraph\nOpenAI APIs · Groq\nAI Agents · n8n\nChatGPT · Claude" },
              { title: "Development",     items: "Python · FastAPI\nNext.js · JavaScript\nREST APIs · Streamlit\nGit · GitHub " },
              { title: "Databases",       items: "PostgreSQL · MongoDB\nSQLite · MySQL\nSQL · MSSQL" },
              { title: "ERP & Ops",       items: "Odoo ERP · QWeb\nCursor · Claude Code\nGoogle Sheets" },
              { title: "Other",           items: "Shopify · SEO\nMeta Business Suite\nCold Outreach\nCustomer Relations" },
            ].map(({ title, items }) => (
              <div key={title} className={styles.skillGroup}>
                <p className={styles.skillGroupTitle}>{title}</p>
                <p className={styles.skillList}>{items.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
                ))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ───────────────────────────── */}
        <section id="projects" className={styles.section}>
          <p className={styles.sectionLabel}>Projects</p>
          {[
            {
              name: "AI Medical Emergency System",
              desc: "Intelligent emergency routing with priority queues, geolocation, and AI workflow integration built on FastAPI.",
              stack: ["Python","FastAPI","LangChain","OpenAI","Streamlit","SQLite"],
            },
            
                        {
              name: "CodeSage – AI Learning Assistant",
              desc: "Conversational AI chatbot built with LangGraph and Groq that explains Computer Science concepts, generates code examples, and maintains short-term conversational memory for interactive learning.",
              stack: ["Python","LangGraph","LangChain","Groq API","Prompt Engineering"],
            },

            {
              name: "Intelligent Email Processing Agent",
              desc: "Email classification, auto-response generation, and complaint escalation pipeline with MongoDB logging.",
              stack: ["Python","FastAPI","LangChain","Groq","MongoDB"],
            },
            {
              name: "4-Way Traffic Controller (Q-Learning)",
              desc: "Reinforcement learning traffic simulation using Q-table optimization for adaptive intersection control.",
              stack: ["Python","Q-Learning","NumPy","Matplotlib"],
            },
            {
              name: "AURA — AI Personal Assistant",
              desc: "Multi-step AI agent with long-term memory, workflow orchestration, and persistent SQLite memory storage.",
              stack: ["Python","LangGraph","Groq","SQLite"],
            },
          ].map((p) => (
            <div key={p.name} className={styles.projectItem}>
              <p className={styles.projectName}>{p.name}</p>
              <p className={styles.projectDesc}>{p.desc}</p>
              <div className={styles.projectStack}>
                {p.stack.map(t => <span key={t} className={styles.stackTag}>{t}</span>)}
              </div>
            </div>
          ))}
        </section>

      </div>

      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <p>Built by Sakina Rizvi · {new Date().getFullYear()}</p>
        </div>
      </footer>

      <AuraChat />
    </main>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
