const express =  require ('express');
const router = express.Router();
const Product = require('../models/Products')



//get
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find();
        res.render('products/list.ejs', {
            title: 'Products',
            products,
            server_url: req.server_url,
        });
    } catch (error) {
        next(error)
    }

});

router.get('/', (req, res, next)=>{
    res.render('products/list.ejs', {
        title: 'Products',
        server_url: req.server_url,
    });
});

router.get('/create', (req, res, next)=>{
    res.render('products/create.ejs', {
        title: 'create new Products',
        server_url: req.server_url,
    });
});

router.post('/create', async (req, res, next)=>{
    try{
        const product = await Product.create(req.body);
        res.redirect('/product');
        console.log('/product')
    } catch (error) {
        next(error)
    }
    
});


//edit
router.get('/edit/:id', async (req, res, next)=>{
    try{
        const id = req.params.id;
        const products = await Product.findById({_id:id})
        res.render('products/edit.ejs', {
            title: 'Edit Product',
            products,
            server_url: req.server_url,
        });
    }catch(error){
        next(error)
    }
});

router.patch('/edit', async(req, res, next)=>{
    try{
        console.log(req.body.productId)
        const product = await Product.findByIdAndUpdate(
            {_id: req.body.productId},
            req.body,
            {
                new: true
            });
            res.redirect(`/products/${product._id}`)
    }catch(error){
        next(error)
    }
})

//delete
router.delete('/delete', (req, res, next)=>{
    res.redirect('/products', {
        server_url: req.server_url,
    })
});

//single product
router.get('/:id', async (req, res, next)=>{
    try{
        const id = req.params.id;
        const product = await Product.findById({_id: id});
        res.render('products/single', {
            title: 'Edit product',
            product,
            server_url: req.server_url,

        });
    }catch(error){
        next(error);
    }
})



module.exports = router;
