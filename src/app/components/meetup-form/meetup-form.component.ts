import {
  ChangeDetectionStrategy,
  Component,
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
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ICreatedMeetupDto } from 'src/app/interfaces';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupFormComponent implements OnInit, OnChanges {
  constructor(private fb: FormBuilder, private validation: ValidationService) {}

  ngOnInit(): void {
    this.initForm();
  }
  
  @Input() isCreateMode: boolean = false;
  @Input() meetupForEdit?: ICreatedMeetupDto | null;
  
  ngOnChanges(): void {}

  meetupForm!: FormGroup<{
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    date: FormControl<Date | null>;
    time: FormControl<Date | null>;
    duration: FormControl<number | null>;
    location: FormControl<string | null>;
    target_audience: FormControl<string | null>;
    need_to_know: FormControl<string | null>;
    will_happen: FormControl<string | null>;
    reason_to_come: FormControl<string | null>;
  }>;

  asyncValidator(control: FormControl): Observable<ValidationErrors> {
    return this.validation.validateName(control.value);
  }

  initForm() {
    this.meetupForm = this.fb.group({
      name: [
        this.meetupForEdit?.name || 'supertest',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
          // this.asyncValidator.bind(this)
        ],
      ],
      description: [
        this.meetupForEdit?.description || 'test',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      date: [
        this.meetupForEdit?.time || null,
        [
          Validators.required,
          // Validators.pattern(/^[0-9]*[.]*[0-9]*[.]?[0-9]+$/),
        ],
      ],
      time: [
        this.meetupForEdit?.time || null,
        [
          Validators.required,
          // Validators.pattern(/^[0-9]*[.]*[0-9]*[.]?[0-9]+$/),
        ],
      ],
      duration: [
        this.meetupForEdit?.duration || 90,
        [Validators.required, Validators.pattern(/^\d+$/)],
      ],
      location: [
        this.meetupForEdit?.location || 'test',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      target_audience: [
        this.meetupForEdit?.target_audience || 'test',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      need_to_know: [
        this.meetupForEdit?.need_to_know || 'test',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      will_happen: [
        this.meetupForEdit?.will_happen || 'test',
        [
          Validators.required,
          Validators.pattern(/^[ёЁА-яA-z\s\d\.\,\:\?\!\#\-\@\(\\'\")]+$/),
        ],
      ],
      reason_to_come: [
        this.meetupForEdit?.reason_to_come || 'test',
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
      name: this.meetupForm.value?.name || '',
      description: this.meetupForm.value?.description || '',
      time: this.meetupForm.value?.date
        ? new Date(
            `${this.meetupForm.value?.date}T${this.meetupForm.value?.time}:00.000Z`
          )
        : new Date(),
      duration: this.meetupForm.value?.duration || 0,
      location: this.meetupForm.value?.location || '',
      target_audience: this.meetupForm.value?.target_audience || '',
      need_to_know: this.meetupForm.value?.need_to_know || '',
      will_happen: this.meetupForm.value?.will_happen || '',
      reason_to_come: this.meetupForm.value?.reason_to_come || '',
    };

    console.log('meetupForEdit: ', this.meetupForEdit);
    console.log('meetup from form: ', meetup);

    if (this.meetupForEdit) {
      this.handleClickChange.emit(meetup);
    } else {
      this.handleClickCreate.emit(meetup);
    }

    this.isCreateMode = false;
  }
}
