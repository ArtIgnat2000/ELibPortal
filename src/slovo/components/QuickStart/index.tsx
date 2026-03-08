import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useProgressStore } from '../../store/progressStore';
import { useSettingsStore } from '../../store/settingsStore';
import { GlassCard, ProgressBar } from '../UI';
import { isMastered } from '../../lib/spacedRepetition';
import type { Word } from '../../types';

async function loadGradeWords(grade: number): Promise<Word[]> {
  const mod = await import(`../../data/words/grade${grade}.json`);
  return mod.default as Word[];
}

interface QuickStartProps {
  onStartSession: (grade: number) => void;
}

export const QuickStartScreen: React.FC<QuickStartProps> = ({ onStartSession }) => {
  const { masteryMap, xp, streak } = useProgressStore();
  const { activeGrade, wordsPerSession } = useSettingsStore();

  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    let active = true;
    loadGradeWords(activeGrade).then(w => { if (active) setWords(w); });
    return () => { active = false; };
  }, [activeGrade]);
  const total = words.length;

  const entries = words.map(w => masteryMap[w.id]);
  const practiced = entries.filter(e => e && e.score > 0).length;
  const mastered = entries.filter(e => isMastered(e)).length;
  const pct = total > 0 ? (practiced / total) * 100 : 0;

  const weakWords = words
    .filter(w => {
      const e = masteryMap[w.id];
      return e && e.score > 0 && e.score < 60;
    })
    .sort((a, b) => (masteryMap[a.id]?.score ?? 0) - (masteryMap[b.id]?.score ?? 0))
    .slice(0, 8);

  const newCount = words.filter(w => !masteryMap[w.id] || masteryMap[w.id].score === 0).length;
  const gradeLabel = `${activeGrade} класс`;

  return (
    <div className="flex flex-col gap-5">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-display mb-1">Быстрый старт тренировки</h1>
      </motion.div>

      {/* Текущий класс + кнопка старта */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
        <GlassCard className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 4 }}>
                ТЕКУЩИЙ КЛАСС
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-color)', letterSpacing: '-0.02em' }}>
                {gradeLabel}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 4 }}>
                СЛОВ В СЕССИИ
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--ios-blue)', letterSpacing: '-0.02em' }}>
                {wordsPerSession}
              </div>
            </div>
          </div>

          <ProgressBar value={pct} className="mb-2" />
          <div className="flex justify-between mb-5" style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500 }}>
            <span>В работе: {practiced} / {total}</span>
            {mastered > 0 && <span>⭐ Освоено: {mastered}</span>}
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            onClick={() => onStartSession(activeGrade)}
            className="w-full py-4 rounded-[16px] border-none cursor-pointer font-bold"
            style={{
              background: 'var(--ios-blue)',
              color: '#fff',
              fontSize: 18,
              fontFamily: 'var(--font-sans)',
              boxShadow: '0 4px 20px rgba(0,122,255,0.35)',
              letterSpacing: '-0.02em',
            }}
          >
            ▶ Начать тренировку
          </motion.button>
        </GlassCard>
      </motion.div>

      {/* Слабые слова */}
      {weakWords.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <GlassCard className="p-5">
            <h3 className="text-headline mb-1">⚠️ Требуют повторения</h3>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12 }}>
              Эти слова запомнены плохо — они попадут в следующую тренировку первыми
            </p>
            <div className="flex flex-wrap gap-2">
              {weakWords.map(w => {
                const score = masteryMap[w.id]?.score ?? 0;
                return (
                  <div
                    key={w.id}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 20,
                      background: score < 30 ? 'rgba(255,59,48,0.1)' : 'rgba(255,149,0,0.1)',
                      color: score < 30 ? 'var(--error-color)' : 'var(--ios-orange)',
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {w.text}
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* Мини-статистика */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Новых слов', value: newCount, color: 'var(--ios-blue)', emoji: '🆕' },
            { label: 'XP накоплено', value: xp, color: 'var(--ios-purple)', emoji: '⚡' },
            { label: 'Серия дней', value: streak, color: 'var(--ios-orange)', emoji: '🔥' },
          ].map(s => (
            <GlassCard key={s.label} className="p-3 text-center">
              <div style={{ fontSize: 22 }}>{s.emoji}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: s.color, letterSpacing: '-0.02em' }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)', fontWeight: 600, marginTop: 2, lineHeight: 1.3 }}>{s.label}</div>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
