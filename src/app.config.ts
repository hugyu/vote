export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/login',
    'pages/admin/admin'
  ],
  subPackages: [
    {
      "root": "package",
      "pages": [
        'page1/admin/admin',
      ],
      "independent": true
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  
})
