import mongoose, { Schema } from "mongoose";

interface Highlight {
  type: string;
}

interface Specification {
  title: string;
  description: string;
}

interface Image {
  public_id: string;
  url: string;
}

interface Brand {
  name: string;
  logo: Image;
}

interface Review {
  user: mongoose.Types.ObjectId;
  name: string;
  rating: number;
  comment: string;
}

interface Product {
  name: string;
  description: string;
  highlights: Highlight[];
  specifications?: Specification[];
  price: number;
  offer_price: number;
  images: Image[];
  brand?: Brand;
  category?: mongoose.Types.ObjectId;
  discount?: number;
  isFlashDeal?: Boolean;
  isNewArrival?: Boolean;
  stock: number;
  warranty?: number;
  ratings?: number;
  numOfReviews: number;
  reviews?: Review[];
  user: mongoose.Types.ObjectId;
  createdAt: Date;
  uniqueId?: string;
}

const productSchema = new mongoose.Schema<Product>({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  highlights: [
    {
      type: String,
      required: true,
    },
  ],
  specifications: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  offer_price: {
    type: Number,
    required: [true, "Please enter cutted price"],
  },
  images: [{
      type: String,
    }],
  // brand: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   logo: {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  isNewArrival: Boolean,
  isFlashDeal: Boolean,
  discount: Number,
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxlength: [4, "Stock cannot exceed limit"],
    default: 1,
  },
  warranty: {
    type: Number,
    default: 1,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  uniqueId: String,
});

export { Product };

export default mongoose.model<Product>("Product", productSchema);
