"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/data";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Błąd wysyłki");

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="Get In"
        title_2="Touch"
        description="Have a project in mind or just want to say hi? I'd love to hear from you."
      />
      <div className="w-[80%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* contact info */}
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-anchor-placement="top-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let&apos;s talk</h3>
                <p className="text-muted-foreground">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  return (
                    <a
                      href={item.href}
                      key={item.label}
                      target="_blank"
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="size-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                        <item.icon className="size-5 text-blue-500 dark:text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground ">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              {/* social icons */}
              <div>
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    return (
                      <a
                        href={link.href}
                        key={link.label}
                        target="_blank"
                        className="size-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                      >
                        <link.icon className="size-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* contact form */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-anchor-placement="top-center"
          >
            <form
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    {...register("name", { required: "Podaj swoje imię" })}
                    placeholder="Nazwa"
                    className="bg-gray-100"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Podaj swój email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Nieprawidłowy adres email",
                      },
                    })}
                    placeholder="email@example.com"
                    className="bg-gray-100"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  {...register("subject", { required: "Podaj temat" })}
                  placeholder="Wpisz tytuł wiadomości"
                  className="bg-gray-100 "
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register("message", { required: "Wpisz wiadomość" })}
                  placeholder="Wiadomość"
                  rows={5}
                  className="bg-gray-100 h-40"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer"
                disabled={isSubmitting}
              >
                <Send className="size-4 mr-2" />
                {isSubmitting ? "Wysyłanie..." : "Send Message"}
              </Button>
              {/* status */}
              {submitStatus === "success" && (
                <p className="text-green-500">Wiadomość wysłana!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500">Coś poszło nie tak.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
