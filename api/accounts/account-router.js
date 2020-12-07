const express = require('express');
const router = express.Router();
const Account = require('./account-model')

router.get('/', (req, res)=>{
    Account.getAll()
        .then(accounts=>{
            res.status(200).json(accounts)
        })
        .catch(error=>{
            res.status(500).json({errorMessage: error.message})
        })
})

router.get("/:id", (req, res)=>{
    const {id} = req.params
    Account.getById(id)
        .then(account=>{
            res.status(200).json(account)
        })
        .catch(error=>{
            res.status(500).json({errorMessage: error.message})
        })
})

router.post("/", (req, res)=>{
    const entry = req.body
    Account.create(entry)
        .then(account=>{
            res.status(200).json(account)
        })
        .catch(error=>{
            res.status(500).json({errorMessage: error.message})
        })
})
router.put("/:id", (req, res)=>{
    const {id} = req.params
    const changes = req.body

    Account.update(id, changes)
        .then(account=>{
            res.status(200).json(account)
        })
        .catch(error=>{
            res.status(500).json({errorMessage: error.message})
        })
})

router.delete("/:id", (req, res)=>{
    const {id} = req.params
    Account.delete(id)
        .then(account=>{
            res.status(200).json({ message: `account with id ${id} was deleted`})
        })
        .catch(error=>{
            res.status(500).json({errorMessage: error.message})
        })
})

module.exports = router;