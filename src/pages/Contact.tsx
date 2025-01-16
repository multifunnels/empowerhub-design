import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    toast({
      title: "ההודעה נשלחה בהצלחה",
      description: "נחזור אליך בהקדם האפשרי",
    });
    setName("");
    setEmail("");
    setMessage("");
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">צור קשר</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
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
            <Button type="submit" className="w-full">שלח הודעה</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;