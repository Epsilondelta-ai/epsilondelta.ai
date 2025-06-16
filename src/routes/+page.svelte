<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { onMount } from 'svelte';

	import { Brain, Server } from 'lucide-svelte';

	const year = new Date().getFullYear();

	// 브라우저 언어 설정에 따라 기본 언어 결정
	function getDefaultLanguage(): 'ko' | 'en' {
		if (typeof window !== 'undefined') {
			const browserLanguage = navigator.language || navigator.languages?.[0];
			return browserLanguage?.startsWith('ko') ? 'ko' : 'en';
		}
		return 'en';
	}

	let currentLanguage: 'ko' | 'en' = getDefaultLanguage();

	// Content data for both languages
	const content = {
		ko: {
			title: 'EpsilonDelta AI',
			description:
				'AI 기술로 불편함을 해결하는 IT 전문 기업입니다. AI 솔루션 개발, 서버 하드웨어, 하이브리드 클라우드 서비스를 제공합니다.',
			hero: {
				title: 'Welcome to EPSILONDELTA AI',
				subtitle: 'AI 기반 솔루션을 통해 비즈니스 혁신을 위한 포괄적인 IT 서비스를 제공합니다.'
			},
			about: {
				title: '회사 소개',
				content: [
					'복잡한 기술적 과제와 실용적인 비즈니스 솔루션 사이의 격차를 혁신적인 AI 기술과 포괄적인 IT 인프라 서비스를 통해 해결하는 것을 전문으로 합니다.',
					'핵심 역량으로는 AI 기반 솔루션 개발, 엔터프라이즈 하드웨어 인프라, 하이브리드 클라우드 아키텍처 배포가 있습니다. IDC(인터넷 데이터 센터) 운영과 클라우드 인프라 관리에 대한 풍부한 경험을 바탕으로 온프레미스 하드웨어와 클라우드 네이티브 기술을 결합한 엔드투엔드 디지털 전환 솔루션을 제공합니다.'
				]
			},
			services: {
				title: '서비스',
				items: [
					{
						title: 'AI 솔루션 개발',
						description:
							'머신러닝, 딥러닝, 물리적 인프라에서의 엣지 AI 배포를 활용한 맞춤형 AI 솔루션으로 지능형 자동화와 데이터 기반 인사이트를 제공합니다.'
					},
					{
						title: '하드웨어 인프라',
						description:
							'최적의 성능과 확장성을 위한 AI 솔루션 통합 기능을 갖춘 엔터프라이즈급 서버, 고성능 스토리지 시스템, 네트워크 인프라를 제공합니다.'
					},
					{
						title: '하이브리드 클라우드',
						description:
							'IDC 관리 전문성을 바탕으로 온프레미스 인프라와 퍼블릭 클라우드 플랫폼을 원활하게 통합하는 포괄적인 하이브리드 클라우드 아키텍처 설계 및 배포를 제공합니다.'
					}
				]
			}
		},
		en: {
			title: 'EpsilonDelta AI',
			description:
				'AI-powered IT company solving inconveniences through technology. We provide AI solution development, server hardware, and hybrid cloud services.',
			hero: {
				title: 'Welcome to EPSILONDELTA AI',
				subtitle:
					'We are running AI-powered solutions, providing comprehensive IT services for business innovation.'
			},
			about: {
				title: 'About',
				content: [
					'We specialize in bridging the gap between complex technological challenges and practical business solutions through innovative AI technologies and comprehensive IT infrastructure services.',
					'Our core competencies include AI-powered solution development, enterprise hardware infrastructure, and hybrid cloud architecture deployment. With extensive experience in IDC (Internet Data Center) operations and cloud infrastructure management, we deliver end-to-end digital transformation solutions that combine on-premises hardware with cloud-native technologies.'
				]
			},
			services: {
				title: 'Services',
				items: [
					{
						title: 'AI Solution Development',
						description:
							'Custom AI solutions leveraging machine learning, deep learning, and edge AI deployment on physical infrastructure for intelligent automation and data-driven insights.'
					},
					{
						title: 'Hardware Infrastructure',
						description:
							'Enterprise-grade servers, high-performance storage systems, and network infrastructure with AI solution integration capabilities for optimal performance and scalability.'
					},
					{
						title: 'Hybrid Cloud Services',
						description:
							'Comprehensive hybrid cloud architecture design and deployment with IDC management expertise, seamlessly integrating on-premises infrastructure with public cloud platforms.'
					}
				]
			}
		}
	};

	// Reactive content based on current language
	$: currentContent = content[currentLanguage];

	function switchLanguage(lang: 'ko' | 'en') {
		currentLanguage = lang;
	}
</script>

<svelte:head>
	<title>{currentContent.title}</title>
	<meta name="description" content={currentContent.description} />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-slate-950">
	<!-- Navigation -->
	<nav class="px-6 py-6 text-right">
		<div class="container mx-auto max-w-4xl">
			<div class="space-x-6 text-sm text-slate-600 dark:text-slate-400">
				<button
					class="cursor-pointer transition-colors hover:text-slate-900 dark:hover:text-white {currentLanguage ===
					'ko'
						? 'font-medium text-slate-900 dark:text-white'
						: ''}"
					on:click={() => switchLanguage('ko')}
				>
					KO
				</button>
				<button
					class="cursor-pointer transition-colors hover:text-slate-900 dark:hover:text-white {currentLanguage ===
					'en'
						? 'font-medium text-slate-900 dark:text-white'
						: ''}"
					on:click={() => switchLanguage('en')}
				>
					EN
				</button>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="px-6 py-20 text-center">
		<div class="container mx-auto max-w-4xl">
			<h1 class="mb-8 text-5xl font-bold text-slate-900 md:text-6xl dark:text-white">
				{@html currentContent.hero.title.replace(
					'EPSILONDELTA AI',
					'<span class="text-blue-600 dark:text-blue-400">EPSILONDELTA AI</span>'
				)}
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300">
				{currentContent.hero.subtitle}
			</p>
		</div>
	</section>

	<Separator class="my-12" />

	<!-- About Section -->
	<section id="about" class="px-6 py-16">
		<div class="container mx-auto max-w-4xl">
			<h2 class="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
				{currentContent.about.title}
			</h2>
			<div class="space-y-6">
				{#each currentContent.about.content as paragraph}
					<p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
						{paragraph}
					</p>
				{/each}
			</div>
		</div>
	</section>

	<Separator class="my-12" />

	<!-- Services Section -->
	<section id="services" class="px-6 py-16">
		<div class="container mx-auto max-w-4xl">
			<h2 class="mb-12 text-3xl font-bold text-slate-900 dark:text-white">
				{currentContent.services.title}
			</h2>
			<div class="grid gap-8 md:grid-cols-3">
				<!-- AI Solution Development -->
				<Card
					class="border border-slate-200 transition-shadow hover:shadow-lg dark:border-slate-800"
				>
					<CardHeader class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900"
						>
							<Brain class="h-6 w-6 text-blue-600 dark:text-blue-400" />
						</div>
						<CardTitle class="text-lg">{currentContent.services.items[0].title}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription class="text-center">
							{currentContent.services.items[0].description}
						</CardDescription>
					</CardContent>
				</Card>

				<!-- Hardware Infrastructure -->
				<Card
					class="border border-slate-200 transition-shadow hover:shadow-lg dark:border-slate-800"
				>
					<CardHeader class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900"
						>
							<Server class="h-6 w-6 text-green-600 dark:text-green-400" />
						</div>
						<CardTitle class="text-lg">{currentContent.services.items[1].title}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription class="text-center">
							{currentContent.services.items[1].description}
						</CardDescription>
					</CardContent>
				</Card>

				<!-- Hybrid Cloud Services -->
				<Card
					class="border border-slate-200 transition-shadow hover:shadow-lg dark:border-slate-800"
				>
					<CardHeader class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900"
						>
							<svg
								class="h-6 w-6 text-purple-600 dark:text-purple-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.018 4.018 0 003 15z"
								></path>
							</svg>
						</div>
						<CardTitle class="text-lg">{currentContent.services.items[2].title}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription class="text-center">
							{currentContent.services.items[2].description}
						</CardDescription>
					</CardContent>
				</Card>
			</div>
		</div>
	</section>

	<footer class="border-t border-slate-200 px-6 py-16 dark:border-slate-800">
		<div class="container mx-auto max-w-4xl">
			<div class="text-center text-sm text-slate-500 dark:text-slate-400">
				© {year} EpsilonDelta Inc. All rights reserved.
			</div>
		</div>
	</footer>
</div>
