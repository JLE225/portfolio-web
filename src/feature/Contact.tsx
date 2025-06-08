import { Mail, MapPin, Phone, Send, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row h-full text-white min-h-[500px]">
      <div className="bg-slate-700/70 p-4 sm:p-6 rounded-l-lg border-r border-slate-600 w-full md:w-1/2">
        <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
          Let's Connect
        </h2>

        <div className="space-y-5">
          {[
            {
              icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
              label: "Email",
              value: "jlewhite225@gmail.com",
              bg: "bg-blue-500/20",
            },
            {
              icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
              label: "Phone",
              value: "+62 812-3007-5247",
              bg: "bg-purple-500/20",
            },
            {
              icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />,
              label: "Location",
              value: "Bandung, Jawa Barat",
              bg: "bg-green-500/20",
            },
          ].map(({ icon, label, value, bg }, i) => (
            <div className="flex items-start gap-3" key={i}>
              <div className={`${bg} p-2 rounded-lg`}>
                {icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-slate-400">{label}</h3>
                <p className="text-sm sm:text-base text-slate-300">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xs sm:text-sm font-medium text-slate-400 mb-3">Follow Me</h3>
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {[
              { Icon: Github, label: "GitHub" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }, i) => (
              <button
                key={i}
                className="bg-slate-600/50 hover:bg-slate-600/70 p-2 rounded-lg transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 w-full md:w-2/3">
        <h2 className="text-lg sm:text-xl font-bold text-slate-300 mb-2">
          Send a Message
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">
          Have a question or want to work together? Fill out the form below.
        </p>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
                <input
                  type="email"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-9 pr-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                placeholder="What's this about?"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-400 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <div className="flex items-center justify-end pt-2">
            <button
              type="button"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 sm:px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
