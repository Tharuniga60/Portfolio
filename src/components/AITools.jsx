import { aiTools } from '../data/portfolioData';

export default function AITools() {
  return (
    <section className="section-bg-white" id="ai-tools">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Modern Workflow</span>
          <h2 className="section-title">AI Tools I Use</h2>
        </div>

        <div className="row scroll-reveal">
          <div className="col-12">
            <div className="ai-tools-wrapper">
              <div className="ai-tools-scroll" aria-label="AI Tools Scrollbar Container">
                {aiTools.map((tool) => (
                  <div key={tool.id} className="ai-tool-badge">
                    <i className={tool.icon} aria-hidden="true"></i> {tool.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
