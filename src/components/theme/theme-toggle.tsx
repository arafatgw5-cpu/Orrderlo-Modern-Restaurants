"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="h-9 w-9 rounded-full border border-border/50 text-muted-foreground hover:text-foreground"
      >
        {theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </motion.div>
  );
}