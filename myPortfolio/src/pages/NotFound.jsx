import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
  return (
    <main className="container section">
      <h1>404 — Page not found</h1>
      <p>ページが見つかりません。<Link to="/">ホームへ戻る</Link></p>
    </main>
  );
}
