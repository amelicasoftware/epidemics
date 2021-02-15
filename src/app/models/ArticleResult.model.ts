import { Filter } from './Filter.model';
import { Article } from './Article.model';
export interface ArticleResult {
    filtros: Array<Filter>;
    resultados: Array<Article>;
    totalResultados: number;
}
