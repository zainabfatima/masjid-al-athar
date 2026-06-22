"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export function Toast({ message, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
