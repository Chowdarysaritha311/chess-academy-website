import { site } from "@/lib/data";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi! I'd like to know more about chess classes at Sankar Chess Academy."
  );

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#0B0B0D" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.95.57 3.76 1.55 5.3L2 22l4.94-1.62a9.9 9.9 0 0 0 5.1 1.4h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14a8.3 8.3 0 0 1-5.8 2.36h-.01c-1.6 0-3.13-.43-4.46-1.24l-.32-.19-3.1 1.02 1.04-3.03-.21-.34a8.24 8.24 0 0 1-1.27-4.4c0-4.56 3.71-8.27 8.27-8.27 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.85c0 2.21-.86 4.27-2.4 5.82zm-2.6-5.1c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.6.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-1.62-.81-2.68-1.45-3.74-3.29-.28-.49.28-.45.8-1.51.09-.18.04-.34-.04-.48-.09-.14-.6-1.45-.83-1.99-.22-.52-.45-.45-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.46.07-.71.34-.25.27-.94.92-.94 2.25s.97 2.62 1.1 2.8c.14.18 1.93 2.94 4.68 4.01 2.31.9 2.78.72 3.28.68.5-.05 1.6-.65 1.83-1.28.22-.63.22-1.16.16-1.28-.07-.12-.25-.18-.52-.32z" />
      </svg>
    </a>
  );
}
