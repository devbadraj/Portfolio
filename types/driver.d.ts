declare module 'driver.js' {
  interface DriverOptions {
    animate?: boolean;
    opacity?: number;
    padding?: number;
    allowClose?: boolean;
  }

  interface HighlightOptions {
    element: string | HTMLElement;
    popover?: {
      title?: string;
      description?: string;
      position?: string;
    };
  }

  class Driver {
    constructor(options?: DriverOptions);
    highlight(options: HighlightOptions): void;
    reset(): void;
  }

  export default Driver;
}