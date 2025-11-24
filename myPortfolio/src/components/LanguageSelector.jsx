import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="language-select"
      aria-label="language-select"
    >
      <option value="ja">日本語</option>
      <option value="en">English</option>
      <option value="cn">中文</option>
      <option value="ko">한국어</option>
    </select>
  );
}
