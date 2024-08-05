"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonDisabled(true);
    setSubmitting(true);
    
    try {
      const response = await fetch('api/letter/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      console.log(response)
      
      const datas = await response.json();
      
      if (datas.status >= 10000) {
        setStatus(datas.status);
        setMessage(
          "Error joining the newsletter."
        );
        setTimeout(() => {
          setMessage("");
          setButtonDisabled(false);
        }, 2000);
        console.log(datas)
        return;
      }

      setStatus(201);
      setMessage("Thank you for subscribing to my newsletter.");
      setTimeout(() => {
        setMessage("");
        setEmail("");
        setButtonDisabled(false);
      }, 4000);
    } catch (error) {
      setStatus(500);
      setMessage(
        "Error joining the newsletter."
      );
      setTimeout(() => {
        setMessage("");
        setButtonDisabled(false);
      }, 2000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-[80%] mx-auto pb-60">
        <div className="flex flex-col items-center">
          <Image alt="5Review" src="/5ReviewBlack.svg" width={100} height={29} />
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 !leading-[1.4]">
            Enter your email for updates
          </h3>
        </div>
        <div className="w-full p-5 md:p-6 space-y-5 bg-white shadow-md rounded-xl md:max-w-[600px]">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 bg-gray-100 rounded-md outline-none grow"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
              <button
                className="px-5 py-3 font-bold text-gray-100 transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:scale-105 disabled:opacity-80"
                type="submit"
                disabled={buttonDisabled}
              >
                {submitting ? "Submitting" : "Submit"}
              </button>
            </div>
            {message && (
              <p
                className={`${
                  status !== 201 ? "text-red-500" : "text-green-500"
                } pt-4 font-black `}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}


