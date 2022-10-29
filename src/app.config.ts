export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/login',
    'pages/admin/admin'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  usingComponents: {
    // 'custom-wrapper': '/custom-wrapper',
    // 'tmpl_10_12':'/tmpl_10_12',
    }
})
