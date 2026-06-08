import { achievements } from "@/data/achievements";

export default function AchievementSection() {
  return (
    <section className="container-custom py-24">

      <h1 className="text-5xl font-bold mb-12">
        Achievements
      </h1>

      <div className="grid gap-6">

        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-center mb-4">

              <h2 className="text-2xl font-semibold">
                {achievement.title}
              </h2>

              <span className="text-blue-400">
                {achievement.year}
              </span>

            </div>

            <p className="text-muted">
              {achievement.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}