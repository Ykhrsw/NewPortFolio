import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactBtn() {
  const { t } = useTranslation();

  return (
    <a className="cta" href="/contact">
      {t("contact_cta")}
    </a>
  );
}
