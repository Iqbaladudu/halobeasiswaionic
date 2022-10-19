import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'halobeasiswaionic',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    "keyboard": {
      resizeOnFullScreen: true,
    }
  }
};

export default config;
