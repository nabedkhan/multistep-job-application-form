import * as yup from "yup";

export const jobApplicationFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Error! Enter a valid email.").required("Email is required"),
  phone: yup
    .string()
    .matches(/^01[3-9]\d{8}$/, "Please enter a valid Bangladeshi phone number")
    .required("Phone number is required"),
  jobTitle: yup.string().required("Job title is required"),
  schedule: yup.string().required("Job schedule is required"),
  coverLetter: yup.string().required("Cover letter is required!"),
  cv: yup
    .mixed<File>()
    .required("CV is required")
    .test("fileSize", "File size is too large (max 5MB)", (value) => {
      if (!value) return true;
      return value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test("fileType", "Unsupported file format", (value) => {
      if (!value) return true;
      const supportedFormats = ["application/pdf", "application/msword"];
      return supportedFormats.includes(value.type);
    })
});

export type JobApplicationFormValues = yup.InferType<typeof jobApplicationFormSchema>;
