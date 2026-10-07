interface ProgramSectionProps {
  workshopUrl: string;
  speakersUrl: string;
  scheduleUrl: string;
  benefitsUrl: string;
}

const buttonClass =
  "program-card font-codec rounded-none w-full text-xs uppercase text-center";

export default function ProgramSection({
  workshopUrl,
  speakersUrl,
  scheduleUrl,
  benefitsUrl,
}: ProgramSectionProps) {
  const documents = [
    { href: workshopUrl, label: "WORKSHOPS" },
    { href: speakersUrl, label: "ORADORES" },
    { href: scheduleUrl, label: "CRONOGRAMA" },
    { href: benefitsUrl, label: "BENEFICIOS" },
  ];

  return (
    <section id="programa" className="program-section text-white py-20 px-6">
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {documents.map((document) => (
          <a
            key={document.label}
            href={document.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            {document.label}
          </a>
        ))}
      </div>
    </section>
  );
}
