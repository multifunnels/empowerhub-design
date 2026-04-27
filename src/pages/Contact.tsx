import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
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
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isRtl = i18n.dir() === "rtl";
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
  const fieldAlign = isRtl ? "text-right" : "text-left";
  const rowDir = isRtl ? "flex-row-reverse" : "flex-row";

  return (
    <div className="min-h-screen">
      <SiteNav />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">{t("contact.title")}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className={`text-2xl font-semibold mb-6 ${fieldAlign}`}>
                {t("contact.infoTitle")}
              </h2>

              <div className={`space-y-6 ${fieldAlign}`}>
                <div className={`flex ${rowDir} items-center gap-3`}>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-500">{t("contact.phoneHours")}</p>
                    <p className="font-medium">054-6688430</p>
                  </div>
                </div>

                <div className={`flex ${rowDir} items-center gap-3`}>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">sharoni@tsinspire.com</p>
                  </div>
                </div>

                <div>
                  <p className={`mb-3 text-gray-600 ${fieldAlign}`}>{t("contact.readyToStart")}</p>
                  <div className={`flex ${isRtl ? "justify-end" : "justify-start"} gap-3`}>
                    <a
                      href="https://www.instagram.com/aizensharon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-gray-700" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCkfE8yY9UY5-xXjZdlpRZpw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Youtube className="h-5 w-5 text-gray-700" />
                    </a>
                    <a
                      href="https://twitter.com/sharonaizen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </a>
                    <a
                      href="https://www.facebook.com/TSI.Think.Success.Inspire"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-2 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex justify-center space-x-4 mb-2">
                  <div
                    className={`p-3 rounded-full cursor-pointer transition-colors flex items-center gap-2 ${
                      contactMethod === "whatsapp"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    onClick={() => setContactMethod("whatsapp")}
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>{t("contact.form.whatsapp")}</span>
                  </div>
                  <div
                    className={`p-3 rounded-full cursor-pointer transition-colors flex items-center gap-2 ${
                      contactMethod === "email"
                        ? "bg-primary/10 text-primary"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    onClick={() => setContactMethod("email")}
                  >
                    <Mail className="h-5 w-5" />
                    <span>{t("contact.form.email")}</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={fieldAlign}
                    dir={fieldDir}
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t("contact.form.emailLabel")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={fieldAlign}
                    dir={fieldDir}
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={`min-h-[150px] ${fieldAlign}`}
                    dir={fieldDir}
                  />
                </div>
                <Button
                  type="submit"
                  className={`w-full ${
                    contactMethod === "whatsapp" ? "bg-green-600 hover:bg-green-700" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("contact.form.sending")
                    : contactMethod === "whatsapp"
                    ? t("contact.form.openWhatsapp")
                    : t("contact.form.send")}
                  {contactMethod === "whatsapp" ? (
                    <MessageSquare className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4`} />
                  ) : (
                    <Send className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4`} />
                  )}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  {contactMethod === "whatsapp"
                    ? t("contact.form.whatsappHint")
                    : t("contact.form.emailHint")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
