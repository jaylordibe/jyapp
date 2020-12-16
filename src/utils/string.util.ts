export class StringUtil {

    private static FIRST_OCCURRENCE = 'first';
    private static LAST_OCCURRENCE = 'last';

    /**
     * Get text before separator.
     * @param text - string to search in
     * @param separator - text separator
     * @param occurrence - occurrence of the separator in the text (first or last)
     */
    public static substringBefore(text: string, separator: string, occurrence = this.FIRST_OCCURRENCE): string {
        let position = occurrence === this.FIRST_OCCURRENCE ? text.indexOf(separator) : text.lastIndexOf(separator);
        const length = (text.length - this.substringAfter(text, separator).length) - 1;

        return text.substr(position, length);
    }

    public static substringBetween(text: string, separator: string): string {
        return '';
    }

    /**
     * Get text after separator.
     * @param text - string to search in
     * @param separator - text separator
     * @param occurrence - occurrence of the separator in the text (first or last)
     */
    public static substringAfter(text: string, separator: string, occurrence = this.FIRST_OCCURRENCE): string {
        let position = occurrence === this.FIRST_OCCURRENCE ? text.indexOf(separator) : text.lastIndexOf(separator);
        return text.substr(position + 1);
    }
}
