import { NgModule } from '@angular/core';
import { FirstLetterUpperCasePipe } from './first-letter-upper-case/first-letter-upper-case';
import { AllLetterUpperCasePipe } from './all-letter-upper-case/all-letter-upper-case';
import { FilterByCategoryPipe } from './filter-by-category/filter-by-category';
@NgModule({
	declarations: [FirstLetterUpperCasePipe,
    AllLetterUpperCasePipe,
    FilterByCategoryPipe],
	imports: [],
	exports: [FirstLetterUpperCasePipe,
    AllLetterUpperCasePipe,
    FilterByCategoryPipe]
})
export class PipesModule {}
