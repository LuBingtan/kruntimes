import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "/tmp/kruntimes-dashboard-browser-results",
  projects: ["github", "stripe", "neumorphism"].map((name) => ({
    name,
    use: {
      storageState: {
        cookies: [],
        origins: [
          {
            origin: "http://127.0.0.1:4173",
            localStorage: [{ name: "kruntimes-dashboard-style", value: name }],
          },
        ],
      },
    },
  })),
  use: {
    baseURL: "http://127.0.0.1:4173",
    viewport: { width: 1600, height: 1000 },
  },
  webServer: {
    command: "npx vite preview --host 127.0.0.1 --port 4173 --strictPort",
    url: "http://127.0.0.1:4173/assets/",
  },
});
