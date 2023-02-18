import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

export const locale = 'pt-br';

export const dateOutputFormat = 'DD/MM/YYYY';

export const datepickerConfig: Partial<BsDatepickerConfig> = {
    dateInputFormat: 'DD/MM/YYYY',
    containerClass: 'theme-dark-blue',
    showWeekNumbers: false
};
