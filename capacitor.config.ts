import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: "io.ionic.demo.pg.cap.ng",
  appName: "Photo Gallery Cap Ng",
  bundledWebRuntime: false,
  npmClient: "npm",
  webDir: "www",
  ios: {
    minVersion: "12.0"
  }
};

export default config;
