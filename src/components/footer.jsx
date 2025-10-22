
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border ">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} Mohamed Ghaith Hamzaoui. All rights reserved.
          </p>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-primary" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
