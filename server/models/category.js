import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        enum: ["자유게시판", "분양게시판", "병원정보 게시판", "미분류"],
        default: "미분류",
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
    ],
});

const Category = mongoose.model("category", categorySchema);

export default Category;