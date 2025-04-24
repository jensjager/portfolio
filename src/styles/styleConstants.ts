export const glowBoxShadowColor = 'rgba(255, 105, 105, 0.5)';
export const glowBoxShadowColorAccent = 'rgba(244, 185, 66, 0.5)';
export const glowBoxShadowColorDark = 'rgba(255, 105, 105, 0.2)';

export const getGlowBoxShadow = (color: string) =>
	[
		`0px 1px 1px ${color}`,
		`0px 2px 8px ${color}`,
		`0px 4px 8px ${color}`,
		`0px 4px 16px ${color}`,
	].join(', ');

export const getGlowBoxShadowInset = (color: string) =>
	[
		`inset 0px 1px 1px ${color}`,
		`inset 0px 2px 4px ${color}`,
		`inset 0px 4px 8px ${color}`,
		`inset 0px 8px 16px ${color}`,
	].join(', ');
