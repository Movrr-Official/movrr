import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(10, "Excerpt must provide a summary"),
  author: z.string().min(1, "Author is required"),
  category: z.string(),
  imageUrl: z.string().url("Invalid URL"),
  content: z.string().min(1, "Content is required"),
});

const contactSchema = z.object({
  fullName: z.string().min(1, {
    message: "Please enter your name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(1, {
    message: "Please enter your phone number.",
  }),
  company: z.string().min(1, {
    message: "Please enter your company name.",
  }),
  subject: z.string().min(1, {
    message: "Please enter a subject.",
  }),
  message: z.string().min(1, {
    message: "Please enter your message.",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy and terms of service",
  }),
});

const signInFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

const updateBlogSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  author: z.string().min(1, "Author is required").optional(),
  imageUrl: z.string().url("Invalid URL").optional(),
  content: z.string().min(1, "Content is required").optional(),
});

export { blogSchema, contactSchema, signInFormSchema, updateBlogSchema };

export type SignInFormData = z.infer<typeof signInFormSchema>;
