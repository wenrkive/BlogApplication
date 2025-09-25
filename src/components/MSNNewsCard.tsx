import { NewsArticle } from "../data/blogPosts";

interface MSNNewsCardProps {
  article: NewsArticle;
  onClick: (article: NewsArticle) => void;
  size?: 'small' | 'medium' | 'large';
  showImage?: boolean;
}

export function MSNNewsCard({ 
  article, 
  onClick, 
  size = 'medium', 
  showImage = true 
}: MSNNewsCardProps) {
  const handleClick = () => {
    onClick(article);
  };

  const sizeClasses = {
    small: {
      container: 'p-2',
      title: 'text-sm',
      summary: 'text-xs',
      image: 'h-16 w-20'
    },
    medium: {
      container: 'p-3',
      title: 'text-base',
      summary: 'text-sm',
      image: 'h-20 w-28'
    },
    large: {
      container: 'p-4',
      title: 'text-lg',
      summary: 'text-base',
      image: 'h-32 w-full'
    }
  };

  const classes = sizeClasses[size];

  return (
    <article 
      className={`bg-white border border-msn-border hover:border-msn-blue cursor-pointer transition-all duration-200 hover:shadow-sm ${classes.container}`}
      onClick={handleClick}
    >
      <div className={size === 'large' ? 'space-y-3' : 'flex space-x-3'}>
        {showImage && (
          <div className={size === 'large' ? 'w-full mb-3' : 'flex-shrink-0'}>
            <img
              src={article.imageUrl}
              alt={article.headline}
              className={`${classes.image} object-cover border border-gray-200`}
            />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          {article.isBreaking && (
            <div className="inline-block px-2 py-1 text-xs font-bold text-white bg-msn-red mb-2">
              BREAKING
            </div>
          )}
          
          <h3 className={`${classes.title} font-semibold text-foreground hover:text-msn-blue transition-colors line-clamp-2 mb-1`}>
            {article.headline}
          </h3>
          
          {size !== 'small' && (
            <p className={`${classes.summary} text-muted-foreground line-clamp-2 mb-2`}>
              {article.summary}
            </p>
          )}
          
          <div className="flex items-center justify-between text-xs text-msn-gray">
            <span className="font-medium">{article.source}</span>
            <span>{article.publishTime}</span>
          </div>
          
          {article.category && (
            <div className="mt-1">
              <span className="inline-block px-1 py-0.5 text-xs bg-msn-light-gray text-msn-gray">
                {article.category}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}