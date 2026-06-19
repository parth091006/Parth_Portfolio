import { achievements } from "@/data/achievements";

export default function AchievementSection() {
  return (
    <section className="bg-[#0D1B2E] py-24">
      <div className="container-custom">

        <p className="section-label-bracket mb-3">{"// ACHIEVEMENTS"}</p>
        <h1 className="section-title font-heading mb-12">
          <span className="gradient-text">Achievements</span>
        </h1>

        <div className="grid gap-6">

          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="glass-card p-6"
            >
              <div className="flex justify-between items-center mb-4">

                <h2 className="font-heading text-2xl font-semibold text-[#E2F4FF]">
                  {achievement.title}
                </h2>

                <span className="text-[#00D4FF] font-mono text-sm">
                  {achievement.year}
                </span>

              </div>

              <p className="text-[#5B7A91]">
                {achievement.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
