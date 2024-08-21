import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'pnpm',
  //useModel相关
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
  ],
  initialState: {},
  model: {},
});
