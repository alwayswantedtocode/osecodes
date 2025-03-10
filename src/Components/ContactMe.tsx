"use client"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend } from 'react-icons/fi'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from "axios"


interface EmailValues {
    name: string
    email: string
    subject: string
    message: string
}


const ContactForm = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    // Validation Schema
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .trim()
            .max(50, "Name too long")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        subject: Yup.string()
            .min(2, "Message must be at least 2 characters")
            .max(150, "Message too long (max 1000 characters)")
            .required("Message is required"),
        message: Yup.string()
            .min(2, "Message must be at least 2 characters")
            .max(1000, "Message too long (max 1000 characters)")
            .required("Message is required"),
    })

    // Formik Initialization
    const formik = useFormik<EmailValues>({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm, setStatus }) => {
            try {
                setSubmitting(true)

                await axios.post('/api/send-email', values, {
                    headers: { 'Content-Type': 'application/json' }
                })

                resetForm()
                setStatus({ success: true })
                setTimeout(() => setStatus(null), 5000)
            } catch (error) {
                let errorMessage = 'Submission failed. Please try again later.'

                if (axios.isAxiosError(error)) {
                    errorMessage = error.response?.data?.error || error.message
                } else if (error instanceof Error) {
                    errorMessage = error.message
                }

                setStatus({ error: errorMessage })
            } finally {
                setSubmitting(false)
            }
        },
    })

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="py-5 "
            id='contact'
        >
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-slate-100 text-center mb-12"
                >
                    Get in Touch
                </motion.h2>

                {/* Form */}
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full px-4 py-3 bg-white border-2 ${formik.touched.name && formik.errors.name
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-lg   focus:ring-[#c07a5c] focus:border-[#c07a5c]  transition-all`}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                        )}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full px-4 py-3 bg-white border ${formik.touched.email && formik.errors.email
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-lg border-2 focus:ring-[#c07a5c] focus:border-[#c07a5c] transition-all`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </motion.div>

                    {/* Subject field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Frontend Developer for hire!"
                            name="subject"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full px-4 py-3 bg-white border-2  rounded-lg  focus:ring-[#c07a5c] focus:border-[#c07a5c] transition-all`}
                        />

                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Your message..."
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full px-4 py-3 bg-white border ${formik.touched.message && formik.errors.message
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-lg focus:ring-2 focus:ring-[#c07a5c] focus:border-[#c07a5c] transition-all h-40`}
                        />
                        {formik.touched.message && formik.errors.message && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                        )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center "
                    >
                        <button
                            type="submit"
                            disabled={formik.isSubmitting || !formik.isValid}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c07a5c]  text-white rounded-lg shadow-lg hover:bg-[#f2d2c5] hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FiSend className="w-5 h-5" />
                            {formik.isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </motion.div>

                    {/* Success/Error Messages */}
                    {formik.status?.success && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-600 text-center"
                        >
                            Message sent successfully!
                        </motion.div>
                    )}
                    {formik.status?.error && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-center"
                        >
                            {formik.status.error}
                        </motion.div>
                    )}
                </form>
            </div>
        </motion.section>
    )
}

export default ContactForm