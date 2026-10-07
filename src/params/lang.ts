import type { ParamMatcher } from '@sveltejs/kit';
import { isLang } from '$lib/lang';

export const match: ParamMatcher = (param) => isLang(param);
