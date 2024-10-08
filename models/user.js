
import { Schema, model, models } from "mongoose";

const profilUser = new Schema({
  entreprise: {
    type: String,  
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  ninea: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  }
});

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [/^[a-zA-Zа-яА-Я0-9!@#$%^&*()_+{}\[\]|\\:;'\"<>,.?\/`~-]*$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
    required: true,
  },
  profil: [profilUser],
  
}

);

const User = models.User || model("User", UserSchema);

export default User;
