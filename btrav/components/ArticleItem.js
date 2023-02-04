import Link from 'next/link';
import articleStyles from '../styles/Article.module.scss';

const ArticleItem = ({ article }) => {
  return (
    <div>
      <Link className={articleStyles.card} href={`/article/${article.id}`}>
        <h3>{article.title} &rarr; </h3>
        <p>{article.body}</p>
      </Link>
    </div>
  );
};

export default ArticleItem;
