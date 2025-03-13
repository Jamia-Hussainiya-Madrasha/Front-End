import { z } from 'zod';

const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty("আপনার নামটি ফিলাপ করুন"), // Name is required
  email: z
    .string()
    .nonempty("আপনার ইমেইল ফিলাপ করুন") // Email is required
    .email("আপনার ইমেজইল টি ভুল, আবার সঠিক ইমেইল দিয়ে চেষ্টা করুন"), // Valid email format
  phone: z
    .string()
    .nonempty("১১ ডিজিটের আপনার ফোন নাম্বার দিন") // Phone number is required
    .regex(/^\d{11}$/, "ভুল ফোন নাম্বার (১১ ডিজিটের নাম্বার দিন)"), // Valid phone number format
  message: z
    .string()
    .nonempty("মেসেজ বক্স খালি রাখা যাবে না") // Message is required
});

export default contactFormSchema
