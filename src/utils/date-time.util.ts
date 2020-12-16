import DateTime from 'luxon/src/datetime.js';
import {DataTypeUtil} from './data-type.util';

export class DateTimeUtil {

    private static FORMAT_TIMESTAMP = 'X';
    private static FORMAT_DATE = 'YYYY-MM-DD';
    private static FORMAT_DATETIME = 'YYYY-MM-DD hh:mm';
    private static FORMAT_DATE_READABLE = 'MMMM D, YYYY';
    private static FORMAT_DATETIME_READABLE = 'MMMM D, YYYY hh:mm';
    private static FORMAT_MONTH = 'MMMM';

    /**
     * Get current date.
     * @param format - output format
     */
    public static getCurrentDate(format = this.FORMAT_DATE): string {
        return DateTime.local().toFormat(format);
    }

    /**
     * Get current date and time.
     */
    public static getCurrentDateTime(): string {
        return DateTime.local().toFormat(this.FORMAT_DATETIME);
    }

    /**
     * Get current timestamp.
     */
    public static getCurrentTimestamp(): number {
        return Number(DateTime.toFormat(this.FORMAT_TIMESTAMP));
    }

    /**
     * Convert date to the specified format.
     * @param date - input date to be converted
     * @param format - date format that will be used for conversion
     * If format is not specified, YYYY-MM-DD format will be used.
     */
    public static format(date: string | number | Date, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).toFormat(format);
    }

    /**
     * Convert date to timestamp.
     * @param date - date string or Date object to be converted to timestamp
     */
    public static toTimestamp(date: string | Date): number {
        return Number(this.format(date, this.FORMAT_TIMESTAMP));
    }

    /**
     * Convert date string to moment date.
     * @param date - input date to be converted
     */
    public static toDateTime(date: string | number | Date | null): DateTime {
        let dateTime: DateTime;

        if (date === null) {
            dateTime = DateTime;
        } else if (DataTypeUtil.isNumber(date)) {
            dateTime = DateTime.fromSeconds(date);
        } else if (DataTypeUtil.isDate(date)) {
            dateTime = DateTime.fromJSDate(date);
        } else {
            dateTime = DateTime.fromFormat(date, this.FORMAT_DATETIME);
        }

        return dateTime;
    }

    /**
     * Check if the date is valid.
     * @param date - human readable date string to be converted to timestamp
     */
    public static isValid(date: string): boolean {
        return this.toDateTime(date).isValid;
    }

    /**
     * Check if start date is before end date.
     * @param startDate - human readable start date string
     * @param endDate - human readable end date string
     */
    public static isValidDateRange(startDate: string, endDate: string): boolean {
        return this.toDateTime(startDate) < this.toDateTime(endDate);
    }

    /**
     * Calculate number of days in between start and end date.
     * @param startDate - human readable start date string
     * @param endDate - human readable end date string
     */
    public static calculateNumberOfDaysInRange(startDate: string, endDate: string): number {
        const dateTimeStartDate = this.toDateTime(startDate);
        const dateTimeEndDate = this.toDateTime(endDate);

        return Math.abs(dateTimeStartDate.diff(dateTimeEndDate, 'days')) + 1;
    }

    /**
     * Get start of day.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getStartOfDay(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).startOf('day').toFormat(format);
    }

    /**
     * Get end of day.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getEndOfDay(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).endOf('day').toFormat(format);
    }

    /**
     * Get start of month.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getStartOfMonth(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).startOf('month').toFormat(format);
    }

    /**
     * Get end of month.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getEndOfMonth(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).endOf('month').toFormat(format);
    }

    /**
     * Get start of year.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getStartOfYear(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).startOf('year').toFormat(format);
    }

    /**
     * Get end of year.
     * @param date - input date to be converted
     * @param format - output format
     */
    public static getEndOfYear(date: string | number | Date | null, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).endOf('year').toFormat(format);
    }

    /**
     * Add days to the provided date.
     * @param date - moment date object
     * @param numberOfDays - number of days to be added
     * @param format - output format
     */
    public static addDays(date: string | number | Date | null, numberOfDays: number, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).plus({days: numberOfDays}).toFormat(format);
    }

    /**
     * Add months to the provided date.
     * @param date - moment date object
     * @param numberOfMonths - number of months to be added
     * @param format - output format
     */
    public static addMonths(date: string | number | Date | null, numberOfMonths: number, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).plus({months: numberOfMonths}).toFormat(format);
    }

    /**
     * Add years to the provided date.
     * @param date - moment date object
     * @param numberOfYears - number of years to be added
     * @param format - output format
     */
    public static addYears(date: string | number | Date | null, numberOfYears: number, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).plus({years: numberOfYears}).toFormat(format);
    }

    /**
     * Subtract days to the provided date.
     * @param date - moment date object
     * @param numberOfDays - number of days to be subtracted
     * @param format - output format
     */
    public static subtractDays(date: string | number | Date | null, numberOfDays: number, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).minus({days: numberOfDays}).toFormat(format);
    }

    /**
     * Subtract months to the provided date.
     * @param date - moment date object
     * @param numberOfMonths - number of months to be subtracted
     * @param format - output format
     */
    public static subtractMonths(date: string | number | Date | null, numberOfMonths: number, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).minus({months: numberOfMonths}).toFormat(format);
    }

    /**
     * Subtract years to the provided date.
     * @param date - moment date object
     * @param numberOfYears - number of years to be subtracted
     * @param format - output format
     */
    public static subtractYears(date: string | number | Date | null, numberOfYears: number, format = this.FORMAT_DATETIME): string {
        return this.toDateTime(date).minus({years: numberOfYears}).toFormat(format);
    }

    /**
     * Find earliest date in list of dates.
     * @param dates - array of moment dates
     */
    public static findEarliestDate(dates: string[]): string {
        let dateTimes: DateTime[] = [];

        dates.forEach(date => {
            dateTimes.push(this.toDateTime(date));
        });

        if (!dateTimes.length) {
            return '';
        }

        let earliestDateTime = dateTimes[0];

        dateTimes.forEach(dateTime => {
            earliestDateTime = (dateTime.isValid && dateTime < earliestDateTime) ? dateTime : earliestDateTime;
        });

        return earliestDateTime.toFormat(this.FORMAT_DATETIME);
    }

    /**
     * Find latest date in list of dates.
     * @param dates - array of moment dates
     */
    public static findLatestDate(dates: string[]): string {
        let dateTimes: DateTime[] = [];

        dates.forEach(date => {
            dateTimes.push(this.toDateTime(date));
        });

        if (!dateTimes.length) {
            return '';
        }

        let earliestDateTime = dateTimes[0];

        dateTimes.forEach(dateTime => {
            earliestDateTime = (dateTime.isValid && dateTime > earliestDateTime) ? dateTime : earliestDateTime;
        });

        return earliestDateTime.toFormat(this.FORMAT_DATETIME);
    }

    /**
     * Get current year.
     */
    public static getCurrentYear(): number {
        return DateTime.local().year;
    }

    /**
     * Get current month.
     */
    public static getCurrentMonth(): string {
        return DateTime.local().toFormat(this.FORMAT_MONTH);
    }

    /**
     * Get timezone.
     */
    public static getTimezone(): string {
        return DateTime.local().zoneName;
    }

    /**
     * Get list of years based on number of years from current year.
     * @param numberOfYearsFromCurrentYear - number of years to be added from the current year
     */
    public static getYears(numberOfYearsFromCurrentYear: number = 10): number[] {
        const years: number[] = [];
        const currentYear = this.getCurrentYear();

        for (let count = 0; count < numberOfYearsFromCurrentYear; count++) {
            years.push(currentYear + count);
        }

        return years;
    }

    /**
     * Get list of months.
     */
    public static getMonths(): string[] {
        return [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    }
}
