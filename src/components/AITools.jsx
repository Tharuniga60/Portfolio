import { aiTools } from '../data/portfolioData';

export default function AITools() {
  return (
    <section className="section-bg-white" id="ai-tools">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Modern Workflow</span>
          <h2 className="section-title">AI Tools I Use</h2>
        </div>

        <ul className="row g-3 ai-tools-list scroll-reveal">
          {aiTools.map((tool) => (
            <li key={tool.id} className="col-lg-4 col-md-6">
              <div className="ai-tool-item">
                <span className="ai-tool-logo" aria-hidden="true">
                  {tool.logo ? (
                    <img src={tool.logo} alt="" width="26" height="26" loading="lazy" className={tool.wide ? 'wide' : undefined} />
                  ) : (
                    <i className={tool.icon}></i>
                  )}
                </span>
                <span className="ai-tool-text">
                  <span className="ai-tool-name">{tool.label}</span>
                  <span className="ai-tool-use">{tool.use}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
