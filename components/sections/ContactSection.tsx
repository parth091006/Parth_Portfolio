import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section className="container-custom py-24">

      <h1 className="text-5xl font-bold mb-12">
        Contact
      </h1>

      <div className="glass-card p-8 max-w-3xl">

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              Email
            </h3>

            <p className="text-muted mt-2">
              {profile.email}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Location
            </h3>

            <p className="text-muted mt-2">
              {profile.location}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              GitHub
            </h3>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Visit GitHub
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              LinkedIn
            </h3>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              Visit LinkedIn
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}