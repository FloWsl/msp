interface LegalLayoutProps {
  children: React.ReactNode
  title: string
  lastUpdated: string
}

export const LegalLayout = ({
  children,
  title,
  lastUpdated,
}: LegalLayoutProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-secondary">{title}</h1>
        <p className="mt-2 text-sm text-secondary/70">
          Dernière mise à jour : {lastUpdated}
        </p>
        <div className="prose prose-secondary mt-8 max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}
