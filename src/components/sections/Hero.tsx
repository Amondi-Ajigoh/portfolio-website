import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-8 text-center">

        <div className="space-y-4">
          <h1 className="text-6xl font-bold">
            Rosalyn Amondi Ajigoh
          </h1>

          <h2 className="text-2xl">
            Full Stack Software Engineer
          </h2>

          <p className="max-w-2xl text-lg">
            I build scalable web applications,
            cloud-native systems,
            enterprise software,
            and modern digital experiences.
          </p>
        </div>

        <div className="flex gap-4">
          <Button>
            View Projects
          </Button>

          <Button>
            Download CV
          </Button>
        </div>

      </div>
    </Section>
  );
}