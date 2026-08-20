<script lang="ts">
	import { ArrowRight, Check, Mail } from '@lucide/svelte';

	const year = new Date().getFullYear();

	function getDefaultLanguage(): 'ko' | 'en' {
		if (typeof window !== 'undefined') {
			return (navigator.language || '').startsWith('ko') ? 'ko' : 'en';
		}
		return 'ko';
	}

	let currentLanguage: 'ko' | 'en' = getDefaultLanguage();

	const content = {
		ko: {
			meta: {
				title: 'EpsilonDelta — AX, 막연한 말에서 손에 잡히는 결과로',
				description:
					'AI 에이전트부터 소프트웨어, 인프라와 하드웨어까지. 기업의 문제를 작동하는 결과로 전환합니다.'
			},
			nav: { business: '비즈니스', history: '발자취', vision: '비전', contact: '문의' },
			hero: {
				label: 'EpsilonDelta',
				title: ['AX, 막연한 말에서', '손에 잡히는 결과로.'],
				intro:
					'기업의 AI 전환이 멈춰 서는 이유는 기술이 부족해서가 아닙니다. 문제와 목표 사이를 이어줄 정확한 해답을 아직 찾지 못했기 때문입니다.',
				introStrong:
					'엡실론델타는 문제 정의부터 제품, 인프라와 운영까지 하나의 흐름으로 연결합니다.'
			},
			agent: {
				eyebrow: '업무를 바꾸는 AI',
				title: '데모를 넘어, 실제 업무에 들어가는 AI',
				description:
					'반복 업무만 자동화하지 않습니다. 사람이 정보를 찾고 판단하고 실행하는 전체 흐름을 분석해, 조직 안에서 실제로 일하는 AI 에이전트를 만듭니다.',
				workflow: ['데이터 수집', '맥락 분석', '의사결정', '업무 실행'],
				query: '이번 분기 핵심 리스크와 대응안을 정리해줘',
				answer: '사내 데이터와 운영 기준을 바탕으로 3개의 핵심 리스크를 찾았습니다.',
				result: '검토 가능한 결과와 근거까지 함께 전달'
			},
			product: {
				eyebrow: '아이디어를 제품으로',
				title: '구상에서 출시까지 막힘없는 제품 개발',
				description:
					'AI가 자연스럽게 녹아든 웹, 모바일과 백엔드를 한 팀이 설계합니다. 기획서로 끝내지 않고 사용자가 만질 수 있는 제품으로 완성합니다.',
				steps: ['문제 검증', '제품 설계', '개발과 배포'],
				productName: 'Your AI Product',
				productCopy: '복잡한 기술은 뒤로, 사용자가 얻는 가치는 앞으로.'
			},
			history: {
				eyebrow: '발자취',
				title: '문제를 함께 풀며 쌓아온 증명',
				description:
					'산업과 문제의 형태는 달라도, 목표에 닿는 해답을 실제 결과로 만드는 일을 계속해 왔습니다. 함께한 기업과 프로젝트는 앞으로도 이 기록에 차곡차곡 더해집니다.',
				items: [
					{
						year: '2025',
						category: 'MANUFACTURING · TECHNOLOGY',
						title: '글로벌 제조 기업의 생산기술 연구조직',
						description: '생산 기술 현장의 복잡한 문제를 풀기 위한 AI·소프트웨어 프로젝트를 함께했습니다.'
					},
					{
						year: '2025',
						category: 'FINANCIAL SERVICES',
						title: '국내 대형 자산운용사',
						description: '금융 데이터와 업무 맥락을 연결해 실무에 활용할 수 있는 기술 과제를 수행했습니다.'
					},
					{
						year: '2026',
						category: 'FINANCIAL SERVICES',
						title: '국내 대표 사모투자 전문회사',
						description: '복잡한 리서치와 의사결정 업무를 지원하는 AI 프로젝트를 함께하고 있습니다.'
					}
				]
			},
			hardware: {
				eyebrow: '현장까지 이어지는 AI',
				title: '소프트웨어 밖의 문제까지 해결합니다',
				description:
					'엣지 AI 디바이스, 임베디드 시스템과 산업용 하드웨어를 실제 사용 환경에 맞게 구성합니다. 화면 안의 아이디어가 현장에서 작동하도록 만듭니다.',
				cards: [
					{ label: 'EDGE AI', title: '현장에서 바로 판단하는 AI' },
					{ label: 'EMBEDDED', title: '목적에 맞춘 디바이스와 시스템' }
				]
			},
			process: {
				eyebrow: '일하는 방식',
				title: '문제에서 결과까지, 하나의 증명 과정',
				description:
					'정해진 제품을 끼워 맞추지 않습니다. 엡실론을 정확히 정의하고, 그에 응하는 델타를 찾아 실제 결과로 증명합니다.',
				steps: [
					{ index: '01', key: 'DEFINE', title: '문제를 정의합니다', body: '기술보다 먼저 비즈니스의 병목과 도달해야 할 목표를 확인합니다.' },
					{ index: '02', key: 'DESIGN', title: '해답을 설계합니다', body: 'AI, 소프트웨어, 인프라와 하드웨어 중 필요한 조합을 찾습니다.' },
					{ index: '03', key: 'PROVE', title: '결과로 증명합니다', body: '빠르게 구현하고 실제 환경에서 측정하며 목표에 도달할 때까지 개선합니다.' }
				]
			},
			vision: {
				eyebrow: '비전',
				title: '모든 엡실론에는, 응하는 델타가 있습니다.',
				paragraphs: [
					'수학에서 ε-δ는 “한없이 가까워진다”는 말을 엄밀하게 증명하는 방법입니다. 목표에 아무리 엄격한 정확도를 요구하더라도, 거기 데려다줄 길은 반드시 존재한다는 약속입니다.',
					'우리는 이 약속을 비즈니스의 언어로 옮깁니다. 엡실론은 당신 앞을 가로막은 문제이고, 델타는 그 문제와 목표를 잇는 해답입니다.'
				],
				signature: 'EpsilonDelta. For every ε, a δ.'
			},
			contact: {
				eyebrow: 'Start with ε',
				title: '문제가 있으면, 답은 반드시 있습니다.',
				description:
					'아직 정리되지 않은 아이디어여도 괜찮습니다. 지금 막혀 있는 지점부터 함께 이야기해 주세요.',
				button: '문제 이야기하기'
			},
			footer: { terms: '이용약관', privacy: '개인정보처리방침' }
		},
		en: {
			meta: {
				title: 'EpsilonDelta — Turning AI transformation into tangible outcomes',
				description:
					'From AI agents to software, infrastructure, and hardware. We turn business problems into working outcomes.'
			},
			nav: { business: 'Business', history: 'History', vision: 'Vision', contact: 'Contact' },
			hero: {
				label: 'EpsilonDelta',
				title: ['From an abstract idea', 'to a tangible outcome.'],
				intro:
					'AI transformation stalls not because technology is missing, but because the precise answer connecting the problem to the goal has not been found.',
				introStrong:
					'EpsilonDelta connects problem definition, product, infrastructure, and operations as one continuous path.'
			},
			agent: {
				eyebrow: 'AI that changes the work',
				title: 'AI that works in your business, not just in a demo',
				description:
					'We analyze the full path of finding information, making decisions, and taking action to build AI agents that work inside real operations.',
				workflow: ['Collect data', 'Understand context', 'Decide', 'Take action'],
				query: 'Summarize this quarter’s key risks and responses',
				answer: 'We found three key risks based on internal data and operating standards.',
				result: 'Reviewable outcomes delivered with supporting evidence'
			},
			product: {
				eyebrow: 'Ideas turned into products',
				title: 'A clear path from concept to launch',
				description:
					'One team designs AI-native web, mobile, and backend experiences. We go beyond a plan to deliver a product users can actually touch.',
				steps: ['Validate', 'Design', 'Build & deploy'],
				productName: 'Your AI Product',
				productCopy: 'Complex technology behind. User value upfront.'
			},
			history: {
				eyebrow: 'History',
				title: 'A growing record of problems solved together',
				description:
					'Industries and challenges vary, but our work remains the same: turning the right answer into a working outcome. New partners and projects will continue to be added to this record.',
				items: [
					{
						year: '2025',
						category: 'MANUFACTURING · TECHNOLOGY',
						title: 'Production technology research group at a global manufacturer',
						description: 'We worked together on an AI and software project for complex production technology challenges.'
					},
					{
						year: '2025',
						category: 'FINANCIAL SERVICES',
						title: 'Major Korean asset management company',
						description: 'We connected financial data with operational context to deliver technology for real workflows.'
					},
					{
						year: '2026',
						category: 'FINANCIAL SERVICES',
						title: 'Leading Korean private equity firm',
						description: 'We are working together on an AI project supporting complex research and decision-making.'
					}
				]
			},
			hardware: {
				eyebrow: 'AI extended to the field',
				title: 'We solve the problems beyond software',
				description:
					'We tailor edge AI devices, embedded systems, and industrial hardware to the real environment—so ideas on a screen work in the field.',
				cards: [
					{ label: 'EDGE AI', title: 'AI that makes decisions on site' },
					{ label: 'EMBEDDED', title: 'Purpose-built devices and systems' }
				]
			},
			process: {
				eyebrow: 'How we work',
				title: 'From problem to outcome, as one proof process',
				description:
					'We never force a preset product. We define epsilon precisely, find the corresponding delta, and prove it through a working outcome.',
				steps: [
					{ index: '01', key: 'DEFINE', title: 'Define the problem', body: 'Before technology, we clarify the bottleneck and the outcome that matters.' },
					{ index: '02', key: 'DESIGN', title: 'Design the answer', body: 'We find the right combination of AI, software, infrastructure, and hardware.' },
					{ index: '03', key: 'PROVE', title: 'Prove the result', body: 'We build fast, measure in the real environment, and improve until the goal is reached.' }
				]
			},
			vision: {
				eyebrow: 'Vision',
				title: 'For every epsilon, there is a delta.',
				paragraphs: [
					'In mathematics, ε-δ gives precise meaning to approaching a limit. It is a promise that no matter how exact the target, there is a path that gets us there.',
					'We translate that promise into business. Epsilon is the problem in your way; delta is the answer connecting it to the goal.'
				],
				signature: 'EpsilonDelta. For every ε, a δ.'
			},
			contact: {
				eyebrow: 'Start with ε',
				title: 'Where there is a problem, there is an answer.',
				description:
					'Your idea does not have to be fully formed. Start with where you are stuck.',
				button: 'Tell us your problem'
			},
			footer: { terms: 'Terms', privacy: 'Privacy' }
		}
	};

	$: c = content[currentLanguage];

	function switchLanguage(language: 'ko' | 'en') {
		currentLanguage = language;
	}
</script>

<svelte:head>
	<title>{c.meta.title}</title>
	<meta name="description" content={c.meta.description} />
	<meta property="og:title" content={c.meta.title} />
	<meta property="og:description" content={c.meta.description} />
	<meta name="theme-color" content="#0c0c0c" />
</svelte:head>

<div class="page">
	<nav class="nav" aria-label="Main navigation">
		<div class="nav-inner">
			<a href="/" class="brand" aria-label="EpsilonDelta home">
				<img class="brand-wordmark" src="/brand/logo-en-green-01.png" alt="EpsilonDelta" />
			</a>
			<div class="nav-links">
				<a href="#business">{c.nav.business}</a>
				<a href="#history">{c.nav.history}</a>
				<a href="#vision">{c.nav.vision}</a>
				<a href="#contact">{c.nav.contact}</a>
			</div>
			<div class="language" aria-label="Language selection">
				<button class:active={currentLanguage === 'ko'} on:click={() => switchLanguage('ko')}>KO</button>
				<span>/</span>
				<button class:active={currentLanguage === 'en'} on:click={() => switchLanguage('en')}>EN</button>
			</div>
		</div>
	</nav>

	<main>
		<section class="hero story-shell">
			<h1>{#each c.hero.title as line}<span>{line}</span>{/each}</h1>
			<div class="hero-art" aria-hidden="true">
				<div class="hero-orbit orbit-one"></div>
				<div class="hero-orbit orbit-two"></div>
				<div class="epsilon-token"><span>ε</span><small>PROBLEM</small></div>
				<img src="/brand/symbol-green.png" alt="" />
				<div class="delta-token"><span>δ</span><small>ANSWER</small></div>
				<div class="hero-line line-left"></div>
				<div class="hero-line line-right"></div>
			</div>
			<div class="hero-intro">
				<p>{c.hero.intro}</p>
				<strong>{c.hero.introStrong}</strong>
			</div>
		</section>

		<section class="story-section story-shell" id="business">
			<div class="story-copy">
				<p class="eyebrow"><span></span>{c.agent.eyebrow}</p>
				<h2>{c.agent.title}</h2>
				<p class="description">{c.agent.description}</p>
			</div>
			<div class="visual-panel workflow-panel">
				<div class="workflow-nav">
					<div class="mini-brand"><img src="/brand/symbol-green.png" alt="" /><span>Agent workspace</span></div>
					<span class="live-dot">LIVE</span>
				</div>
				<div class="workflow-body">
					<div class="workflow-steps">
						{#each c.agent.workflow as step, index}
							<div class:active={index === 2}><span>0{index + 1}</span><p>{step}</p><i></i></div>
						{/each}
					</div>
					<div class="agent-window">
						<div class="user-query"><span>YOU</span><p>{c.agent.query}</p></div>
						<div class="agent-answer">
							<div class="agent-avatar">δ</div>
							<div><span>EPSILONDELTA AGENT</span><p>{c.agent.answer}</p>
								<div class="answer-result"><Check size={14} color="#1aff40" /><span>{c.agent.result}</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="story-section story-shell">
			<div class="story-copy">
				<p class="eyebrow"><span></span>{c.product.eyebrow}</p>
				<h2>{c.product.title}</h2>
				<p class="description">{c.product.description}</p>
			</div>
			<div class="visual-panel product-panel">
				<div class="browser-window">
					<div class="browser-bar"><div><i></i><i></i><i></i></div><span>your-product.ai</span></div>
					<div class="product-screen">
						<p>AI PRODUCT</p><h3>{c.product.productName}</h3><span>{c.product.productCopy}</span>
						<div class="screen-button">Get started <ArrowRight size={13} /></div>
					</div>
				</div>
				<div class="mobile-window">
					<div class="mobile-speaker"></div>
					<img src="/brand/symbol-green.png" alt="" />
					<div class="mobile-lines"><i></i><i></i><i></i></div>
				</div>
				<div class="product-steps">
					{#each c.product.steps as step, index}<div><span>0{index + 1}</span><p>{step}</p></div>{/each}
				</div>
			</div>
		</section>

		<section class="story-section story-shell" id="history">
			<div class="story-copy">
				<p class="eyebrow"><span></span>{c.history.eyebrow}</p>
				<h2>{c.history.title}</h2>
				<p class="description">{c.history.description}</p>
			</div>
			<div class="visual-panel history-panel">
				<div class="history-line" aria-hidden="true"></div>
				<div class="history-list">
					{#each c.history.items as item, index}
						<article class="history-item">
							<div class="history-year"><span>{item.year}</span><i class:current={index === c.history.items.length - 1}></i></div>
							<div class="history-copy">
								<p>{item.category}</p>
								<h3>{item.title}</h3>
								<span>{item.description}</span>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="story-section story-shell">
			<div class="story-copy">
				<p class="eyebrow"><span></span>{c.hardware.eyebrow}</p>
				<h2>{c.hardware.title}</h2>
				<p class="description">{c.hardware.description}</p>
			</div>
			<div class="hardware-grid">
				{#each c.hardware.cards as card, index}
					<div class="hardware-card">
						<div class="device device-{index + 1}" aria-hidden="true">
							<div class="device-screen"><img src="/brand/symbol-green.png" alt="" /><i></i></div>
							<div class="device-base"></div>
						</div>
						<div class="hardware-copy"><span>{card.label}</span><h3>{card.title}</h3></div>
					</div>
				{/each}
			</div>
		</section>

		<section class="process-section">
			<div class="story-shell">
				<div class="story-copy">
					<p class="eyebrow"><span></span>{c.process.eyebrow}</p>
					<h2>{c.process.title}</h2>
					<p class="description">{c.process.description}</p>
				</div>
				<div class="process-list">
					{#each c.process.steps as step}
						<article><div class="process-meta"><span>{step.index}</span><strong>{step.key}</strong></div><h3>{step.title}</h3><p>{step.body}</p></article>
					{/each}
				</div>
			</div>
		</section>

		<section class="vision-section" id="vision">
			<div class="story-shell vision-layout">
				<div class="vision-art" aria-hidden="true">
					<div class="vision-epsilon">ε</div><div class="vision-arrow"></div><img src="/brand/symbol-green.png" alt="" /><div class="vision-delta">δ</div>
				</div>
				<div class="story-copy vision-copy">
					<p class="eyebrow"><span></span>{c.vision.eyebrow}</p>
					<h2>{c.vision.title}</h2>
					<div class="vision-body">{#each c.vision.paragraphs as paragraph}<p>{paragraph}</p>{/each}</div>
					<strong>{c.vision.signature}</strong>
				</div>
			</div>
		</section>

		<section class="contact-section" id="contact">
			<div class="story-shell contact-layout">
				<div class="story-copy">
					<p class="eyebrow"><span></span>{c.contact.eyebrow}</p>
					<h2>{c.contact.title}</h2>
					<p class="description">{c.contact.description}</p>
				</div>
				<a class="contact-button" href="mailto:contact@epsilondelta.ai"><Mail size={18} /><span>{c.contact.button}</span><ArrowRight size={18} /></a>
			</div>
		</section>
	</main>

	<footer class="footer">
		<div class="footer-inner">
			<div class="footer-brand"><img src="/brand/logo-en-green-01.png" alt="EpsilonDelta" /><p>EpsilonDelta Inc.</p></div>
			<div class="footer-contact"><a href="mailto:contact@epsilondelta.ai">contact@epsilondelta.ai</a><p>For every ε, a δ.</p></div>
			<div class="footer-links"><a href="/terms">{c.footer.terms}</a><a href="/privacy">{c.footer.privacy}</a></div>
		</div>
		<div class="footer-bottom">© {year} EpsilonDelta Inc. All rights reserved.</div>
	</footer>
</div>

<style>
	:global(*) { box-sizing: border-box; }
	:global(html) { scroll-behavior: smooth; scroll-padding-top: 80px; }
	:global(body) { margin: 0; background: #0c0c0c; }
	:global(a) { color: inherit; text-decoration: none; }
	:global(button) { font: inherit; }
	.page { --green: #1aff40; --surface: #181818; --surface-raised: #202020; min-height: 100vh; overflow: hidden; background: #0c0c0c; color: #f2f2f2; font-family: Inter, Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif; }
	.story-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
	.nav { position: sticky; z-index: 50; top: 0; height: 64px; border-bottom: 1px solid rgba(255,255,255,.07); background: rgba(12,12,12,.9); backdrop-filter: blur(18px); }
	.nav-inner { width: min(1180px, calc(100% - 48px)); height: 100%; margin: 0 auto; display: flex; align-items: center; }
	.brand { display: flex; align-items: center; }
	.brand-wordmark { width: 112px; height: 25px; object-fit: contain; }
	.nav-links { display: flex; gap: 30px; margin-left: auto; }
	.nav-links a { color: #8d8d8d; font-size: 12px; transition: color .2s; }
	.nav-links a:hover { color: #fff; }
	.language { display: flex; align-items: center; gap: 5px; margin-left: 34px; color: #444; }
	.language button { padding: 4px; border: 0; background: transparent; color: #5f5f5f; font-size: 10px; cursor: pointer; }
	.language button.active { color: #e6e6e6; }
	.hero { padding: 112px 0 0; }
	.hero-label { margin: 0 0 34px; color: #a4a4a4; font-size: 14px; font-weight: 650; }
	.hero h1 { margin: 0; max-width: 760px; font-size: clamp(44px, 6vw, 66px); font-weight: 650; line-height: 1.12; letter-spacing: -.05em; }
	.hero h1 span { display: block; }
	.hero-art { position: relative; height: 450px; margin-top: 54px; overflow: hidden; border-radius: 40px; background: radial-gradient(circle at 50% 55%, rgba(26,255,64,.12), transparent 33%), linear-gradient(145deg,#252725,#151515 56%,#202420); }
	.hero-art:before { content: ''; position: absolute; inset: 0; opacity: .13; background-image: linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px); background-size: 48px 48px; mask-image: radial-gradient(circle at center,black,transparent 72%); }
	.hero-art > img { position: absolute; z-index: 2; width: 190px; height: 156px; object-fit: contain; left: 50%; top: 50%; transform: translate(-50%,-50%); filter: drop-shadow(0 0 26px rgba(26,255,64,.2)); }
	.hero-orbit { position: absolute; z-index: 1; left: 50%; top: 50%; border: 1px solid rgba(255,255,255,.09); border-radius: 50%; transform: translate(-50%,-50%); }
	.orbit-one { width: 310px; height: 310px; }
	.orbit-two { width: 430px; height: 430px; border-style: dashed; }
	.epsilon-token,.delta-token { position: absolute; z-index: 3; width: 94px; height: 94px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.14); border-radius: 24px; background: rgba(17,17,17,.82); box-shadow: 0 18px 38px rgba(0,0,0,.3); }
	.epsilon-token { left: 85px; top: 82px; }
	.delta-token { right: 85px; bottom: 74px; }
	.epsilon-token span,.delta-token span { color: var(--green); font: 32px Georgia,serif; }
	.epsilon-token small,.delta-token small { margin-top: 4px; color: #777; font-size: 8px; letter-spacing: .14em; }
	.hero-line { position: absolute; z-index: 1; width: 190px; height: 1px; background: linear-gradient(90deg,rgba(26,255,64,.7),transparent); transform-origin: left; }
	.line-left { left: 167px; top: 157px; transform: rotate(24deg); }
	.line-right { right: 157px; bottom: 143px; transform: rotate(205deg); }
	.hero-intro { margin: 56px 0 0; color: #929292; font-size: 15px; line-height: 1.9; }
	.hero-intro p { margin: 0; }
	.hero-intro strong { display: block; margin-top: 4px; color: #d9d9d9; font-weight: 600; }
	.story-section { padding-top: 150px; }
	.story-copy { max-width: 760px; }
	.eyebrow { display: flex; align-items: center; gap: 9px; margin: 0 0 25px; color: #a6a6a6; font-size: 24px; font-weight: 650; }
	.eyebrow span { width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 12px rgba(26,255,64,.35); }
	.story-copy h2 { margin: 0; max-width: 720px; font-size: clamp(34px,4.2vw,48px); font-weight: 650; line-height: 1.22; letter-spacing: -.045em; word-break: keep-all; }
	.description { max-width: 720px; margin: 24px 0 0; color: #8b8b8b; font-size: 15px; line-height: 1.85; word-break: keep-all; }
	.visual-panel { position: relative; margin-top: 58px; overflow: hidden; border-radius: 38px; background: var(--surface); }
	.workflow-panel { min-height: 490px; padding: 24px; }
	.workflow-nav { height: 52px; padding: 0 4px 18px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,.07); }
	.mini-brand { display: flex; align-items: center; gap: 9px; color: #aaa; font-size: 11px; }
	.mini-brand img { width: 23px; height: 23px; object-fit: contain; }
	.live-dot { padding: 6px 9px; border: 1px solid rgba(26,255,64,.22); border-radius: 20px; color: var(--green); font-size: 8px; letter-spacing: .12em; }
	.workflow-body { min-height: 390px; display: grid; grid-template-columns: 300px 1fr; }
	.workflow-steps { padding: 25px 18px 0 0; border-right: 1px solid rgba(255,255,255,.07); }
	.workflow-steps > div { position: relative; padding: 15px 12px; display: grid; grid-template-columns: 28px 1fr; align-items: center; color: #656565; border-radius: 10px; }
	.workflow-steps > div.active { color: #e8e8e8; background: rgba(255,255,255,.05); }
	.workflow-steps span { font: 9px 'Courier New',monospace; }
	.workflow-steps p { margin: 0; font-size: 11px; }
	.workflow-steps i { position: absolute; right: 10px; width: 5px; height: 5px; border-radius: 50%; background: #3b3b3b; }
	.workflow-steps > div.active i { background: var(--green); }
	.agent-window { padding: 38px 0 0 30px; }
	.user-query { margin-left: 62px; padding: 18px 20px; border-radius: 16px 16px 3px 16px; background: #292929; }
	.user-query span,.agent-answer span { color: #626262; font-size: 8px; letter-spacing: .1em; }
	.user-query p,.agent-answer p { margin: 8px 0 0; color: #d5d5d5; font-size: 12px; line-height: 1.6; }
	.agent-answer { margin-top: 28px; display: grid; grid-template-columns: 36px 1fr; gap: 12px; }
	.agent-avatar { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 10px; background: var(--green); color: #071008; font: 19px Georgia,serif; }
	.agent-answer > div:last-child { padding: 18px 20px; border: 1px solid rgba(26,255,64,.13); border-radius: 3px 16px 16px 16px; background: rgba(26,255,64,.035); }
	.answer-result { margin-top: 18px; padding-top: 13px; display: flex; gap: 8px; align-items: center; border-top: 1px solid rgba(255,255,255,.07); color: #8e8e8e; }
	.answer-result span { color: #8e8e8e; font-size: 9px; letter-spacing: 0; }
	.product-panel { height: 520px; background: radial-gradient(circle at 70% 25%,rgba(26,255,64,.08),transparent 32%),#181818; }
	.browser-window { position: absolute; width: 68%; max-width: 800px; height: 360px; left: 50px; top: 58px; overflow: hidden; border: 1px solid rgba(255,255,255,.13); border-radius: 18px; background: #0e0e0e; box-shadow: 0 34px 70px rgba(0,0,0,.42); }
	.browser-bar { height: 38px; padding: 0 14px; display: flex; align-items: center; border-bottom: 1px solid rgba(255,255,255,.08); color: #4f4f4f; font-size: 8px; }
	.browser-bar > div { display: flex; gap: 5px; }
	.browser-bar i { width: 6px; height: 6px; border-radius: 50%; background: #3a3a3a; }
	.browser-bar span { margin: 0 auto; transform: translateX(-14px); }
	.product-screen { height: calc(100% - 38px); padding: 54px 44px; background: linear-gradient(130deg,rgba(26,255,64,.035),transparent); }
	.product-screen > p { margin: 0 0 13px; color: var(--green); font-size: 8px; letter-spacing: .14em; }
	.product-screen h3 { margin: 0; max-width: 360px; font-size: 36px; letter-spacing: -.045em; }
	.product-screen > span { display: block; margin-top: 18px; color: #797979; font-size: 11px; }
	.screen-button { width: max-content; margin-top: 30px; padding: 10px 14px; display: flex; align-items: center; gap: 16px; border-radius: 6px; background: var(--green); color: #071008; font-size: 9px; font-weight: 700; }
	.mobile-window { position: absolute; width: 156px; height: 310px; right: clamp(38px,8.5vw,110px); bottom: 36px; padding: 24px 17px; overflow: hidden; border: 3px solid #333; border-radius: 28px; background: #101010; box-shadow: 0 28px 58px rgba(0,0,0,.5); }
	.mobile-speaker { width: 42px; height: 5px; margin: -14px auto 34px; border-radius: 8px; background: #333; }
	.mobile-window img { width: 62px; height: 52px; display: block; margin: 0 auto; object-fit: contain; }
	.mobile-lines { margin-top: 36px; display: grid; gap: 11px; }
	.mobile-lines i { height: 7px; border-radius: 8px; background: #292929; }
	.mobile-lines i:nth-child(2) { width: 72%; }
	.mobile-lines i:nth-child(3) { height: 28px; margin-top: 64px; background: rgba(26,255,64,.8); }
	.product-steps { position: absolute; left: 50px; bottom: 34px; display: flex; gap: 34px; }
	.product-steps div { display: flex; gap: 8px; align-items: center; color: #656565; }
	.product-steps span { font: 8px 'Courier New',monospace; }
	.product-steps p { margin: 0; font-size: 9px; }
	.history-panel { position: relative; min-height: 520px; padding: 34px 48px; background: linear-gradient(155deg,#1e211e,#151515 72%); }
	.history-line { position: absolute; width: 1px; left: 143px; top: 76px; bottom: 76px; background: rgba(26,255,64,.28); }
	.history-list { position: relative; }
	.history-item { min-height: 150px; display: grid; grid-template-columns: 80px 1fr; gap: 42px; align-items: center; border-bottom: 1px solid rgba(255,255,255,.08); }
	.history-item:last-child { border-bottom: 0; }
	.history-year { position: relative; display: flex; align-items: center; justify-content: space-between; }
	.history-year span { color: #f1f1f1; font-size: 24px; font-weight: 650; letter-spacing: -.04em; }
	.history-year i { position: absolute; z-index: 2; width: 10px; height: 10px; right: -21px; border: 2px solid #242824; border-radius: 50%; background: var(--green); box-shadow: 0 0 0 4px #1b1d1b; }
	.history-year i.current { box-shadow: 0 0 0 4px #1b1d1b,0 0 18px rgba(26,255,64,.55); }
	.history-copy { padding: 24px 0; }
	.history-copy > p { margin: 0 0 8px; color: var(--green); font-size: 9px; font-weight: 700; letter-spacing: .13em; }
	.history-copy h3 { margin: 0; font-size: 19px; font-weight: 650; letter-spacing: -.025em; }
	.history-copy > span { display: block; margin-top: 12px; color: #797979; font-size: 12px; line-height: 1.7; word-break: keep-all; }
	.hardware-grid { margin-top: 58px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
	.hardware-card { overflow: hidden; border-radius: 32px; background: var(--surface); }
	.device { position: relative; height: 330px; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle at 50% 55%,rgba(26,255,64,.08),transparent 35%); }
	.device-screen { position: relative; z-index: 2; width: 126px; height: 176px; display: grid; place-items: center; border: 8px solid #303030; border-radius: 19px; background: #090909; box-shadow: 0 30px 46px rgba(0,0,0,.5); }
	.device-screen img { width: 70px; height: 58px; object-fit: contain; }
	.device-screen i { position: absolute; width: 5px; height: 5px; top: 8px; border-radius: 50%; background: var(--green); box-shadow: 0 0 9px var(--green); }
	.device-base { position: absolute; z-index: 1; width: 180px; height: 52px; bottom: 54px; border-radius: 50%; background: #242424; transform: perspective(160px) rotateX(62deg); box-shadow: 0 20px 40px rgba(0,0,0,.5); }
	.device-2 .device-screen { width: 170px; height: 112px; border-radius: 10px; transform: rotate(-5deg); }
	.hardware-copy { padding: 0 28px 30px; }
	.hardware-copy span { color: var(--green); font-size: 8px; letter-spacing: .14em; }
	.hardware-copy h3 { margin: 10px 0 0; font-size: 18px; line-height: 1.4; letter-spacing: -.025em; word-break: keep-all; }
	.process-section { margin-top: 150px; padding: 120px 0; background: #0c0c0c; }
	.process-list { margin-top: 58px; display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid rgba(255,255,255,.1); border-left: 1px solid rgba(255,255,255,.1); }
	.process-list article { min-height: 280px; padding: 26px; border-right: 1px solid rgba(255,255,255,.1); border-bottom: 1px solid rgba(255,255,255,.1); }
	.process-meta { display: flex; align-items: center; justify-content: space-between; }
	.process-meta span { color: #555; font: 12px 'Courier New',monospace; }
	.process-meta strong { color: var(--green); font-size: 14px; letter-spacing: .12em; }
	.process-list h3 { margin: 76px 0 16px; font-size: 24px; letter-spacing: -.025em; }
	.process-list p { margin: 0; color: #737373; font-size: 14px; line-height: 1.75; }
	.vision-section { padding: 160px 0; background: #0c0c0c; }
	.vision-layout { display: grid; grid-template-columns: 290px 1fr; gap: 80px; align-items: center; }
	.vision-art { position: relative; height: 390px; display: grid; place-items: center; overflow: hidden; border: 1px solid rgba(26,255,64,.16); border-radius: 34px; background: radial-gradient(circle,rgba(26,255,64,.07),transparent 55%); }
	.vision-art img { width: 120px; height: 100px; object-fit: contain; }
	.vision-epsilon,.vision-delta { position: absolute; color: rgba(255,255,255,.28); font: 30px Georgia,serif; }
	.vision-epsilon { left: 28px; top: 28px; }.vision-delta { right: 28px; bottom: 28px; color: var(--green); }
	.vision-arrow { position: absolute; width: 180px; height: 1px; background: linear-gradient(90deg,transparent,var(--green),transparent); transform: rotate(-48deg); opacity: .35; }
	.vision-copy h2 { font-size: clamp(34px,4vw,48px); }
	.vision-body { margin-top: 30px; }
	.vision-body p { margin: 0 0 15px; color: #858585; font-size: 13px; line-height: 1.85; word-break: keep-all; }
	.vision-copy > strong { display: block; margin-top: 30px; color: var(--green); font: italic 14px Georgia,serif; }
	.contact-section { padding: 120px 0; background: #f2f3ef; color: #101010; }
	.contact-layout { display: grid; grid-template-columns: 1fr 230px; gap: 70px; align-items: end; }
	.contact-section .eyebrow { color: #4e554e; }
	.contact-section .description { color: #636963; }
	.contact-button { min-height: 64px; padding: 0 18px; display: grid; grid-template-columns: 22px 1fr 20px; gap: 10px; align-items: center; background: #101010; color: #fff; font-size: 12px; font-weight: 650; transition: background .2s; }
	.contact-button:hover { background: #1b271d; }
	.footer { padding: 70px 0 26px; background: #080808; }
	.footer-inner { width: min(1180px,calc(100% - 48px)); margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr auto; gap: 60px; }
	.footer-brand img { width: 155px; height: 36px; object-fit: contain; object-position: left center; }
	.footer-brand p,.footer-contact p,.footer-contact a { margin: 9px 0 0; color: #5e5e5e; font-size: 10px; }
	.footer-links { display: flex; gap: 22px; }
	.footer-links a { color: #666; font-size: 10px; }
	.footer-bottom { width: min(1180px,calc(100% - 48px)); margin: 52px auto 0; padding-top: 18px; border-top: 1px solid rgba(255,255,255,.07); color: #3c3c3c; font-size: 9px; }
	@media (max-width: 760px) {
		.story-shell { width: min(100% - 32px,800px); }
		.nav-inner,.footer-inner,.footer-bottom { width: calc(100% - 32px); }
		.nav-links { display: none; }
		.language { margin-left: auto; }
		.hero { padding-top: 80px; }
		.hero-art { height: 360px; margin-top: 40px; border-radius: 28px; }
		.hero-art > img { width: 140px; }
		.orbit-one { width: 230px; height: 230px; }.orbit-two { width: 330px; height: 330px; }
		.epsilon-token,.delta-token { width: 72px; height: 72px; border-radius: 18px; }
		.epsilon-token { left: 24px; top: 58px; }.delta-token { right: 24px; bottom: 54px; }
		.line-left,.line-right { display: none; }
		.story-section { padding-top: 110px; }
		.visual-panel { margin-top: 42px; border-radius: 28px; }
		.workflow-panel { min-height: 520px; padding: 18px; }
		.workflow-body { grid-template-columns: 1fr; }
		.workflow-steps { display: grid; grid-template-columns: 1fr 1fr; padding: 15px 0; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.07); }
		.workflow-steps > div { padding: 10px; }
		.agent-window { padding: 28px 0 0; }
		.user-query { margin-left: 35px; }
		.product-panel { height: 500px; }
		.browser-window { width: calc(100% - 48px); height: 300px; left: 24px; top: 34px; }
		.product-screen { padding: 38px 28px; }
		.product-screen h3 { font-size: 29px; }
		.mobile-window { width: 125px; height: 245px; right: 20px; bottom: 22px; }
		.product-steps { left: 24px; bottom: 28px; flex-direction: column; gap: 9px; }
		.history-panel { min-height: 0; padding: 22px 20px; }
		.history-line { left: 90px; top: 65px; bottom: 65px; }
		.history-item { min-height: 180px; grid-template-columns: 56px 1fr; gap: 27px; }
		.history-year span { font-size: 17px; }
		.history-year i { width: 9px; height: 9px; right: -18px; }
		.history-copy h3 { font-size: 17px; }
		.history-copy > span { font-size: 11px; }
		.hardware-grid { grid-template-columns: 1fr; }
		.process-section { margin-top: 110px; padding: 90px 0; }
		.process-list { grid-template-columns: 1fr; }
		.process-list article { min-height: 220px; }
		.process-list h3 { margin-top: 48px; }
		.vision-section { padding: 110px 0; }
		.vision-layout { grid-template-columns: 1fr; gap: 55px; }
		.vision-art { height: 300px; }
		.contact-layout { grid-template-columns: 1fr; gap: 36px; }
		.footer-inner { grid-template-columns: 1fr; gap: 30px; }
	}
</style>
