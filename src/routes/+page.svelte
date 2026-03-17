<script lang="ts">
	import { Bot, Code2, HardDrive, Server, ArrowRight, Mail, Layers, ChevronRight } from 'lucide-svelte';

	const year = new Date().getFullYear();

	function getDefaultLanguage(): 'ko' | 'en' {
		if (typeof window !== 'undefined') {
			const lang = navigator.language || '';
			return lang.startsWith('ko') ? 'ko' : 'en';
		}
		return 'ko';
	}

	let currentLanguage: 'ko' | 'en' = getDefaultLanguage();

	const content = {
		ko: {
			meta: {
				title: 'EpsilonDelta — AI부터 인프라까지, 풀스택 솔루션',
				description:
					'AI 에이전트 개발부터 온프렘·클라우드 인프라까지. 완전한 기술 스택을 한 팀이 책임집니다.'
			},
			nav: {
				services: '서비스',
				products: '제품',
				contact: '문의'
			},
			hero: {
				badge: '풀스택 AI 솔루션',
				title: ['Build. Deploy.', 'Scale.'],
				metric1: '온프렘',
				metric2: '클라우드',
				metric3: '하드웨어',
				subtitle:
					'AI 에이전트 개발부터 프로덕션 인프라까지, 다년간의 인프라 운영 경험을 가진 팀이 처음부터 끝까지 책임집니다.',
				cta: '프로젝트 시작하기',
				ctaContact: '문의하기'
			},
			problem: {
				title: 'AI 솔루션의 숨겨진 비용',
				items: [
					{
						problem: 'AI를 개발했는데 배포할 인프라가 없다',
						solution: '클라우드와 온프렘을 모두 다룰 수 있는 팀'
					},
					{
						problem: '엣지 디바이스나 임베디드 환경이 필요하다',
						solution: '하드웨어 설계와 최적화 경험'
					},
					{
						problem: '개발팀과 인프라팀이 따로 있어 소통이 어렵다',
						solution: '한 팀, 한 책임, 끝까지'
					}
				]
			},
			services: {
				badge: '서비스',
				title: ['우리가 하는', '일들'],
				items: [
					{
						icon: 'Bot',
						color: '#4d7cf8',
						colorBg: 'rgba(77,124,248,0.12)',
						title: 'AI 에이전트',
						tagline: 'LLM 기반 지능형 워크플로우',
						desc: 'LLM 기반 에이전트 설계 및 구현. 복잡한 자동화, 데이터 파이프라인, 맞춤형 AI 솔루션을 만듭니다.'
					},
					{
						icon: 'Code2',
						color: '#a78bfa',
						colorBg: 'rgba(167,139,250,0.12)',
						title: '소프트웨어',
						tagline: 'AI 통합 웹·모바일·백엔드',
						desc: 'AI로 강화된 웹, 모바일, 백엔드 소프트웨어. 새로 만들거나 기존 시스템에 AI를 통합합니다.'
					},
					{
						icon: 'HardDrive',
						color: '#f59e0b',
						colorBg: 'rgba(245,158,11,0.12)',
						title: '하드웨어',
						tagline: 'AI 워크로드 최적화',
						desc: '엣지 AI 디바이스, 임베디드 시스템, 산업용 하드웨어. AI에 맞춘 최적의 환경을 구성합니다.'
					},
					{
						icon: 'Server',
						color: '#10b981',
						colorBg: 'rgba(16,185,129,0.12)',
						title: '인프라',
						tagline: 'MLOps 파이프라인 포함',
						desc: '온프렘 서버, GPU 클러스터, 클라우드 아키텍처. MLOps와 DevOps를 포함한 완전한 스택을 제공합니다.'
					}
				]
			},
			why: {
				badge: '왜 EpsilonDelta인가',
				title: '개발과 인프라의 간극을 메우다',
				body: '아무리 뛰어난 AI 에이전트도 그것이 실행되는 인프라가 받쳐주지 않으면 진가를 발휘하기 어렵습니다. 우리 팀은 다년간 온프렘과 클라우드 인프라를 직접 설계하고 운영한 엔지니어들입니다. AI 개발과 프로덕션 배포를 같은 팀이, 끝까지 책임지는 것이 우리의 차별점입니다.',
				keyPoints: [
					'한 팀이 에이전트부터 인프라까지 담당',
					'온프렘 + 클라우드 양쪽 경험',
					'하드웨어 설계 및 최적화',
					'통합된 MLOps/DevOps'
				]
			},
			products: {
				badge: '제품',
				title: ['우리가 직접', '만들고 운영합니다'],
				subtitle: '자체 기술로 개발·운영 중인 제품들입니다.',
				items: [
					{
						name: 'YouTube 영상 요약기',
						desc: '긴 유튜브 영상을 AI가 핵심만 빠르게 요약. 시간 낭비 없이 중요 내용을 파악하세요.',
						link: 'https://youtube-summarizer.epsilondelta.ai',
						cta: '지금 사용해보기'
					}
				],
				soon: 'More products coming'
			},
			contact: {
				badge: '문의',
				title: ['프로젝트 이야기를', '함께 나눠봅시다'],
				subtitle:
					'AI 에이전트 도입, 인프라 구축, 소프트웨어 개발 — 어떤 내용이든 편하게 연락 주세요.',
				cta: '이메일 보내기'
			},
			footer: {
				terms: '이용약관',
				privacy: '개인정보처리방침'
			}
		},
		en: {
			meta: {
				title: 'EpsilonDelta — Full-Stack AI Solutions',
				description:
					'From AI agent development to production infrastructure. One team, complete responsibility.'
			},
			nav: {
				services: 'Services',
				products: 'Products',
				contact: 'Contact'
			},
			hero: {
				badge: 'Full-Stack AI Solutions',
				title: ['Build. Deploy.', 'Scale.'],
				metric1: 'On-prem',
				metric2: 'Cloud',
				metric3: 'Hardware',
				subtitle:
					'From AI agent development to production infrastructure—a team with years of infrastructure expertise takes full responsibility, end to end.',
				cta: 'Start Your Project',
				ctaContact: 'Get in Touch'
			},
			problem: {
				title: 'The Hidden Cost of AI Solutions',
				items: [
					{
						problem: 'Built AI but no infrastructure to run it on',
						solution: 'A team fluent in both cloud and on-prem'
					},
					{
						problem: 'Need edge devices or embedded environments',
						solution: 'Hardware design and optimization expertise'
					},
					{
						problem: 'Dev and infra teams siloed, nothing ships',
						solution: 'One team, one commitment, end to end'
					}
				]
			},
			services: {
				badge: 'Services',
				title: ['What we', 'build'],
				items: [
					{
						icon: 'Bot',
						color: '#4d7cf8',
						colorBg: 'rgba(77,124,248,0.12)',
						title: 'AI Agents',
						tagline: 'LLM-powered intelligent workflows',
						desc: 'LLM-based agent design and implementation. Complex automation, data pipelines, custom AI solutions.'
					},
					{
						icon: 'Code2',
						color: '#a78bfa',
						colorBg: 'rgba(167,139,250,0.12)',
						title: 'Software',
						tagline: 'AI-enhanced web, mobile, backend',
						desc: 'Web, mobile, and backend software powered by AI. Build new or integrate into existing systems.'
					},
					{
						icon: 'HardDrive',
						color: '#f59e0b',
						colorBg: 'rgba(245,158,11,0.12)',
						title: 'Hardware',
						tagline: 'Optimized for AI workloads',
						desc: 'Edge AI devices, embedded systems, industrial hardware. Designed and selected for your specific AI needs.'
					},
					{
						icon: 'Server',
						color: '#10b981',
						colorBg: 'rgba(16,185,129,0.12)',
						title: 'Infrastructure',
						tagline: 'Complete MLOps stack',
						desc: 'On-prem servers, GPU clusters, cloud architecture. Full-stack infrastructure with integrated MLOps and DevOps.'
					}
				]
			},
			why: {
				badge: 'Why EpsilonDelta',
				title: 'Bridging the AI-to-Infrastructure Gap',
				body: 'Even the most sophisticated AI agent cannot deliver its full potential without the right infrastructure beneath it. Our team consists of engineers with years of hands-on experience designing and operating both on-prem and cloud infrastructure. We own the entire problem—from AI development through production deployment—with one team, one responsibility.',
				keyPoints: [
					'One team handles agents through infrastructure',
					'Deep expertise in both on-prem and cloud',
					'Hardware design and optimization',
					'Integrated MLOps and DevOps'
				]
			},
			products: {
				badge: 'Products',
				title: ['Built and', 'operated by us'],
				subtitle: 'Products developed and operated using our own technology stack.',
				items: [
					{
						name: 'YouTube Video Summarizer',
						desc: 'AI-powered summaries of long YouTube videos—fast and accurate. Get the key points without wasting time.',
						link: 'https://youtube-summarizer.epsilondelta.ai',
						cta: 'Try it Now'
					}
				],
				soon: 'More products coming soon'
			},
			contact: {
				badge: 'Contact',
				title: ["Let's discuss", 'your project'],
				subtitle:
					'AI adoption, infrastructure, software development—reach out for anything.',
				cta: 'Send an Email'
			},
			footer: {
				terms: 'Terms',
				privacy: 'Privacy'
			}
		}
	};

	$: c = content[currentLanguage];

	function switchLanguage(lang: 'ko' | 'en') {
		currentLanguage = lang;
	}
</script>

<svelte:head>
	<title>{c.meta.title}</title>
	<meta name="description" content={c.meta.description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="page">
	<!-- ─── Navigation ─── -->
	<nav class="nav">
		<div class="nav-inner">
			<a href="/" class="nav-logo">
				<img src="/favicon.png" alt="EpsilonDelta" class="nav-logo-img" />
				<span class="nav-logo-name">EpsilonDelta</span>
			</a>

			<div class="nav-links">
				<a href="#services" class="nav-link">{c.nav.services}</a>
				<a href="#products" class="nav-link">{c.nav.products}</a>
				<a href="#contact" class="nav-link">{c.nav.contact}</a>
			</div>

			<div class="nav-lang">
				<button
					class="lang-btn"
					class:active={currentLanguage === 'ko'}
					on:click={() => switchLanguage('ko')}>KO</button
				>
				<span class="lang-sep">/</span>
				<button
					class="lang-btn"
					class:active={currentLanguage === 'en'}
					on:click={() => switchLanguage('en')}>EN</button
				>
			</div>
		</div>
	</nav>

	<!-- ─── Hero ─── -->
	<section class="hero">
		<div class="hero-glow"></div>
		<div class="hero-grid"></div>
		<div class="container hero-content">
			<div class="badge">{c.hero.badge}</div>
			<h1 class="hero-title">
				{#each c.hero.title as line}
					<span class="block">{line}</span>
				{/each}
			</h1>

			<!-- Hero metrics (inspired by Together AI) -->
			<div class="hero-metrics">
				<div class="metric">
					<span class="metric-label">{c.hero.metric1}</span>
				</div>
				<div class="metric">
					<span class="metric-label">{c.hero.metric2}</span>
				</div>
				<div class="metric">
					<span class="metric-label">{c.hero.metric3}</span>
				</div>
			</div>

			<p class="hero-subtitle">{c.hero.subtitle}</p>
			<div class="hero-actions">
				<a href="#contact" class="btn btn-primary">
					{c.hero.cta}
					<ArrowRight size={16} strokeWidth={2.5} />
				</a>
				<a href="#services" class="btn btn-ghost">{c.hero.ctaContact}</a>
			</div>
		</div>
	</section>

	<!-- ─── Problem Section ─── -->
	<section class="section problem-section">
		<div class="container">
			<h2 class="problem-title">{c.problem.title}</h2>
			<div class="problem-grid">
				{#each c.problem.items as item}
					<div class="problem-card">
						<div class="problem-icon">
							<span class="problem-dot"></span>
						</div>
						<div class="problem-text">
							<p class="problem-issue">{item.problem}</p>
							<p class="problem-solve">{item.solution}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ─── Services ─── -->
	<section id="services" class="section">
		<div class="container">
			<div class="section-intro">
				<div class="badge">{c.services.badge}</div>
				<h2 class="section-title">
					{#each c.services.title as line}
						<span class="block">{line}</span>
					{/each}
				</h2>
			</div>
			<div class="services-grid">
				{#each c.services.items as item}
					<div class="service-card" style="--c: {item.color}; --cbg: {item.colorBg};">
						<div class="service-header">
							<div class="service-icon-wrap">
								{#if item.icon === 'Bot'}<Bot size={22} color={item.color} strokeWidth={1.8} />{/if}
								{#if item.icon === 'Code2'}<Code2 size={22} color={item.color} strokeWidth={1.8} />{/if}
								{#if item.icon === 'HardDrive'}<HardDrive
										size={22}
										color={item.color}
										strokeWidth={1.8}
									/>{/if}
								{#if item.icon === 'Server'}<Server
										size={22}
										color={item.color}
										strokeWidth={1.8}
									/>{/if}
							</div>
							<h3 class="service-title">{item.title}</h3>
						</div>
						<p class="service-tagline">{item.tagline}</p>
						<p class="service-desc">{item.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ─── Why EpsilonDelta ─── -->
	<section class="section why-section">
		<div class="container why-inner">
			<div class="why-left">
				<div class="badge">{c.why.badge}</div>
				<h2 class="why-title">{c.why.title}</h2>
				<p class="why-body">{c.why.body}</p>
			</div>
			<div class="why-right">
				<div class="why-points">
					{#each c.why.keyPoints as point, idx}
						<div class="why-point">
							<span class="why-point-num">{idx + 1}</span>
							<span class="why-point-text">{point}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- ─── Products ─── -->
	<section id="products" class="section">
		<div class="container">
			<div class="section-intro">
				<div class="badge">{c.products.badge}</div>
				<h2 class="section-title">
					{#each c.products.title as line}
						<span class="block">{line}</span>
					{/each}
				</h2>
				<p class="section-sub">{c.products.subtitle}</p>
			</div>
			<div class="products-grid">
				{#each c.products.items as product}
					<div class="product-card">
						<div class="product-accent"></div>
						<div class="product-body">
							<h3 class="product-name">{product.name}</h3>
							<p class="product-desc">{product.desc}</p>
						</div>
						<a
							href={product.link}
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-primary product-cta"
						>
							{product.cta}
							<ArrowRight size={15} strokeWidth={2.5} />
						</a>
					</div>
				{/each}
				<div class="product-card product-soon-card">
					<div class="product-soon-inner">
						<span class="product-soon-dot"></span>
						<p class="product-soon-text">{c.products.soon}</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ─── Contact ─── -->
	<section id="contact" class="section contact-section">
		<div class="container contact-inner">
			<div class="badge">{c.contact.badge}</div>
			<h2 class="contact-title">
				{#each c.contact.title as line}
					<span class="block">{line}</span>
				{/each}
			</h2>
			<p class="contact-sub">{c.contact.subtitle}</p>
			<a href="mailto:contact@epsilondelta.ai" class="btn btn-primary contact-btn">
				<Mail size={16} strokeWidth={2} />
				{c.contact.cta}
			</a>
		</div>
	</section>

	<!-- ─── Footer ─── -->
	<footer class="footer">
		<div class="container footer-inner">
			<div class="footer-brand">
				<a href="/" class="footer-logo">
					<img src="/favicon.png" alt="EpsilonDelta" />
					<span>EpsilonDelta</span>
				</a>
				<p class="footer-corp">EpsilonDelta Inc.</p>
				<a href="mailto:contact@epsilondelta.ai" class="footer-email"
					>contact@epsilondelta.ai</a
				>
			</div>
			<div class="footer-links">
				<a href="/terms" class="footer-link">{c.footer.terms}</a>
				<a href="/privacy" class="footer-link">{c.footer.privacy}</a>
			</div>
		</div>
		<div class="container footer-bottom">
			<p>© {year} EpsilonDelta Inc. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	/* ─── Base ─── */
	.page {
		min-height: 100vh;
		background: #06070d;
		color: #dde2ef;
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			'Inter',
			'Segoe UI',
			'Noto Sans KR',
			'Apple SD Gothic Neo',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.container {
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 28px;
	}

	.block {
		display: block;
	}

	/* ─── Badge ─── */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #4d7cf8;
		background: rgba(77, 124, 248, 0.1);
		border: 1px solid rgba(77, 124, 248, 0.25);
		padding: 5px 12px;
		border-radius: 100px;
		margin-bottom: 20px;
	}

	/* ─── Navigation ─── */
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		background: rgba(6, 7, 13, 0.85);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
	}

	.nav-inner {
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 28px;
		height: 60px;
		display: flex;
		align-items: center;
		gap: 40px;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		color: inherit;
		flex-shrink: 0;
	}

	.nav-logo-img {
		width: 28px;
		height: 28px;
		border-radius: 6px;
	}

	.nav-logo-name {
		font-size: 16px;
		font-weight: 600;
		color: #f0f3fb;
		letter-spacing: -0.02em;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 4px;
		flex: 1;
	}

	.nav-link {
		font-size: 14px;
		color: #7a8498;
		text-decoration: none;
		padding: 6px 12px;
		border-radius: 6px;
		transition: color 0.15s, background 0.15s;
	}

	.nav-link:hover {
		color: #dde2ef;
		background: rgba(255, 255, 255, 0.06);
	}

	.nav-lang {
		display: flex;
		align-items: center;
		gap: 4px;
		flex-shrink: 0;
	}

	.lang-btn {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 13px;
		font-weight: 500;
		color: #4a5268;
		padding: 4px 6px;
		border-radius: 4px;
		transition: color 0.15s;
		font-family: inherit;
	}

	.lang-btn:hover {
		color: #9aa3b8;
	}

	.lang-btn.active {
		color: #dde2ef;
	}

	.lang-sep {
		color: #2a2e3e;
		font-size: 13px;
	}

	/* ─── Buttons ─── */
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 11px 22px;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 500;
		text-decoration: none;
		transition:
			background 0.15s,
			color 0.15s,
			box-shadow 0.15s,
			transform 0.1s;
		cursor: pointer;
		font-family: inherit;
		border: none;
		white-space: nowrap;
	}

	.btn:active {
		transform: translateY(1px);
	}

	.btn-primary {
		background: #4d7cf8;
		color: #fff;
		box-shadow: 0 2px 12px rgba(77, 124, 248, 0.35);
	}

	.btn-primary:hover {
		background: #6090fb;
		box-shadow: 0 4px 20px rgba(77, 124, 248, 0.45);
	}

	.btn-ghost {
		background: rgba(255, 255, 255, 0.06);
		color: #9aa3b8;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.btn-ghost:hover {
		background: rgba(255, 255, 255, 0.1);
		color: #dde2ef;
	}

	/* ─── Hero ─── */
	.hero {
		position: relative;
		overflow: hidden;
		padding: 100px 0 120px;
	}

	.hero-glow {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse 70% 60% at 50% 110%, rgba(77, 124, 248, 0.16), transparent),
			radial-gradient(ellipse 50% 40% at 15% 40%, rgba(167, 139, 250, 0.08), transparent),
			radial-gradient(ellipse 40% 30% at 85% 20%, rgba(16, 185, 129, 0.05), transparent);
		pointer-events: none;
	}

	.hero-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
		background-size: 64px 64px;
		mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
		pointer-events: none;
	}

	.hero-content {
		position: relative;
		z-index: 1;
	}

	.hero-title {
		font-size: clamp(48px, 7vw, 80px);
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: -0.035em;
		color: #f0f3fb;
		margin-bottom: 24px;
	}

	.hero-metrics {
		display: flex;
		gap: 20px;
		margin-bottom: 32px;
		flex-wrap: wrap;
	}

	.metric {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		padding: 0 16px;
		background: rgba(77, 124, 248, 0.1);
		border: 1px solid rgba(77, 124, 248, 0.25);
		border-radius: 8px;
	}

	.metric-label {
		font-size: 13px;
		font-weight: 500;
		color: #4d7cf8;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.hero-subtitle {
		font-size: 17px;
		line-height: 1.75;
		color: #7a8498;
		max-width: 640px;
		margin-bottom: 40px;
	}

	.hero-actions {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	/* ─── Section Common ─── */
	.section {
		padding: 96px 0;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	/* ─── Problem Section ─── */
	.problem-section {
		background: rgba(13, 15, 26, 0.5);
	}

	.problem-title {
		font-size: clamp(32px, 4.5vw, 48px);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		color: #f0f3fb;
		margin-bottom: 48px;
		text-align: center;
	}

	.problem-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 24px;
	}

	@media (max-width: 600px) {
		.problem-grid {
			grid-template-columns: 1fr;
		}
	}

	.problem-card {
		background: #0b0d1a;
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		padding: 28px;
		display: flex;
		gap: 16px;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}

	.problem-card:hover {
		border-color: rgba(255, 255, 255, 0.13);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	.problem-icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.problem-dot {
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #4d7cf8;
	}

	.problem-text {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.problem-issue {
		font-size: 15px;
		font-weight: 600;
		color: #e8ebf5;
		line-height: 1.4;
	}

	.problem-solve {
		font-size: 14px;
		color: #a78bfa;
		line-height: 1.5;
		font-weight: 500;
	}

	.section-intro {
		margin-bottom: 56px;
	}

	.section-title {
		font-size: clamp(32px, 4.5vw, 48px);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		color: #f0f3fb;
		margin-bottom: 16px;
	}

	.section-sub {
		font-size: 16px;
		line-height: 1.7;
		color: #7a8498;
		max-width: 520px;
	}

	/* ─── Services ─── */
	.services-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}

	@media (max-width: 680px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}

	.service-card {
		background: #0b0d1a;
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		padding: 28px;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.service-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--c);
		opacity: 0.4;
		transition: opacity 0.2s;
	}

	.service-card:hover {
		border-color: rgba(255, 255, 255, 0.13);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	.service-card:hover::before {
		opacity: 0.9;
	}

	.service-header {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 16px;
	}

	.service-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 10px;
		background: var(--cbg);
		border: 1px solid rgba(255, 255, 255, 0.06);
		flex-shrink: 0;
	}

	.service-title {
		font-size: 16px;
		font-weight: 600;
		color: #e8ebf5;
		line-height: 1.3;
	}

	.service-tagline {
		font-size: 13px;
		font-weight: 500;
		color: #4d7cf8;
		margin-bottom: 12px;
		letter-spacing: 0.03em;
	}

	.service-desc {
		font-size: 14px;
		line-height: 1.7;
		color: #6a7386;
	}

	/* ─── Why ─── */
	.why-section {
		background: #080910;
	}

	.why-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: start;
	}

	@media (max-width: 800px) {
		.why-inner {
			grid-template-columns: 1fr;
			gap: 48px;
		}
	}

	.why-title {
		font-size: clamp(36px, 5vw, 54px);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		color: #f0f3fb;
		margin-bottom: 24px;
	}

	.why-body {
		font-size: 15px;
		line-height: 1.8;
		color: #6a7386;
	}

	.why-right {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding-top: 8px;
	}

	.why-points {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.why-point {
		display: flex;
		gap: 16px;
		align-items: flex-start;
		padding: 20px;
		border-radius: 10px;
		border: 1px solid transparent;
		transition:
			background 0.2s,
			border-color 0.2s;
	}

	.why-point:hover {
		background: rgba(255, 255, 255, 0.03);
		border-color: rgba(255, 255, 255, 0.07);
	}

	.why-point-num {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		min-width: 32px;
		border-radius: 8px;
		background: rgba(77, 124, 248, 0.15);
		color: #4d7cf8;
		font-weight: 600;
		font-size: 14px;
	}

	.why-point-text {
		font-size: 15px;
		font-weight: 500;
		color: #e8ebf5;
		line-height: 1.5;
		padding-top: 2px;
	}

	/* ─── Products ─── */
	.products-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}

	@media (max-width: 640px) {
		.products-grid {
			grid-template-columns: 1fr;
		}
	}

	.product-card {
		background: #0b0d1a;
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}

	.product-card:hover {
		border-color: rgba(255, 255, 255, 0.13);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	.product-accent {
		height: 3px;
		background: linear-gradient(90deg, #4d7cf8, #a78bfa);
		opacity: 0.7;
	}

	.product-body {
		padding: 28px 28px 24px;
		flex: 1;
	}

	.product-name {
		font-size: 18px;
		font-weight: 600;
		color: #e8ebf5;
		margin-bottom: 10px;
		line-height: 1.3;
	}

	.product-desc {
		font-size: 14px;
		line-height: 1.7;
		color: #6a7386;
	}

	.product-cta {
		margin: 0 28px 28px;
		align-self: flex-start;
	}

	.product-soon-card {
		background: #080910;
		border-style: dashed;
		border-color: rgba(255, 255, 255, 0.08);
	}

	.product-soon-inner {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 48px 28px;
		gap: 12px;
	}

	.product-soon-dot {
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #4d7cf8;
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.4;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.3);
		}
	}

	.product-soon-text {
		font-size: 14px;
		color: #4a5268;
		text-align: center;
	}

	/* ─── Contact ─── */
	.contact-section {
		background: #080910;
	}

	.contact-inner {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.contact-title {
		font-size: clamp(36px, 5vw, 54px);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		color: #f0f3fb;
		margin-bottom: 20px;
	}

	.contact-sub {
		font-size: 16px;
		line-height: 1.7;
		color: #7a8498;
		margin-bottom: 40px;
	}

	.contact-btn {
		font-size: 15px;
		padding: 14px 28px;
	}

	/* ─── Footer ─── */
	.footer {
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		padding-top: 48px;
		padding-bottom: 40px;
	}

	.footer-inner {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 40px;
		margin-bottom: 40px;
		flex-wrap: wrap;
	}

	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		color: #e8ebf5;
		font-size: 15px;
		font-weight: 600;
	}

	.footer-logo img {
		width: 24px;
		height: 24px;
		border-radius: 5px;
	}

	.footer-corp {
		font-size: 13px;
		color: #4a5268;
	}

	.footer-email {
		font-size: 13px;
		color: #4a5268;
		text-decoration: none;
		transition: color 0.15s;
	}

	.footer-email:hover {
		color: #7a8498;
	}

	.footer-links {
		display: flex;
		gap: 24px;
		align-items: center;
		padding-top: 4px;
	}

	.footer-link {
		font-size: 13px;
		color: #4a5268;
		text-decoration: none;
		transition: color 0.15s;
	}

	.footer-link:hover {
		color: #7a8498;
	}

	.footer-bottom {
		padding-top: 24px;
		border-top: 1px solid rgba(255, 255, 255, 0.04);
	}

	.footer-bottom p {
		font-size: 12px;
		color: #353848;
	}

	/* ─── Responsive ─── */
	@media (max-width: 600px) {
		.hero {
			padding: 72px 0 88px;
		}

		.nav-links {
			display: none;
		}

		.nav-inner {
			gap: 16px;
		}

		.nav-logo-name {
			font-size: 15px;
		}

		.section {
			padding: 72px 0;
		}

		.footer-inner {
			flex-direction: column;
			gap: 32px;
		}
	}
</style>
