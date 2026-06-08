import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">

      <div className="container-custom py-12">

        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div>
            <h3 className="text-xl font-bold">
              {profile.name}
            </h3>

            <p className="text-muted mt-2">
              Computer Vision • Robotics • AI Systems
            </p>
          </div>

          <div className="text-muted">
            © 2026 Parth Bhirwandekar
          </div>

        </div>

      </div>

    </footer>
  );
}