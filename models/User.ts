import mongoose,{Document, Model, Schema, model} from "mongoose";

export interface IUser extends Document{
    username: string;
    password: string;
    role: 'user' | 'admin'
}

const UserSchema: Schema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum:['user', 'role'], default:'user'}
})

const User = Model<IUser> = mongoose.models.User || model<IUser>('User', UserSchema);

export default User;