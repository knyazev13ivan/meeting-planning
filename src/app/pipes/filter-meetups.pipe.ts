import { Pipe, PipeTransform } from '@angular/core';
import { ISearch } from '../components/search/search.component';
import { IMeetup } from '../interfaces';

@Pipe({
  name: 'filterMeetups',
})
export class FilterMeetupsPipe implements PipeTransform {
  transform(meetups: IMeetup[], searchState: ISearch): IMeetup[] {
    if (searchState.searchValue.length === 0) return meetups;

    return meetups

    // return meetups.slice(0).filter((meetup) => {
      // return meetup[searchState.type].includes(searchState.searchValue);
    // });
  }
}
