import { certificates } from "@/data/certificates";

export default function CertificateSection() {
  return (
    <section className="container-custom py-24">

      <h1 className="text-5xl font-bold mb-12">
        Certificates
      </h1>

      <div className="grid gap-6">

        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="glass-card p-6"
          >
            <h2 className="text-2xl font-semibold">
              {certificate.title}
            </h2>

            <p className="text-muted mt-2">
              {certificate.issuer}
            </p>

            <p className="text-blue-400 mt-4">
              {certificate.year}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}