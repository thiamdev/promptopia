import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  userImage: {
    type: String, // URL de l'image de l'utilisateur
    required: true,
  },
  commentText: {
    type: String,
    required: true,
  },

});


const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  username: {
    type: String,
    required: [true, "username is required"],
  },
  itemToSell: {
    type: String,
    required: [true, "Prompt is required"],
  },
  propertyType: {
    type: String,
    required: [true, "Tag is required"],
  },
  saleType: {
    type: String,
    required: true,

  },
  sellerType: {
    type: String,
    required: true,

  },
  address: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: String,
    required: true,
  },
  bathrooms: {
    type: String,
    required: true,
  },
  livingRooms: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
  },
  dispo: {
    wifi: {
      type: Boolean,
      default: false
    },
    pool: {
      type: Boolean,
      default: false
    },
    Mountain: {
      type: Boolean,
      default: false
    },
    Beach: {
      type: Boolean,
      default: false
    },
    chef: {
      type: Boolean,
      default: false
    },
    Parking: {
      type: Boolean,
      default: false
    },
    camera: {
      type: Boolean,
      default: false
    },
    Wheelchair: {
      type: Boolean,
      default: false
    },
    Patio: {
      type: Boolean,
      default: false
    },

  },
  landSize: {
    type: String,

  },
  titleType: {
    type: String,

  },
  comments:
    [CommentSchema],
  default: [],

  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: []
  }]


});



const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;













