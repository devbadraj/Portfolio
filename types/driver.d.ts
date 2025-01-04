declare module "driver.js" {
    interface PopoverOptions {
        title?: string;
        description?: string;
        position?: string;
        opacity?: number;
    }

    interface HighlightOptions {
        element: string;
        popover: PopoverOptions;
    }

    interface DriverInstance {
        highlight(options: HighlightOptions): void;
    }

    interface DriverOptions {
        animate?: boolean;
        popoverOptions?: {
            opacity?: number;
        };
        padding?: number;
    }

    export function driver(options: DriverOptions): DriverInstance;
}