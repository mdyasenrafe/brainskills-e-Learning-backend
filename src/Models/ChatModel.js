const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserModel" }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MessageModel",
        },
        groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    },
    { timestamps: true }
);

const ChatModel = mongoose.model("Chat", ChatSchema);

module.exports = ChatModel;