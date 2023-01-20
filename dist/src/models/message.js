import { Schema, model } from "mongoose";
const Message = new Schema({
    content: String,
    lastIndex: Number,
    log: {
        isSeen: Boolean,
        seenDate: Schema.Types.Date,
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: "group",
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
}, { timestamps: true });
export default model("message", Message);
//# sourceMappingURL=message.js.map