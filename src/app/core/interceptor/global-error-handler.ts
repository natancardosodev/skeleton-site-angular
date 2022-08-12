import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        const scriptJSFailed = /Failed to load module script/;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        if (chunkFailedMessage.test(error.message) || scriptJSFailed.test(error.message)) {
            window.location.reload();
        }
    }
}
