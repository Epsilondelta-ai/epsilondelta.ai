export const langs = ['ko', 'en'] as const;
export type Lang = (typeof langs)[number];

export const isLang = (value: string): value is Lang =>
	(langs as readonly string[]).includes(value);
