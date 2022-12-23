import { Pipe, PipeTransform } from '@angular/core';
import { IMeetup, ISearch } from '../interfaces';

@Pipe({
  name: 'filterMeetups',
})
export class FilterMeetupsPipe implements PipeTransform {
  transform(meetups: IMeetup[], searchState: ISearch): IMeetup[] {
    if (searchState.searchValue.length === 0) return meetups;

    if (searchState.type === 'fio') {
      return meetups
        .slice(0)
        .filter((meetup) => meetup.owner.fio.includes(searchState.searchValue));
    } else {
      return meetups.slice(0).filter((meetup): any => {
        if (searchState.type !== 'fio')
          return meetup[searchState.type].includes(searchState.searchValue);
      });
    }
  }
}
