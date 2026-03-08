export const HERO_STYLES = `
  .hero-name-wrapper {
    position: absolute;
    top: 4px;
    left: 0;
    right: 0;
    padding: 20px 28px 0;
    z-index: 10;
    pointer-events: none;
  }
  .hero-name {
    font-family: var(--font-bebas-neue), sans-serif;
    line-height: 0.9;
    letter-spacing: -3px;
    color: white;
    white-space: nowrap;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .hero-name.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .body-text {
    font-family: var(--font-inter), sans-serif;
    font-weight: 400;
  }
  .btn-text {
    font-family: var(--font-inter), sans-serif;
    font-weight: 500;
  }
  .fade-in {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .hero-photo {
    opacity: 0;
    transform: translateX(-50%) translateY(32px);
    transition: opacity 0.9s ease 0.2s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
  }
  .hero-photo.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  .expression-track {
    display: flex;
    width: 900%;
    transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
  }
  .expression-track .expression-slide {
    flex: 0 0 11.111111%;
    width: 11.111111%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .expression-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 25;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.9);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s ease, box-shadow 0.2s;
  }
  .expression-btn:hover {
    background: rgba(109, 40, 217, 1);
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.5);
  }
  .expression-btn:active {
    transform: translateY(-50%) scale(0.92);
  }
  .expression-btn.left { left: 8px; }
  .expression-btn.right { right: 8px; }
  .social-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #7c3aed;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }
  .social-btn:hover {
    background: #6d28d9;
    transform: scale(1.08);
  }
  .lets-talk-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #7c3aed;
    color: white;
    border: none;
    border-radius: 999px;
    padding: 14px 24px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    text-decoration: none;
  }
  .lets-talk-btn:hover {
    background: #6d28d9;
    transform: scale(1.04);
  }
  .glow-circle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  .hero-scroll-hint {
    animation: scrollHintBounce 2s ease-in-out infinite;
  }
  @keyframes scrollHintBounce {
    0%, 100% { transform: translateY(0); opacity: 0.7; }
    50% { transform: translateY(6px); opacity: 1; }
  }
`;
