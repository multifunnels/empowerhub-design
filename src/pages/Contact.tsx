import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Send,
  MessageSquare,
} from "lucide-react";
import { JIcon } from "@/components/JIcon";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import tatamiEngawa from "@/assets/jp/tatami-engawa.webp";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isRtl = i18n.dir() === "rtl";
  const align = isRtl ? "text-right" : "text-left";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "email">("whatsapp");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (contactMethod === "email") {
        emailjs.init("YOUR_USER_ID");
        const templateParams = {
          from_name: name,
          from_email: email,
          message,
          to_email: "sharoni@tsinspire.com",
        };
        await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
        toast({
          title: t("contact.toast.successTitle"),
          description: t("contact.toast.successDesc"),
        });
      } else {
        const phoneNumber = "972546688430";
        const whatsappText =
          `${t("contact.form.whatsappPrefixName")}: ${name}%0A` +
          `${t("contact.form.whatsappPrefixEmail")}: ${email}%0A%0A` +
          `${t("contact.form.whatsappPrefixMessage")}:%0A${message}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
        window.open(whatsappLink, "_blank");
        toast({
          title: t("contact.toast.whatsappTitle"),
          description: t("contact.toast.whatsappDesc"),
        });
      }
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: t("contact.toast.errorTitle"),
        description: t("contact.toast.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldDir = isRtl ? "rtl" : "ltr";

  const socials = [
    { href: "https://www.instagram.com/aizensharon/", icon: Instagram, label: "Instagram" },
    { href: "https://www.youtube.com/channel/UCkfE8yY9UY5-xXjZdlpRZpw", icon: Youtube, label: "YouTube" },
    { href: "https://twitter.com/sharonaizen", icon: Twitter, label: "Twitter" },
    { href: "https://www.facebook.com/TSI.Think.Success.Inspire", icon: Facebook, label: "Facebook" },
  ];

  const tabBase =
    "flex-1 py-3 text-[11px] uppercase tracking-[0.28em] transition-colors duration-500 border-b-2";
  const tabActive = "border-primary text-primary";
  const tabIdle = "border-transparent text-muted-foreground hover:text-foreground";

  return (
    <div className="min-h-screen">
      <SiteNav />
      <Breadcrumbs />

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className={`mb-20 ${align}`}>
          <div className="eyebrow">
            <span>{t("nav.contact")}</span>
            <span className="jp">お問い合わせ</span>
          </div>
          <div className={`hairline-short mt-6 mb-8 ${isRtl ? "ms-auto" : ""}`} />
          <h1 className="display-jp text-4xl md:text-6xl">{t("contact.title")}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border max-w-5xl mx-auto">
          {/* Info column */}
          <div className={`bg-background p-10 lg:p-14 ${align}`}>
            <h2 className="display-jp text-xl md:text-2xl mb-10">
              {t("contact.infoTitle")}
            </h2>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <JIcon icon={Phone} size={18} className="mt-1" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t("contact.phoneHours")}
                  </p>
                  <p className="mt-2 text-sm tracking-wide" dir="ltr">054-6688430</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <JIcon icon={Mail} size={18} className="mt-1" />
                <div>
                  <p className="text-sm tracking-wide" dir="ltr">sharoni@tsinspire.com</p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm leading-[1.9] text-muted-foreground mb-6">
                  {t("contact.readyToStart")}
                </p>
                <div className="flex gap-6">
                  {socials.map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-foreground/60 hover:text-primary transition-colors duration-500"
                    >
                      <JIcon icon={icon} size={18} className="text-current" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="bg-background p-10 lg:p-14">
            <div className="flex mb-10 border-b border-border">
              <button
                type="button"
                onClick={() => setContactMethod("whatsapp")}
                className={`${tabBase} ${contactMethod === "whatsapp" ? tabActive : tabIdle}`}
              >
                {t("contact.form.whatsapp")}
              </button>
              <button
                type="button"
                onClick={() => setContactMethod("email")}
                className={`${tabBase} ${contactMethod === "email" ? tabActive : tabIdle}`}
              >
                {t("contact.form.email")}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="eyebrow block mb-2">
                  <span>{t("contact.form.name")}</span>
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  dir={fieldDir}
                  className={`hairline-input ${align}`}
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow block mb-2">
                  <span>{t("contact.form.emailLabel")}</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  dir={fieldDir}
                  className={`hairline-input ${align}`}
                />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow block mb-2">
                  <span>{t("contact.form.message")}</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  dir={fieldDir}
                  rows={5}
                  className={`hairline-input resize-none ${align}`}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-none bg-primary hover:bg-foreground text-primary-foreground text-[11px] uppercase tracking-[0.28em] py-6 transition-colors duration-500 shadow-none"
              >
                {isSubmitting
                  ? t("contact.form.sending")
                  : contactMethod === "whatsapp"
                  ? t("contact.form.openWhatsapp")
                  : t("contact.form.send")}
                {contactMethod === "whatsapp" ? (
                  <MessageSquare className={`${isRtl ? "mr-3" : "ml-3"} h-3 w-3`} strokeWidth={1.25} />
                ) : (
                  <Send className={`${isRtl ? "mr-3" : "ml-3"} h-3 w-3`} strokeWidth={1.25} />
                )}
              </Button>
              <p className="text-[11px] tracking-[0.18em] text-muted-foreground text-center">
                {contactMethod === "whatsapp"
                  ? t("contact.form.whatsappHint")
                  : t("contact.form.emailHint")}
              </p>
            </form>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Contact;
