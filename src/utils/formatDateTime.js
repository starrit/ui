import moment from 'moment';

export function formatDate(date) {
  return moment.unix(date).utc().format('MM.DD.YY');
}

export function formatTime(date) {
  return moment.unix(date).utc().format('h:mma');
}

export function formatDateTime(date) {
  return moment.unix(date).utc().format('MMMM DD, YYYY [at] h:mma');
}

export function formatDateTo(date, format = 'MMMM DD, YYYY') {
  return moment.unix(date).utc().format(format);
};

export function formatDuration(date) {
  return moment.unix(date).utc().format('hh:mm');
}
