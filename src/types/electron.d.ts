export {};

declare global {
  interface Window {
    electronAPI: {
      toggleAlwaysOnTop: (shouldBeOnTop: boolean) => Promise<boolean>;
      getAlwaysOnTop: () => Promise<boolean>;
    };
  }
}
