const multer = require("multer");
const Product = require("../models/Product");
const path = require("path");
const ApiError = require("../utils/apiError");

const storage = multer.diskStorage({
	destination: (
		req,
		file,
		callback,
	) => {
		callback(null, "uploads/product");
	},
	filename: (req, file, callback) => {
		callback(
			null,
			`${Date.now()}-${
				file.originalname
			}`,
		);
	},
});

const upload = multer({
	storage,
	limits: { filesize: 100000 },
	fileFilter: (req, file, callback) => {
		const extname = path
			.extname(file.originalname)
			.toLowerCase();
		if (
			extname === ".jpg" ||
			extname === ".png"
		) {
			return callback(null, true);
		}

		return callback(
			new ApiError(
				"file type not supported",
				400,
			),
			false,
		);
	},
}).single("file");

exports.createProduct = async (
	req,
	res,
	next,
) => {
  upload(req, res, async (err) => {
	try {
			if (err)
				next(new ApiError(err, 400));

			let data = {
				...req.body,
				product_img: req.file ? `uploads/product/${req.file.filename}` : 'uploads/product/default.jpg',
			};
      // res.send(data) used to send data directly to postman
      const product = await Product.create(data);
      res.status(200).json({
        status: 'success',
        data: product,
      });
    } catch (error) {
      next(error);
     }
		});

};

exports.getAllProduct = async (
	req,
	res,
	next,
) => {
	try {
		const product =
			await Product.find();
		res.status(200).json({
			status: "success",
			data: product,
		});
	} catch (error) {
		next(error);
	}
};

exports.getProductById = async (
	req,
	res,
	next,
) => {
	try {
		const { id } = req.params;
		const product =
			await Product.findById({
				_id: id,
			});

		res.status(200).json({
			status: "success",
			data: product,
		});
	} catch (error) {
		next(error);
	}
};

//TODO: create update method for db
//TODO: add feature updating product image
exports.updateProduct = async (
	req,
	res,
	next,
) => {
	try {
		const product =
			await Product.findByIdAndUpdate(
				{ _id: req.params.id },
				req.body,
				{ new: true },
			);
		res.status(200).json({
			status: "success",
			data: product,
		});
	} catch (error) {
		next(error);
	}
};

//TODO: create delete method for db
//TODO: delete the product image file with the deleted product
exports.deleteProduct = (
	req,
	res,
	next,
) => {
	res.status(200).json({
		status: "success",
		data: "deleted",
	});
};
