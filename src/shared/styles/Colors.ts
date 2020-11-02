export type SkillHoverColors = {
	icon: string;
	text?: string;
	bg?: string;
};

export type Skill = {
	[keys: string]: SkillHoverColors;
};

function asSkills<T extends Skill>(arg: T): T {
	return arg;
}

const Skills = asSkills({
	react: { icon: "#61dafb", bg: "#282c34" },
	dotnet: { icon: "#ffffff", bg: "#621ee5" },
	mssql: { icon: "#e12a2e", text: "#231f20", bg: "#ffffff" },
	angular: { icon: "#da172e", text: "#2472cf", bg: "#ffffff" },
	typescript: { icon: "#007acd", text: "#2472cf", bg: "#ffffff" },
	javascript: { icon: "#efd81d", text: "#ffffff", bg: "#000000" },
	ingles: { icon: "#c9072a", text: "#001b69", bg: "#ffffff" },
});

export const Colors = {
	branco: "#ffffff",
	preto: "#000000",
	azul: "#2d4159",
	laranja: "#ff715b",
	laranja2: "#ff4528",
	laranjaClaro: "#ffc8bf",
	cinza1: "#f7fff6",
	cinza2: "#acbdba",
	cinza2_1: "#d7dfdd",
	cinza3: "#77878b",
	cinza3_1: "#939fa2",

	skills: Skills,
};
