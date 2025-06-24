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

	import { Accessibility, BarChartBig, Brain } from 'lucide-svelte';

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
				'AI 기술을 통해 사람들의 일상 속 불편함을 해소하고, 모두에게 편리하고 평등한 경험을 제공하는 것을 목표로 합니다.',
			hero: {
				title: 'Welcome to EPSILONDELTA AI',
				subtitle: 'AI 기술로 세상의 불편함을 해결하고, 더 나은 내일을 만듭니다.'
			},
			about: {
				title: '우리의 비전',
				content: [
					'저희는 AI 기술을 활용하여 사람들이 일상에서 겪는 다양한 불편함을 해결하는 데 집중합니다. 어떤 이에게는 당연한 일이 다른 이에게는 큰 장벽이 될 수 있습니다. 저희는 기술을 통해 이러한 정보와 경험의 격차를 해소하고, 모두가 동등한 기회를 누릴 수 있는 세상을 만들고자 합니다.',
					'딥러닝, 자연어 처리, 컴퓨터 비전 등 최신 AI 기술을 바탕으로, 사회적 약자를 포함한 모든 사용자를 위한 직관적이고 접근성 높은 솔루션을 개발합니다. 저희의 목표는 기술의 혜택을 모두가 누릴 수 있도록 하여, 더 따뜻하고 포용적인 사회를 만드는 데 기여하는 것입니다.'
				]
			},
			services: {
				title: 'AI 솔루션',
				items: [
					{
						title: '맞춤형 AI 에이전트',
						description:
							'사용자 개개인의 필요와 상황에 맞춘 지능형 AI 에이전트를 개발하여, 복잡한 작업을 자동화하고 개인화된 서비스를 제공함으로써 일상의 효율성을 극대화합니다.'
					},
					{
						title: 'AI 기반 접근성 솔루션',
						description:
							'시각, 청각 등 신체적 제약이 있는 사용자를 위해 AI 기술을 활용한 혁신적인 접근성 솔루션을 제공합니다. 음성 인식, 이미지 묘사, 텍스트 요약 등을 통해 정보 격차를 해소합니다.'
					},
					{
						title: '지능형 데이터 분석',
						description:
							'기업과 조직이 보유한 데이터를 AI로 분석하여 의미 있는 인사이트를 도출하고, 데이터 기반의 현명한 의사결정을 내릴 수 있도록 지원하여 비즈니스 성장을 돕습니다.'
					}
				]
			}
		},
		en: {
			title: 'EpsilonDelta AI',
			description:
				"We aim to resolve inconveniences in people's daily lives through AI technology, providing a convenient and equal experience for all.",
			hero: {
				title: 'Welcome to EPSILONDELTA AI',
				subtitle:
					"Solving the world's inconveniences with AI technology and creating a better tomorrow."
			},
			about: {
				title: 'Our Vision',
				content: [
					'We focus on solving various inconveniences people experience in their daily lives by utilizing AI technology. What is natural for some can be a significant barrier for others. We strive to bridge this gap in information and experience through technology, creating a world where everyone can enjoy equal opportunities.',
					'Based on the latest AI technologies such as deep learning, natural language processing, and computer vision, we develop intuitive and highly accessible solutions for all users, including the socially vulnerable. Our goal is to contribute to creating a warmer and more inclusive society by ensuring that everyone can enjoy the benefits of technology.'
				]
			},
			services: {
				title: 'AI Solutions',
				items: [
					{
						title: 'Custom AI Agents',
						description:
							"We develop intelligent AI agents tailored to individual users' needs and situations, maximizing daily efficiency by automating complex tasks and providing personalized services."
					},
					{
						title: 'AI-Powered Accessibility Solutions',
						description:
							'We provide innovative accessibility solutions using AI for users with physical limitations, such as visual or hearing impairments, bridging the information gap through features like speech recognition, image description, and text summarization.'
					},
					{
						title: 'Intelligent Data Analysis',
						description:
							'We help businesses grow by analyzing their data with AI to derive meaningful insights and support smart, data-driven decision-making.'
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
							<Accessibility class="h-6 w-6 text-green-600 dark:text-green-400" />
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
							<BarChartBig class="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
