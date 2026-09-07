import { useState } from 'react'
import { Terminal, ShieldAlert, GitCommit, Copy, Check, ShieldCheck, Zap, GitBranch, Package, Bot, Layers, Code } from 'lucide-react'
// @ts-ignore
import RippleDistortion from './RippleDistortion'
// @ts-ignore
import Folder from './Folder'
// @ts-ignore
import ModelViewer from './ModelViewer'
// @ts-ignore
import SplitFlapText from './SplitFlapText'
// @ts-ignore
import WarpText from './WarpText'
// @ts-ignore
import PixelTrail from './PixelTrail'
import './index.css'

function App() {
  const handleCopy = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setter(true)
    setTimeout(() => setter(false), 2000)
  }

  const [copiedInstall, setCopiedInstall] = useState(false)
  const [copiedScan, setCopiedScan] = useState(false)
  const [copiedScanAll, setCopiedScanAll] = useState(false)
  const [copiedHistory, setCopiedHistory] = useState(false)
  const [copiedExplore, setCopiedExplore] = useState(false)

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-color)' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 50, pointerEvents: 'none' }}>
        <PixelTrail
          gridSize={34}
          trailSize={0.19}
          maxAge={200}
          interpolate={2.7}
          color="#10B981"
          gooeyFilter={{ id: "custom-goo-filter", strength: 3 }}
        />
      </div>
      <nav onPointerMove={(e) => e.stopPropagation()} className="navbar" style={{ position: 'relative', zIndex: 100, background: 'var(--bg-color)', display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
        <div className="logo" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <WarpText
            text="GIT-CLI-SCANNER"
            color="#111"
            warpStrength={0.08}
            warpScale={1.7}
            speed={0.55}
            pointerInfluence={0.42}
            pointerStrength={0.38}
            refraction={0.018}
            ripple
            fontSize={90}
            fontWeight={900}
            style={{ height: '180px', width: '100%' }}
          />
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#usage" style={{ color: '#111', fontWeight: 'bold', textDecoration: 'none' }}>DOCS</a>
          <a href="https://github.com/riskchips/git-cli-scanner" target="_blank" rel="noreferrer" className="brutalist-btn secondary" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>GITHUB</a>
        </div>
      </nav>

      <section onPointerMove={(e) => e.stopPropagation()} className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <RippleDistortion
            src="https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=3416&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            brushSize={150}
            strength={0.2}
            swirl={1}
            rings={4}
            grayscale
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: '0.5rem' }}>STOP LEAKING SECRETS</h1>
          <h2 style={{ color: 'var(--accent)', marginTop: 0 }}>BEFORE THEY REACH GIT.</h2>
          
          <p style={{ fontSize: '1.5rem', fontWeight: 500, maxWidth: '800px', margin: '2rem 0' }}>
            A powerful, local, blazing fast CLI vulnerability scanner for secrets, API keys, passwords, private keys, and infrastructure configs. Blocks bad commits instantly.
          </p>

          <div className="terminal-block" onClick={() => handleCopy('npm install -g git-cli-scanner', setCopiedInstall)}>
            <div>
              <span style={{ color: '#aaa', marginRight: '1rem' }}>$</span>
              <span>npm install -g git-cli-scanner</span>
            </div>
            {copiedInstall ? <Check size={24} /> : <Copy size={24} />}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', position: 'relative', zIndex: 10 }}>
            <a href="#features" className="brutalist-btn">
              Explore Features <Zap size={20} />
            </a>
            <a href="#usage" className="brutalist-btn secondary">
              View Commands
            </a>
          </div>
        </div>
      </section>

      <div className="marquee-container" style={{ margin: 0, borderTop: 'none' }}>
        <div className="marquee-content">
          <span className="marquee-text">
            RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS •&nbsp;
          </span>
          <span className="marquee-text">
            RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS •&nbsp;
          </span>
        </div>
      </div>

      <section id="features" className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '3rem', borderBottom: '4px solid black', display: 'inline-block' }}>CORE FEATURES</h2>
        
        <div className="grid grid-2">
          <div className="brutalist-card">
            <ShieldAlert size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3>Pre-commit Hook Protection</h3>
            <p style={{ marginTop: '1rem' }}>
              Run <code>git-cli-scanner init</code> once, and every <code>git commit</code> will automatically scan your staged files. Blockers stop the commit immediately.
            </p>
          </div>
          
          <div className="brutalist-card">
            <Terminal size={48} style={{ marginBottom: '1rem' }} />
            <h3>Interactive TUI Explorer</h3>
            <p style={{ marginTop: '1rem' }}>
              Run <code>git-cli-scanner explore</code> to launch an interactive terminal UI. Browse your project, identify risky files, and scan on the fly.
            </p>
          </div>

          <div className="brutalist-card">
            <ShieldCheck size={48} color="#000" style={{ marginBottom: '1rem' }} />
            <h3>Intelligent Dummy Detection</h3>
            <p style={{ marginTop: '1rem' }}>
              We know you write tests. The scanner automatically detects and downgrades dummy secrets, fake keys, and placeholders to prevent false positives blocking your CI.
            </p>
          </div>

          <div className="brutalist-card">
            <GitCommit size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
            <h3>Historical Scan</h3>
            <p style={{ marginTop: '1rem' }}>
              Run <code>git-cli-scanner scan-history --all</code> to rip through your entire git history across all branches and find buried secrets.
            </p>
          </div>
        </div>
      </section>

      <section id="usage" className="container" style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', borderBottom: '4px solid black', display: 'inline-block' }}>USAGE & COMMANDS</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Every command supports <code>--help</code> for more options. Here are the most common usage patterns.</p>
        
        <div className="grid">
          <div>
            <h3>Scan Staged Files</h3>
            <p>Runs a fast scan on files you've just added via <code>git add</code>.</p>
            <div className="terminal-block" onClick={() => handleCopy('git-cli-scanner scan --show-sol', setCopiedScan)}>
              <div>
                <span style={{ color: '#aaa', marginRight: '1rem' }}>$</span>
                <span>git-cli-scanner scan --show-sol</span>
              </div>
              {copiedScan ? <Check size={24} /> : <Copy size={24} />}
            </div>
          </div>

          <div>
            <h3>Scan Entire Directory</h3>
            <p>Recursively scan all files in a folder (ignores .git and node_modules).</p>
            <div className="terminal-block" onClick={() => handleCopy('git-cli-scanner scan-all ./src', setCopiedScanAll)}>
              <div>
                <span style={{ color: '#aaa', marginRight: '1rem' }}>$</span>
                <span>git-cli-scanner scan-all ./src</span>
              </div>
              {copiedScanAll ? <Check size={24} /> : <Copy size={24} />}
            </div>
          </div>

          <div>
            <h3>Scan Git History</h3>
            <p>Scan historical commits for exposed secrets (use <code>--all</code> for every branch).</p>
            <div className="terminal-block" onClick={() => handleCopy('git-cli-scanner scan-history --since="30 days ago"', setCopiedHistory)}>
              <div>
                <span style={{ color: '#aaa', marginRight: '1rem' }}>$</span>
                <span>git-cli-scanner scan-history --since="30 days ago"</span>
              </div>
              {copiedHistory ? <Check size={24} /> : <Copy size={24} />}
            </div>
          </div>

          <div>
            <h3>Interactive TUI Explorer</h3>
            <p>Launch the built-in terminal UI to browse files and see stats.</p>
            <div className="terminal-block" onClick={() => handleCopy('git-cli-scanner explore', setCopiedExplore)}>
              <div>
                <span style={{ color: '#aaa', marginRight: '1rem' }}>$</span>
                <span>git-cli-scanner explore</span>
              </div>
              {copiedExplore ? <Check size={24} /> : <Copy size={24} />}
            </div>
          </div>
        </div>
      </section>

      <section id="rules" className="container" style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>SUPPORTED SCANNERS</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Over 50+ detection rules, continuously updated.</p>

        <table className="brutalist-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Rule Target</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cloud Providers</strong></td>
              <td>AWS Access & Secret Keys</td>
              <td><span className="badge high">High</span></td>
            </tr>
            <tr>
              <td><strong>Cloud Providers</strong></td>
              <td>DigitalOcean, Datadog, GCP, Firebase</td>
              <td><span className="badge high">High</span></td>
            </tr>
            <tr>
              <td><strong>Authentication</strong></td>
              <td>Supabase, Clerk, Auth0, JWT, Sessions</td>
              <td><span className="badge high">High</span></td>
            </tr>
            <tr>
              <td><strong>API Keys</strong></td>
              <td>Stripe, OpenAI, Anthropic, HuggingFace</td>
              <td><span className="badge high">High</span></td>
            </tr>
            <tr>
              <td><strong>API Keys</strong></td>
              <td>GitHub, GitLab, Slack, Discord, Telegram</td>
              <td><span className="badge high">High</span></td>
            </tr>
            <tr>
              <td><strong>Infrastructure</strong></td>
              <td>Docker Hub, Database URLs, Ngrok, Sentry</td>
              <td><span className="badge high">High</span></td>
            </tr>
            <tr>
              <td><strong>Private Keys</strong></td>
              <td>RSA, EC, DSA, OpenSSH, PGP (.pem, .key)</td>
              <td><span className="badge high">High</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="container" style={{ marginTop: '6rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>YOU SIT, WHILE WE SCAN FOR VULNERABILITIES.</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Relax, we've got your codebase covered.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div 
            onPointerMove={(e) => e.stopPropagation()}
            style={{ 
              border: '4px solid var(--border-color)', 
              background: 'var(--bg-color)',
              boxShadow: '8px 8px 0 0 var(--shadow-color)',
              display: 'inline-block',
              position: 'relative',
              zIndex: 10
            }}
          >
            <ModelViewer
              url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb"
              width={800}
              height={500}
              environmentPreset="sunset"
              modelXOffset={0.1}
              modelYOffset={-0.05}
              enableMouseParallax={true}
              enableHoverRotation={true}
              showScreenshotButton={false}
              fadeIn={false}
              autoRotate={false}
              autoFrame={false}
              defaultZoom={1.2}
              minZoomDistance={0.5}
            />
          </div>
        </div>
      </section>

      <div className="marquee-container" style={{ margin: '4rem 0' }}>
        <div className="marquee-content">
          <span className="marquee-text">
            RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS •&nbsp;
          </span>
          <span className="marquee-text">
            RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS • RUNS LOCALLY • BLAZING FAST • ZERO DEPENDENCIES LEAKED • 50+ SCANNERS •&nbsp;
          </span>
        </div>
      </div>

      



      <section style={{ padding: '6rem 2rem', background: 'var(--accent)', borderBottom: '4px solid var(--border-color)', position: 'relative', zIndex: 10 }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', color: '#111' }}>BUILT WITH POWER</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8rem', flexWrap: 'wrap' }}>
          
          <div style={{ position: 'relative', height: '350px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Folder 
              size={2.5} 
              color="#00FFFF" 
              items={[
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Zap size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>VITE</span></div>,
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Layers size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>REACT</span></div>,
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Code size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>HTML/CSS</span></div>
              ]} 
            />
          </div>

          <div style={{ position: 'relative', height: '350px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Folder 
              size={2.5} 
              color="#5227FF" 
              items={[
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><GitBranch size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>GITHUB</span></div>,
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><GitCommit size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>GIT</span></div>,
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Package size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>NPM</span></div>
              ]} 
            />
          </div>

          <div style={{ position: 'relative', height: '350px', width: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Folder 
              size={2.5} 
              color="#39FF14" 
              items={[
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Bot size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>ANTIGRAVITY</span></div>,
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Terminal size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>CLI</span></div>,
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><ShieldAlert size={32} color="#111" /><span style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'bold', color: '#111' }}>SECURITY</span></div>
              ]} 
            />
          </div>

        </div>
      </section>

      <footer style={{ background: '#111', color: 'white', padding: '4rem 2rem', position: 'relative', zIndex: 100 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--accent)' }}>GIT-CLI-SCANNER</h2>
          <p className="mono" style={{ margin: '2rem 0' }}>npm install -g git-cli-scanner</p>
          <a href="https://github.com/riskchips/git-cli-scanner" style={{ color: 'white' }}>GitHub Repository</a>
        </div>
      </footer>
    </div>
  )
}

export default App
