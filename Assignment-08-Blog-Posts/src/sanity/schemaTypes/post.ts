import { defineType } from "sanity"

export const post = defineType({
    name: "post",
    title: "Posts",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "postImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"likes",
            type:"number",
            title:"Likes",
        },
        {
            name:"dislikes",
            type:"number",
            title:"Dislikes",
        },
        {
            name:"comments",
            type:"string",
            title:"Comments",
        }
    ]
})