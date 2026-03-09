import React from 'react';
import { motion } from 'framer-motion';
import { useProgressStore } from '../../store/progressStore';
import { GlassCard, ProgressBar } from '../UI';
import { WORLDS } from '../../types';
import { isMastered } from '../../lib/spacedRepetition';

// Static word counts per grade — no need to load full JSON arrays just for .length
const GRADE_WORD_COUNT: Record<number, number> = {
  1: 30, 2: 30, 3: 66, 4: 46,  5: 165,
  6: 80, 7: 102, 8: 97, 9: 83, 10: 45, 11: 35,
};

export const ProgressScreen: React.FC = () => {
  const { xp, crystals, streak, masteryMap } = useProgressStore();

  const allEntries = Object.values(masteryMap);
  const practicedWords = allEntries.filter(e => e.score > 0).length;
  const masteredWords = allEntries.filter(e => isMastered(e)).length;
  const totalVocab = Object.values(GRADE_WORD_COUNT).reduce((s, n) => s + n, 0) || 1;
  const masteryPct = (practicedWords / totalVocab) * 100;

  const stats = [
    { label: 'XP', value: xp, emoji: '⚡', color: 'var(--ios-blue)' },
    { label: 'Кристаллы', value: crystals, emoji: '💎', color: 'var(--ios-purple)' },
    { label: 'Серия дней', value: streak, emoji: '🔥', color: 'var(--ios-orange)' },
    { label: 'В работе слов', value: practicedWords, emoji: '📚', color: 'var(--success-color)' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-display mb-1">Твои достижения</h1>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            <GlassCard className="px-4 py-3">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '52px 44px minmax(0, 1fr)',
                  alignItems: 'center',
                  columnGap: 10,
                  minHeight: 44,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 44,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    lineHeight: 1,
                    borderRadius: 14,
                    background: `color-mix(in srgb, ${s.color} 12%, white)`,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)',
                  }}
                >
                  {s.emoji}
                </div>

                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    lineHeight: 1,
                    color: s.color,
                    textAlign: 'center',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {s.value}
                </div>

                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.label}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Overall mastery */}
      <GlassCard className="p-5">
        <h3 className="text-headline mb-3">Общий прогресс</h3>
        <ProgressBar value={masteryPct} />
        <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-secondary)', marginTop: 8 }}>
          В работе: {practicedWords} из {totalVocab} слов ({Math.round(masteryPct)}%){masteredWords > 0 ? ` · Освоено: ${masteredWords}` : ''}
        </p>
      </GlassCard>

      {/* Per-world progress */}
      <GlassCard className="p-5">
        <h3 className="text-headline mb-4">По мирам</h3>
        <div className="flex flex-col gap-4">
          {WORLDS.map(world => {
            const worldEntries = Object.values(masteryMap).filter(e => {
              const g = parseInt(e.wordId.split('_')[0].replace('g', ''));
              return world.grades.includes(g);
            });
            const practiced = worldEntries.filter(e => e.score > 0).length;
            const mastered = worldEntries.filter(e => isMastered(e)).length;
            const total = world.grades.reduce((s, g) => s + (GRADE_WORD_COUNT[g] ?? 0), 0) || world.grades.length * 30;
            const pct = total > 0 ? (practiced / total) * 100 : 0;
            return (
              <div key={world.id}>
                <div className="flex justify-between mb-1" style={{ fontSize: 15, fontWeight: 500 }}>
                  <span style={{ color: 'var(--text-color)' }}>{world.emoji} {world.name}</span>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{practiced}/{total}{mastered > 0 ? ` (⭐${mastered})` : ''}</span>
                </div>
                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 80, damping: 20 }}
                    style={{ background: `linear-gradient(90deg, ${world.colorFrom}, ${world.colorTo})` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* Streak calendar (last 7 days) */}
      {streak > 0 && (
        <GlassCard className="p-5">
          <h3 className="text-headline mb-3">🔥 Серия: {streak} {streak === 1 ? 'день' : streak < 5 ? 'дня' : 'дней'}</h3>
          <div className="flex gap-2">
            {Array.from({ length: 7 }, (_, i) => i < streak).map((active, i) => (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: active ? 'var(--ios-orange)' : 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                }}
              />
            ))}
          </div>
        </GlassCard>
      )}
    </div>
  );
};
