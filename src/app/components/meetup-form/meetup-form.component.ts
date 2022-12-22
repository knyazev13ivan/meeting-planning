import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ICreatedMeetupDto, IMeetup } from 'src/app/interfaces';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupFormComponent implements OnInit, OnChanges {
  constructor(private fb: FormBuilder) {}

  @Input() isCreateMode: boolean = false;
  @Input() meetupForEdit?: ICreatedMeetupDto | null;

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.initForm();
  }

  meetupForm!: FormGroup<{
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    date: FormControl<string | null>;
    time: FormControl<string | null>;
    duration: FormControl<number | null>;
    location: FormControl<string | null>;
    target_audience: FormControl<string | null>;
    need_to_know: FormControl<string | null>;
    will_happen: FormControl<string | null>;
    reason_to_come: FormControl<string | null>;
  }>;

  initForm() {
    this.meetupForm = this.fb.group({
      name: [
        this.meetupForEdit?.name || '',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      description: [
        this.meetupForEdit?.description || '',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      date: [
        this.meetupForEdit?.time?.slice(0, 10) || '',
        [Validators.required, Validators.pattern(/[^д]|[^м]|[^г]/g)],
      ],
      time: [
        this.meetupForEdit?.time?.slice(11, 16) || '',
        [Validators.required, Validators.pattern(/^\d+:\d+$/)],
      ],
      duration: [
        this.meetupForEdit?.duration || 0,
        [Validators.required, Validators.pattern(/^\d+$/)],
      ],
      location: [
        this.meetupForEdit?.location || '',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      target_audience: [
        this.meetupForEdit?.target_audience || '',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      need_to_know: [
        this.meetupForEdit?.need_to_know || '',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      will_happen: [
        this.meetupForEdit?.will_happen || '',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      reason_to_come: [
        this.meetupForEdit?.reason_to_come || '',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
    });
  }

  @Output()
  public handleClickCreate = new EventEmitter();

  @Output()
  public handleClickChange = new EventEmitter();

  createNewMeetup() {
    const meetup: ICreatedMeetupDto = {
      name: this.meetupForm.value.name || '',
      description: this.meetupForm.value.description || '',
      time: this.meetupForm.value.date
        ? `${this.meetupForm.value.date}T${this.meetupForm.value.time}:00.000Z`
        : '',
      duration: this.meetupForm.value.duration || 0,
      location: this.meetupForm.value.location || '',
      target_audience: this.meetupForm.value.target_audience || '',
      need_to_know: this.meetupForm.value.need_to_know || '',
      will_happen: this.meetupForm.value.will_happen || '',
      reason_to_come: this.meetupForm.value.reason_to_come || '',
    };

    console.log(meetup);

    if (this.meetupForEdit) {
      this.handleClickChange.emit(meetup);
    } else {
      this.handleClickCreate.emit(meetup);
    }

    this.isCreateMode = false;
  }
}
