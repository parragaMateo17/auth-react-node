const {Router} = require('express')

const router = Router()

router.get('/', (req, res)=>{
    res.send('signup')
})

module.exports = router