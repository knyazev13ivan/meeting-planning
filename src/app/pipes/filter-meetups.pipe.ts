import { Pipe, PipeTransform } from '@angular/core';
import { IMeetupItem } from '../services/meetup-list.service';
import { ISearch } from '../components/search/search.component';

@Pipe({
  name: 'filterMeetups'
})
export class FilterMeetupsPipe implements PipeTransform {

  transform(meetups: IMeetupItem[], searchState: ISearch): IMeetupItem[] {
    return meetups.filter(meetup => meetup[searchState.type].includes(searchState.searchValue));
  }

}
