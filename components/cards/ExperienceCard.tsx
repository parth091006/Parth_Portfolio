interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
}

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  description,
}: ExperienceCardProps) {
  return (
    <div className="glass-card p-6">

      <h3 className="text-xl font-semibold">
        {company}
      </h3>

      <p className="text-primary mt-2">
        {role}
      </p>

      <p className="text-sm text-muted mt-1">
        {duration} • {location}
      </p>

      <p className="mt-4 text-muted">
        {description}
      </p>

    </div>
  );
}