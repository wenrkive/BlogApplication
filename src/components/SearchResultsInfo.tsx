interface SearchResultsInfoProps {
  searchQuery: string;
  resultCount: number;
}

export function SearchResultsInfo({ searchQuery, resultCount }: SearchResultsInfoProps) {
  if (!searchQuery) return null;

  return (
    <div className="px-4 lg:px-6 mb-6">
      <p className="text-muted-foreground">
        Found <span className="text-primary font-medium">{resultCount}</span> article{resultCount !== 1 ? 's' : ''} 
        {searchQuery && ` for "${searchQuery}"`}
      </p>
    </div>
  );
}