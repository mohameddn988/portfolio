import Image from "next/image";

const skills = [
	{
		label: "UI/UX Design",
		color: "bg-[#9C8BFF]",
		position: "left-[-80px] top-[120px]",
	},
	{
		label: "UX Research",
		color: "bg-[#22D3C5]",
		position: "right-[-110px] top-[60px]",
	},
	{
		label: "Framer Designer",
		color: "bg-[#FF7AC8]",
		position: "right-[-95px] bottom-[90px]",
	},
	{
		label: "Interaction",
		color: "bg-[#FFD66B]",
		position: "left-[-70px] bottom-[80px]",
	},
];

export default function SkillsSection() {
	return (
    <section className="relative flex flex-col items-center justify-center pb-16 pt-8">
      <div className="relative flex items-center justify-center">
        <div className="relative h-130 w-100 sm:h-155 sm:w-120">
          <div className="absolute inset-0 rounded-[36px] bg-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
          <div className="relative h-full w-full overflow-hidden rounded-[36px]">
            <Image
              src="/Myself.png"
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {skills.map((skill) => (
            <div
              key={skill.label}
              className={`absolute ${skill.position} flex items-center gap-2`}
            >
              <span
                className={`h-3 w-3 rotate-45 rounded-[3px] ${skill.color} shadow-[0_6px_18px_rgba(0,0,0,0.35)]`}
              />
              <span
                className={`rounded-full px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] ${skill.color}`}
              >
                {skill.label}
              </span>
            </div>
          ))}

          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <span className="h-3 w-3 rotate-45 rounded-[3px] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.35)]" />
            <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
              Yefi Chlara
            </span>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-full bg-[#3A3A3A] px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0ACF83]/20 text-xs font-semibold text-white">
              F
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A259FF]/20 text-xs font-semibold text-white">
              PS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
