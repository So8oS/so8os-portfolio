import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const Contactus = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const bannedWords = ["fuck", "pussy", "ass", "sexy", "bitch"];

  const isContentAppropriate = (content: string): boolean => {
    const lowerCaseContent = content.toLowerCase();
    return !bannedWords.some((bannedWord) =>
      lowerCaseContent.includes(bannedWord)
    );
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      const formData = new FormData(form.current);
      const name = formData.get("user_name") as string;
      const email = formData.get("user_email") as string;
      const message = formData.get("message") as string;

      if (
        !isContentAppropriate(name) ||
        !isContentAppropriate(email) ||
        !isContentAppropriate(message)
      ) {
        toast("Your message contains inappropriate content.");
        setIsLoading(false);
        return;
      }

      try {
        await emailjs.sendForm(
          "gmail",
          "template_3nth5o9",
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_JS
        );
        form.current.reset();
        toast("Your message has been sent");
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        console.error("Failed to send email:", errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      className="mt-10 mb-24 flex h-full w-80 flex-col items-center justify-center md:w-[45.9375rem]"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <span className="mb-10 text-5xl font-bold">Contact me</span>
      <form
        className="flex flex-col items-center gap-12"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="h-[3.375rem] w-[18rem] rounded-[0.625rem] border border-gray-600 p-2 dark:bg-[#3B3B3B] dark:text-white md:w-[27.25rem]"
          type="text"
          name="user_name"
          placeholder="Name"
          required
        />
        <input
          className="h-[3.375rem] w-[18rem] rounded-[0.625rem] border border-gray-600 p-2 dark:bg-[#3B3B3B] dark:text-white md:w-[27.25rem]"
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea
          className="h-[13.25rem] w-[18rem] resize-none items-start rounded-[0.625rem] border border-gray-600 p-2 dark:bg-[#3B3B3B] dark:text-white md:w-[27.25rem]"
          name="message"
          placeholder="Message"
          required
        />
        <input
          className="stripes font- dark:stripes-dark h-10 w-36 cursor-pointer rounded-xl border border-darkBrown bg-darkYellow font-Poppins font-semibold text-darkBrown shadow-2xl transition-all duration-300 hover:scale-110 active:scale-75 dark:text-lightYellow"
          type="submit"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};
