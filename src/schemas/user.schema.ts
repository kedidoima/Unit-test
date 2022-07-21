import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required: true})
    name : string;

    @Prop()
    age: string;

    @Prop()
    gender: number;

    @Prop()
    phoneNumber: string;

    @Prop({default: ()=> new Date()})
    createAt: Date;

    @Prop({default: ()=> new Date()})
    updateAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User);