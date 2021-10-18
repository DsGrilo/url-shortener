import { prop, Typegoose } from "@hasezoey/typegoose";

export class URL extends Typegoose{
    @prop({required: true})
    hash: string;
    
    @prop({required: true})
    originUrl: string

    @prop({required: true})
    shortUrl:  string

} 
export const URLModel = new URL().getModelForClass(URL);