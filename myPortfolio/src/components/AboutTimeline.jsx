import React from 'react';

export default function AboutTimeline() {
  const items = [
    '1997年、大阪で生まれる',
    '中学・高校を通して外国語の楽しさを知る',
    '2020年、関西外国語大学卒業',
    '2023年、マレーシアのBPOを経験',
    '2024年、フリーランサーの活動を開始',
    '2025年、プログラミングへ専念'
  ];
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <div key={i} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">{it}</div>
        </div>
      ))}
    </div>
  );
}
