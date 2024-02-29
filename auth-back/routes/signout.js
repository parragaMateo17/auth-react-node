const {Router} = require('express')

const router = Router()

router.get('/', (req, res)=>{
    res.send('signout')
})

module.exports = router