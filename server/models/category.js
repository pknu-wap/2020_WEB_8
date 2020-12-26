import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        default: "자유게시판",
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