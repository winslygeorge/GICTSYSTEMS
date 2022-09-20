const { default: axios } = require('axios')
const express = require('express')
const {CleanData} = require('./../js/clean')


const router = express.Router()

router.get('/', (req, res)=>{

    res.render('home')
})

router.post('/post/gict', (req, res)=>{

    var mobTel = lname = mobTelErr = lnameErr =code= null;

    console.log(req.body.names)

    var details = {
            fullnames : CleanData(req.body.names),
            email : CleanData(req.body.email),
            phone : CleanData(req.body.phone),
            address : CleanData(req.body.address)
        }


            if(details.fullnames.match(/^[a-zA-Z\s]+$/)){

                lname = details.names;
        
            }else{
        
                lnameErr = "Full Names : required to be letters and space only"

                code = 101
        
            }
  /// Phone number validation i.e +2547, 020, 071234              
            if(details.phone.match(/^[+]?[0-9]+$/) && details.phone.length >= 9 && details.phone.length <= 14){

                mobTel = details.phone       

            }else{

                mobTelErr = "Phone Number : Expected  numbers and + only or you entered an invalid number"

                code = 101
            }

           if(code === 101 ){

            res.send({mobTelErr : mobTelErr, lnameErr : lnameErr, code : code})

           }else{

            axios.post('http://developers.gictsystems.com/api/dummy/submit/', details).then((result)=>{

            if(result.status === 200){

                res.send({code : 200})
            }else{

                res.send({code : 404})
            }

            }).catch(e =>{ res.send({code : 404})})
            
    
           }
})

router.get('/gict/get', (req, res)=>{

    axios.get('http://developers.gictsystems.com/api/dummy/items/', {headers:{'Authorization' : 'Bearer ALDJAK23423JKSLAJAF23423J23SAD3'}}).then((results)=>{


    res.send(results.data)
    }).catch((e)=>{console.log(e)
    
        res.send([{code : 101}])
    })

})



module.exports = router