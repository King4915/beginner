import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const vocabulary = [
  {
    word: 'align',
    pronunciation: '/əˈlaɪn/',
    type: 'verb',
    meaning: 'To make things match or work together toward a common goal.',
    scenario: 'Meeting',
    image: '🎯',
    example: 'We need to align our deadlines with the client approval timeline.',
    note: 'This is often used in project planning and stakeholder communication.',
  },
  {
    word: 'deadline',
    pronunciation: '/ˈded.laɪn/',
    type: 'noun',
    meaning: 'The latest time by which something must be completed.',
    scenario: 'Project Management',
    image: '⏰',
    example: 'The deadline for the proposal is Friday, but we should aim to finish earlier.',
    note: 'Useful when discussing priorities, schedule changes, and deliverables.',
  },
  {
    word: 'collaborate',
    pronunciation: '/kəˈlæbəreɪt/',
    type: 'verb',
    meaning: 'To work jointly with others, especially to achieve a shared outcome.',
    scenario: 'Teamwork',
    image: '🤝',
    example: 'Our design and engineering teams collaborate closely during product launches.',
    note: 'Common in workplace settings when discussing teamwork and cross-functional projects.',
  },
  {
    word: 'proactive',
    pronunciation: '/proʊˈæktɪv/',
    type: 'adjective',
    meaning: 'Taking action before a problem happens rather than reacting after it appears.',
    scenario: 'Leadership',
    image: '🚀',
    example: 'She is very proactive and often identifies issues before they become urgent.',
    note: 'A highly valued trait in managerial and professional communication.',
  },
  {
    word: 'escalate',
    pronunciation: '/ˈeskəleɪt/',
    type: 'verb',
    meaning: 'To raise an issue to a higher level when it cannot be handled at the current one.',
    scenario: 'Communication',
    image: '📈',
    example: 'If this issue is not resolved by the end of the day, I will escalate it to the manager.',
    note: 'Often used in customer support and operations discussions.',
  },
  {
    word: 'feedback',
    pronunciation: '/ˈfiːd.bæk/',
    type: 'noun',
    meaning: 'Comments or suggestions about how something can be improved.',
    scenario: 'Performance Review',
    image: '💬',
    example: 'I appreciate your feedback on the presentation and will revise the data slides.',
    note: 'A key word in coaching, reviews, and team development.',
  },
];

const phrases = [
  {
    phrase: 'touch base',
    pronunciation: '/tʌtʃ beɪs/',
    meaning: 'To briefly check in or have a quick conversation about something.',
    scenario: 'Daily team updates',
    image: '📞',
    example: 'Let’s touch base tomorrow morning to review the timeline.',
    explanation:
      'This phrase is informal and natural in workplace conversations when you want a short update without a long meeting.',
  },
  {
    phrase: 'run it by me',
    pronunciation: '/rʌn ɪt baɪ miː/',
    meaning: 'To ask someone to share an idea or plan for your opinion.',
    scenario: 'Sharing ideas',
    image: '📝',
    example: 'Could you run the new proposal by me before sending it to the client?',
    explanation:
      'You often use this in casual business communication when asking for feedback or approval before acting.',
  },
  {
    phrase: 'think outside the box',
    pronunciation: '/θɪŋk aʊtˈsaɪd ðə bɒks/',
    meaning: 'To be creative and approach a problem in a new way.',
    scenario: 'Innovation',
    image: '💡',
    example: 'We need to think outside the box to improve customer retention.',
    explanation:
      'This phrase is commonly used in brainstorming sessions and creative problem-solving discussions.',
  },
  {
    phrase: 'on the same page',
    pronunciation: '/ɒn ðə seɪm peɪdʒ/',
    meaning: 'To agree on the same understanding or plan.',
    scenario: 'Project alignment',
    image: '📄',
    example: 'Before we move forward, I want to make sure we are on the same page about the scope.',
    explanation:
      'It is used when checking alignment between team members, clients, or managers.',
  },
  {
    phrase: 'take the lead',
    pronunciation: '/teɪk ðə liːd/',
    meaning: 'To take responsibility for guiding a task or project.',
    scenario: 'Leadership',
    image: '🧭',
    example: 'Sarah will take the lead on the onboarding process this quarter.',
    explanation:
      'This phrase highlights initiative and leadership, especially when someone guides a team or project.',
  },
  {
    phrase: 'keep in mind',
    pronunciation: '/kiːp ɪn maɪnd/',
    meaning: 'To remember an important point or caution during a task or discussion.',
    scenario: 'Communication',
    image: '🧠',
    example: 'Please keep in mind that the budget is limited for this phase.',
    explanation:
      'Often used to politely remind someone of important details or constraints without sounding harsh.',
  },
];

const filters = ['All', 'Meeting', 'Project Management', 'Teamwork', 'Leadership', 'Communication', 'Performance Review'];

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showPhrase, setShowPhrase] = useState(false);

  const visibleVocabulary =
    activeFilter === 'All' ? vocabulary : vocabulary.filter((item) => item.scenario === activeFilter);

  const visiblePhrases =
    activeFilter === 'All' ? phrases : phrases.filter((item) => item.scenario === activeFilter);

  const playAudio = (text) => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">WE</div>
          <div>
            <p className="eyebrow">Workplace English</p>
            <h1>English Academy</h1>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#vocabulary">Vocabulary</a>
          <a href="#phrases">Phrases</a>
          <a href="#practice">Practice</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <span className="tag">Daily workplace fluency</span>
            <h2>Speak clearly. Write confidently. Work smarter.</h2>
            <p>
              Master the language used in meetings, emails, interviews, project updates, and
              cross-functional communication.
            </p>
            <div className="cta-row">
              <button className="primary-btn">Start learning</button>
              <button className="secondary-btn">View schedule</button>
            </div>
            <div className="stats-row">
              <div>
                <strong>240+</strong>
                <span>workplace phrases</span>
              </div>
              <div>
                <strong>18</strong>
                <span>practice tracks</span>
              </div>
              <div>
                <strong>7 days</strong>
                <span>learning streak</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card main-card">
              <span className="mini-label">Today’s Focus</span>
              <h3>Project alignment</h3>
              <div className="bubble-row">
                <span>align</span>
                <span>deadline</span>
                <span>touch base</span>
              </div>
            </div>
            <div className="floating-card small-card">
              <div className="progress-ring">
                <span>82%</span>
              </div>
              <p>Fluency progress</p>
            </div>
          </div>
        </section>

        <section className="filter-bar" aria-label="Category filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'filter-pill active' : 'filter-pill'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </section>

        <section id="vocabulary" className="content-section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Smart vocabulary</p>
              <h3>Workplace vocabulary with visual meaning</h3>
            </div>
            <button className="text-btn" onClick={() => setShowPhrase(!showPhrase)}>
              {showPhrase ? 'Show words' : 'Show phrases'}
            </button>
          </div>

          <div className="card-grid">
            {visibleVocabulary.map((item) => (
              <article className="study-card" key={item.word}>
                <div className="card-illustration" aria-hidden="true">
                  {item.image}
                </div>
                <div className="card-header-row">
                  <div>
                    <h4>{item.word}</h4>
                    <span>{item.pronunciation}</span>
                  </div>
                  <button type="button" className="sound-btn" onClick={() => playAudio(item.word)}>
                    🔊
                  </button>
                </div>
                <p className="meta-badge">{item.type}</p>
                <p className="meaning">{item.meaning}</p>
                <div className="card-divider" />
                <p className="example-label">Example</p>
                <p className="example">“{item.example}”</p>
                <p className="note">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="phrases" className="content-section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Phrase learning</p>
              <h3>Natural expressions in professional contexts</h3>
            </div>
          </div>

          <div className="card-grid phrase-grid">
            {visiblePhrases.map((item) => (
              <article className="study-card phrase-card" key={item.phrase}>
                <div className="card-illustration phrase-illustration" aria-hidden="true">
                  {item.image}
                </div>
                <div className="card-header-row">
                  <div>
                    <h4>{item.phrase}</h4>
                    <span>{item.pronunciation}</span>
                  </div>
                  <button type="button" className="sound-btn" onClick={() => playAudio(item.phrase)}>
                    🔊
                  </button>
                </div>
                <p className="meta-badge">{item.scenario}</p>
                <p className="meaning">{item.meaning}</p>
                <div className="card-divider" />
                <p className="example-label">Context</p>
                <p className="example">“{item.example}”</p>
                <p className="note">{item.explanation}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="practice" className="practice-panel">
          <div className="practice-copy">
            <p className="eyebrow">Practice mode</p>
            <h3>Build confidence with real workplace scenarios</h3>
            <ul>
              <li>Write a project update email</li>
              <li>Respond politely to feedback</li>
              <li>Explain a delay without sounding defensive</li>
            </ul>
          </div>

          <div className="dialogue-box">
            <div className="dialogue-row">
              <span className="avatar" aria-hidden="true">A</span>
              <div className="bubble left">
                <p>Could you give me an update on the timeline?</p>
              </div>
            </div>
            <div className="dialogue-row right-row">
              <div className="bubble right">
                <p>Sure. We are on track, and I’ll touch base with the team tomorrow.</p>
              </div>
              <span className="avatar" aria-hidden="true">B</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
