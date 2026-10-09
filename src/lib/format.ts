// Small formatting helpers shared by pages.
import { SITE } from '../config';

/** Turns '2019-08' into 'Aug 2019' (in the site's locale), and 'present' into 'Present'. */
export function formatYearMonth(value: string): string {
  if (value === 'present') return 'Present';
  const [year = 0, month = 1] = value.split('-').map(Number);
  // UTC on both sides, so the month can't shift in time zones behind UTC.
  return new Intl.DateTimeFormat(SITE.locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1)));
}
