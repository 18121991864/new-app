import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  history: {
    type: 'hash'
  },
  routes: [
    { path: '/', redirect: '/featured-projects' },
    { path: '/featured-projects', component: '@/pages/FeaturedProjects' },
    { path: '/writing', component: '@/pages/Writing' },
  ],
  fastRefresh: {},
  title: 'Jump Crypto',
  // links: [
  //   // { rel: 'icon', href: '<%= PUBLIC_PATH %>static/favico.png' },
  // ],
});
