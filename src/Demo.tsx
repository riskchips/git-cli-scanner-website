import { ArrowLeft, ExternalLink, Play, ShieldCheck } from 'lucide-react'
import './demo.css'

type DemoVideo = {
  title: string
  description: string
  file: string
  category: string
}

const videos: DemoVideo[] = [
  {
    title: 'Install with npm',
    description: 'Install the scanner globally with the Node.js package manager.',
    file: 'npm_installation.mp4',
    category: 'Install'
  },
  {
    title: 'Install with curl',
    description: 'Set up the scanner on macOS or Linux with the shell installer.',
    file: 'curl_installation.mp4',
    category: 'Install'
  },
  {
    title: 'Initialize Git protection',
    description: 'Add the pre-commit hook that checks staged files before every commit.',
    file: 'github_prehook_init.mp4',
    category: 'Protect'
  },
  {
    title: 'Pre-commit check',
    description: 'See the scanner inspect a commit and stop exposed secrets before they ship.',
    file: 'git_prehook_check.mp4',
    category: 'Protect'
  },
  {
    title: 'Scan staged files',
    description: 'Run a focused scan against the files currently staged in Git.',
    file: 'scan_command.mp4',
    category: 'Scan'
  },
  {
    title: 'Scan Git history',
    description: 'Search previous commits for credentials that may already be buried in history.',
    file: 'scan_history_command.mp4',
    category: 'Scan'
  },
  {
    title: 'Explore the project',
    description: 'Open the interactive terminal explorer and inspect findings file by file.',
    file: 'explore_command.mp4',
    category: 'Explore'
  },
  {
    title: 'Disable the Git hook',
    description: 'Remove the pre-commit protection when you need to turn it off.',
    file: 'disable_git_prehook.mp4',
    category: 'Manage'
  },
  {
    title: 'Uninstall the scanner',
    description: 'Remove the scanner cleanly from your machine.',
    file: 'curl_uninstall.mp4',
    category: 'Manage'
  }
]

function Demo() {
  return (
    <main className="demo-page">
      <header className="demo-header">
        <a className="demo-back" href="/">
          <ArrowLeft size={18} /> Back to scanner
        </a>
        <div className="demo-brand">
          <ShieldCheck size={24} />
          <span>GIT-CLI-SCANNER / DEMO</span>
        </div>
        <a className="demo-github" href="https://github.com/riskchips/git-cli-scanner" target="_blank" rel="noreferrer">
          Source <ExternalLink size={16} />
        </a>
      </header>

      <section className="demo-intro">
        <p className="demo-kicker"><Play size={15} /> FIELD GUIDE</p>
        <h1>See the scanner<br /><em>in motion.</em></h1>
        <p className="demo-summary">Short walkthroughs for installing, protecting, scanning, and exploring your repository.</p>
      </section>

      <section className="demo-grid" aria-label="Scanner video demonstrations">
        {videos.map(video => (
          <article className="demo-card" key={video.file}>
            <div className="demo-video-wrap">
              <video controls preload="metadata" playsInline src={`/videos/${video.file}`}>
                Your browser does not support the video element.
              </video>
              <span className="demo-category">{video.category}</span>
            </div>
            <div className="demo-card-copy">
              <h2>{video.title}</h2>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="demo-footer">
        <span>LOCAL-FIRST SECURITY WORKFLOW</span>
        <a href="/">Return to the homepage <ArrowLeft size={15} /></a>
      </footer>
    </main>
  )
}

export default Demo
