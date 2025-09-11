"use client";
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JS (bundle includes Popper)
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ Tooltip }) => {
      // Initialize all tooltips in the document
      const tooltipTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach((el) => {
        try {
          // eslint-disable-next-line no-new
          new Tooltip(el as Element);
        } catch {}
      });
    });
  }, []);

  return null;
}
