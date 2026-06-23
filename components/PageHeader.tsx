interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        {eyebrow && (
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl text-text-primary mb-4 max-w-2xl">
          {title}
        </h1>
        {description && (
          <p className="text-text-secondary leading-relaxed max-w-xl text-[15px]">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
