import { Pipe, PipeTransform } from '@angular/core';
import { IMeetup, ISearch } from '../interfaces';

@Pipe({
  name: 'filterMeetups',
})
export class FilterMeetupsPipe implements PipeTransform {
  transform(meetups: IMeetup[], searchState: ISearch): IMeetup[] {
    // if (searchState.searchValue.length === 0) return meetups;

    // return meetups
    return meetups.slice(0).sort((a, b) => b.id- +a.id);

    // return meetups.slice(0).filter((meetup) => {
    // return meetup[searchState.type].includes(searchState.searchValue);
    // });
  }
}
