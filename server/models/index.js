module.exports = (app) => {
    // path:路径
    // callback:回调
    app.use('/mineral', require('./mineral_water'))
   app.use('/yoghurt',require('./yoghurt'))
   app.use('/drinks',require('./drinks'))
   app.use('/pure_milk',require('./pure_milk'))
    
}