import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-20 gradient-soft border-b border-border">
      <div className="container-px mx-auto max-w-5xl text-center">
        <Reveal>
          {eyebrow && (
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
