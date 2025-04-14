
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = `הודעה חדשה מ-${name}`;
      const body = `שם: ${name}\nאימייל: ${email}\n\nהודעה:\n${message}`;
      const mailtoLink = `mailto:sharoni@tsinspire.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default mail client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      toast({
        title: "ההודעה נשלחה בהצלחה",
        description: "נחזור אליך בהקדם האפשרי",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "שגיאה בשליחת ההודעה",
        description: "אנא נסה שוב או צור קשר ישירות בטלפון",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/4c1deaf2-aeb2-4d36-b3cd-ead85754e3a9.png" 
                  alt="TSI Logo" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    console.error('Error loading logo:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => window.location.href = 'https://academy.tsionline.org/courses'}>קורסים</Button>
              <Button variant="ghost" asChild>
                <Link to="/about">אודות</Link>
              </Button>
              <Button variant="ghost">המלצות</Button>
              <Button variant="ghost">משאבים</Button>
              <Button variant="ghost" asChild>
                <Link to="/contact">צור קשר</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => window.location.href = 'https://academy.tsionline.org/'}>הרשמה</Button>
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-4 mt-8">
                    <Button variant="ghost" className="justify-end" onClick={() => window.location.href = 'https://academy.tsionline.org/courses'}>קורסים</Button>
                    <Button variant="ghost" className="justify-end" asChild>
                      <Link to="/about">אודות</Link>
                    </Button>
                    <Button variant="ghost" className="justify-end">המלצות</Button>
                    <Button variant="ghost" className="justify-end">משאבים</Button>
                    <Button variant="ghost" className="justify-end" asChild>
                      <Link to="/contact">צור קשר</Link>
                    </Button>
                    <Button className="mt-4" onClick={() => window.location.href = 'https://academy.tsionline.org/'}>
                      הרשמה
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">צור קשר</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-right">פרטי קשר</h2>
              
              <div className="space-y-6 text-right">
                <div className="flex flex-row-reverse items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-500">ניתן להתקשר בימים א'-ה' 9:00 עד 18:00</p>
                    <p className="font-medium">054-6688430</p>
                  </div>
                </div>
                
                <div className="flex flex-row-reverse items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">sharoni@tsinspire.com</p>
                  </div>
                </div>
                
                <div>
                  <p className="mb-3 text-gray-600 text-right">מוזמנים להתחיל את השינוי</p>
                  <div className="flex justify-end gap-3">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-primary/10 transition-colors">
                      <Instagram className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-primary/10 transition-colors">
                      <Youtube className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-primary/10 transition-colors">
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-primary/10 transition-colors">
                      <Facebook className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                <div>
                  <Label htmlFor="name">שם מלא</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                <div>
                  <Label htmlFor="email">אימייל</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                <div>
                  <Label htmlFor="message">הודעה</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[150px] text-right"
                    dir="rtl"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "שולח..." : "שלח הודעה"}
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  *הטופס יפתח את תוכנת הדואר האלקטרוני שלך
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
