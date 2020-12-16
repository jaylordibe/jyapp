import {PageUtil} from './page.util';

declare let VanillaToasts: any;

export class NotificationUtil {

    /**
     * Show toast notification.
     * @param message - message to be displayed in the toast notification.
     */
    public static show(message: string): void {
        PageUtil.hideActiveModal();
        VanillaToasts.create({
            title: '',
            text: message,
            type: 'info', // success, info, warning, error   / optional parameter
            // icon: '/assets/images/logo.png', // optional parameter
            timeout: 10000 // hide after 5000ms, // optional paremter
            // callback: function() { ... } // executed when toast is clicked / optional parameter
        });
    }

    /**
     * Show toast notification.
     * @param message - message to be displayed in the toast notification.
     */
    public static success(message: string): void {
        PageUtil.hideActiveModal();
        VanillaToasts.create({
            title: '',
            text: message,
            type: 'success', // success, info, warning, error   / optional parameter
            // icon: '/assets/images/logo.png', // optional parameter
            timeout: 10000 // hide after 5000ms, // optional paremter
            // callback: function() { ... } // executed when toast is clicked / optional parameter
        });
    }

    /**
     * Show toast notification.
     * @param message - message to be displayed in the toast notification.
     */
    public static error(message: string): void {
        PageUtil.hideActiveModal();
        VanillaToasts.create({
            title: '',
            text: message,
            type: 'error', // success, info, warning, error   / optional parameter
            // icon: '/assets/images/logo.png', // optional parameter
            timeout: 10000 // hide after 5000ms, // optional paremter
            // callback: function() { ... } // executed when toast is clicked / optional parameter
        });
    }

    /**
     * Show default toast notification.
     */
    public static default(): void {
        PageUtil.hideActiveModal();
        VanillaToasts.create({
            title: '',
            text: 'Can\'t connect to the server at the moment. Please check your internet connection and try again.',
            type: 'error', // success, info, warning, error   / optional parameter
            // icon: '/assets/images/logo.png', // optional parameter
            timeout: 10000 // hide after 5000ms, // optional paremter
            // callback: function() { ... } // executed when toast is clicked / optional parameter
        });
    }
}
