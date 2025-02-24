"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const metadata = {
  title: "Contact Us - Palace Pizza Bartow",
  description: "Get in touch with us at Palace Pizza Bartow.",
  openGraph: {
    title: "Contact Us - Palace Pizza Bartow",
    description: "Get in touch with us at Palace Pizza Bartow.",
    url: "https://palacepizzabartow.com/contact-us",
  },
};

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "success" | "error" | "loading" | ""; message: string }>({
    type: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("https://formsubmit.co/palacepizzabartow@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error submitting form");

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.log(error);
      setStatus({ type: "error", message: "Something went wrong. Try again later." });
    }
  };

  return (
    <>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-6 text-black border-b pb-2">
          Contact Us
        </h1>

        <div className="flex items-center justify-center">
          <Card className="w-full max-w-3xl bg-white shadow-md border border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-gray-900">Get in Touch</CardTitle>
              <p className="text-gray-500 text-sm">{`We'd love to hear from you!`}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-500 h-32"
                />

                <Button type="submit" disabled={status.type === "loading"} className="w-full bg-black text-white hover:bg-gray-800 transition">
                  {status.type === "loading" ? <Loader2 className="animate-spin mr-2" /> : "Send Message"}
                </Button>

                {status.type && (
                  <div className={`flex items-center justify-center p-2 rounded text-sm ${
                    status.type === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                  }`}>
                    {status.type === "error" ? <AlertCircle className="mr-2" /> : <CheckCircle className="mr-2" />}
                    {status.message}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}