import Joi from "joi";
// import { Product } from "../model/Product";

const options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

export const categoryBodyValidation = (body: any) => {
  const schema = Joi.object({
    name: Joi.string().required().trim().messages({
      "any.required": "Please enter category name",
    }),
    order: Joi.number().required(),
    url: Joi.string(),
  });

  return schema.validate(body, options);
};

export const sliderBodyValidation = (body: any) => {
  const schema = Joi.object({
    title: Joi.string().required().trim().messages({
      "any.required": "Please enter title",
    }),
    link: Joi.string().required().messages({
      "any.required": "Please enter link",
    }),
    btn_name: Joi.string().required().messages({
      "any.required": "Please enter a button name",
    }),
    description: Joi.string().max(2000).required().messages({
      "any.required": "Please enter a description",
    }),
  });

  return schema.validate(body, options);
};

export const productBodyValidation = (body: any) => {
  const schema = Joi.object({
    name: Joi.string().required().trim().messages({
      "any.required": "Please enter product name",
    }),
    description: Joi.string().required().messages({
      "any.required": "Please enter product description",
    }),
    // highlights: Joi.array().items(Joi.string().required()).required(),
    // specifications: Joi.array()
    //   .items(
    //     Joi.object({
    //       title: Joi.string().required(),
    //       description: Joi.string().required(),
    //     }).required()
    //   )
    //   .required(),
    price: Joi.number().required().messages({
      "any.required": "Please enter product price",
    }),
    offer_price: Joi.number().required().messages({
      "any.required": "Please enter cutted price",
    }),
    images: Joi.string(),
    // images: Joi.array()
    //   .items(
    //     Joi.object({
    //       public_id: Joi.string().required,
    //       url: Joi.string().required(),
    //     }).required()
    //   )
    //   .required(),
    // brand: Joi.object({
    //   name: Joi.string().required(),
    //   logo: Joi.object({
    //     public_id: Joi.string().required(),
    //     url: Joi.string().required(),
    //   }).required(),
    // }).required(),
    category: Joi.string().required().messages({
      "any.required": "Please enter product category",
    }),
    isNewArrival: Joi.boolean(),
    isFlashDeal: Joi.boolean(),
    discount: Joi.number(),
    stock: Joi.number().required().max(9999).messages({
      "any.required": "Please enter product stock",
      "number.max": "Stock cannot exceed limit",
    }),
    warranty: Joi.number().default(1),
    ratings: Joi.number().default(0),
    numOfReviews: Joi.number().default(0),
    reviews: Joi.array().items(
      Joi.object({
        user: Joi.string().required(),
        name: Joi.string().required(),
        rating: Joi.number().required(),
        comment: Joi.string().required(),
      }).required()
    ),
    createdAt: Joi.date().default(() => new Date()),
  });

  return schema.validate(body, options);
};
