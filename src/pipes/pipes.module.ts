import { NgModule } from '@angular/core';
import { FirstLetterUpperCasePipe } from './first-letter-upper-case/first-letter-upper-case';
import { AllLetterUpperCasePipe } from './all-letter-upper-case/all-letter-upper-case';
import { FilterByCategoryPipe } from './filter-by-category/filter-by-category';
import { SearchPipe } from './search/search';
import { CurrencyPipe } from './currency/currency';
@NgModule({
	declarations: [FirstLetterUpperCasePipe,
    AllLetterUpperCasePipe,
    FilterByCategoryPipe,
    SearchPipe,
    CurrencyPipe],
	imports: [],
	exports: [FirstLetterUpperCasePipe,
    AllLetterUpperCasePipe,
    FilterByCategoryPipe,
    SearchPipe,
    CurrencyPipe]
})
export class PipesModule {}
